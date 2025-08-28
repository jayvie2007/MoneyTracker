import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  setUser: (user: User) => void;
  setTokens: (tokens: Tokens) => void;
  refreshToken: () => Promise<boolean>;
}

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (username: string, password: string): Promise<boolean> => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await fetch('/api/auth/oauth-login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            set({ 
              error: data.error || 'Admin login failed. Please check your credentials.',
              isLoading: false 
            });
            return false;
          }

          // Set user and tokens in store (OAuth users are always admin)
          set({
            user: {
              ...data.user,
              role: 'admin' // Force OAuth users to be admin
            },
            tokens: data.tokens,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          return true;

        } catch (error) {
          console.error('Login error:', error);
          set({
            error: 'Login failed. Please try again.',
            isLoading: false,
          });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          tokens: null,
          isAuthenticated: false,
          error: null,
        });
      },

      clearError: () => {
        set({ error: null });
      },

      setUser: (user: User) => {
        set({ user, isAuthenticated: true });
      },

      setTokens: (tokens: Tokens) => {
        set({ tokens });
      },

      refreshToken: async (): Promise<boolean> => {
        const { tokens } = get();
        if (!tokens?.refreshToken) return false;

        try {
          const response = await fetch('/api/auth/refresh', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: tokens.refreshToken,
            }),
          });

          if (!response.ok) return false;

          const data = await response.json();
          set({ tokens: data.tokens });
          return true;

        } catch (error) {
          console.error('Token refresh error:', error);
          return false;
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        console.log('Auth store rehydrated:', state);
      },
    }
  )
);

// Helper hooks for common use cases
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useAuthError = () => useAuthStore((state) => state.error);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
