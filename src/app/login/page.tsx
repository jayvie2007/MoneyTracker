"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import { useAuthStore } from "../stores/authStore";
import RegisterForm from "@/components/auth/RegisterForm";

export default function LoginPage() {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState('login')

  useEffect(() => {
    if (isAuthenticated && user) {
      console.log('Authenticated user detected, redirecting to admin:', user);
      router.push('/');
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="flex h-screen p-12 bg-[#F1F5FE]">
      {/* Login Form */}
      {currentTab === "login" ? (
        <LoginForm setCurrentTab={setCurrentTab} />
      ) : (
        <RegisterForm setCurrentTab={setCurrentTab} />
      )}

      {/* Right Side */}
      <div className="hidden lg:flex flex-col w-1/2 bg-indigo-800 border-r-4 border-indigo-800 rounded-xl justify-center p-24">
        <h1 className="text-4xl font-bold text-white mb-4">
          Effortlessly manage and monitor your money movements.
        </h1>
        <p className="text-lg text-white mb-8">
          Log in to access your dashboard and start monitoring your money movements.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/images/samples/sample-dashboard.png"
            alt="Sample Dashboard"
            width={1000}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
