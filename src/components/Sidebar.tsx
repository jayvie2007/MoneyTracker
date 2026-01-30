'use client';

import { BanknoteArrowDown, BanknoteArrowUp, ChartPie, FileText, Info, LayoutDashboard, LogOut, PiggyBank, ScrollText, Settings, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
// import { useAuthStore } from '@/stores/authStore';
// import { useLanguage } from '@/contexts/LanguageContext';
// import LanguageSwitcher from './LanguageSwitcher';

interface SidebarProps {
    children?: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    //   const { user, logout } = useAuthStore();
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mainMenu = [
        { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard /> },
        { name: 'Transactions', href: '/transactions', icon: <ScrollText /> },
        { name: 'Income', href: '/income', icon: <BanknoteArrowUp /> },
        { name: 'Expenses', href: '/expenses', icon: <BanknoteArrowDown /> },
        { name: 'Accounts', href: '/accounts', icon: <Wallet /> },
        { name: 'Savings', href: '/savings', icon: <PiggyBank /> },
        { name: 'Reports', href: '/reports', icon: <ChartPie /> },
    ];

    const helpAndSettings = [
        { name: "Help & Center", href: "/help", icon: <Info /> },
        { name: "Settings", href: "/settings", icon: <Settings /> },
    ];

    const isCurrentPath = (href: string) => {
        if (href === '/admin') {
            return pathname === '/admin';
        }
        return pathname.includes(href);
    };

    //   const handleLogout = () => {
    //     logout();
    //     router.push('/auth/signin');
    //   };

    return (
        <div className="min-h-screen ">
            {/* Background decorative elements */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            </div> */}


            {/* Mobile menu button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-white p-2 rounded-lg shadow-lg"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="flex h-screen relative">
                {/* Sidebar */}
                <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col h-full bg-white shadow-md">
                        {/* Logo */}
                        <div className="flex items-center justify-center h-10 mt-5">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <h1 className="text-xl font-bold text-[#393F9D]">
                                        Money Tracker
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex items-center space-x-3 border border-[#393F9D] rounded-sm p-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-[#393F9D] truncate">
                                        {'TEST'}
                                    </p>
                                    <p className="text-xs text-gray-400 truncate">
                                        {'test@example.com'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 px-4 space-y-4">
                            <div className="space-y-1">
                                <h4 className="text-[#9ea09f] text-sm">Main Menu</h4>
                                {mainMenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`${isCurrentPath(item.href)
                                            ? "bg-[#393F9D]/50 text-[#393F9D]"
                                            : "text-[#393F9D] hover:bg-[#393F9D]/50 hover:text-[#393F9D] border-transparent"
                                            } flex items-center px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 group`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg mr-3">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="space-y-1">
                                <h4 className="text-[#9ea09f] text-sm">Help & Settings</h4>
                                {helpAndSettings.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`${isCurrentPath(item.href)
                                            ? "bg-[#393F9D]/50 text-[#393F9D]"
                                            : "text-[#393F9D] hover:bg-[#393F9D]/50 hover:text-[#393F9D] border-transparent"
                                            } flex items-center px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 group`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg mr-3">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* User Profile */}
                        <div className="p-4">
                            <div className="space-y-2">
                                <button
                                    //   onClick={handleLogout}
                                    className="w-full flex items-center px-3 py-2 gap-4 text-sm text-red-500 hover:text-red-800 cursor-pointer"
                                >
                                    <LogOut />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
