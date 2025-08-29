"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, getSession } from 'next-auth/react';

import Image from "next/image";
import InputValidation from "../inputs/InputValidation";

type LoginFormProps = {
    setCurrentTab: (tab: string) => void
}

export default function LoginForm({ setCurrentTab }: LoginFormProps) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push("/dashboard"); // Redirect after login
            } else {
                setError(data.message || "Login failed");
            }
        } catch (error) {
            setError("Something went wrong");
        }
    };

    return (
        <div className="w-full lg:w-1/2 flex px-5 flex-col bg-[#F1F5FE] items-center justify-center">
            <div className="flex w-full max-w-xl flex-col gap-4 rounded-large px-10 pb-10 pt-6 shadow-small mt-auto">
                <div className="flex flex-col space-y-2 justify-center items-center ">
                    <p className="pb-2 text-5xl text-black">
                        Welcome Back!
                    </p>
                    <p className="text-[#9E9E9E]">
                        Enter your email and password
                        to access your account.
                    </p>
                </div>
                <form
                    className="flex flex-col gap-3"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}
                    <InputValidation
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <InputValidation
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center justify-between px-1 py-2">
                        <button className="text-indigo-800 hover:text-indigo-600 font-semibold cursor-pointer">
                            Forgot password?
                        </button>
                    </div>
                    <button
                        className="bg-indigo-800 hover:bg-indigo-600 py-2 rounded-md text-white cursor-pointer"
                        type="submit"
                        disabled={loading}
                    >
                        Log In
                    </button>
                </form>

                <div className="flex items-center gap-4 py-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <p className="shrink-0 text-tiny text-default-500">Or Login with</p>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                    className="bg-white hover:bg-indigo-600 hover:text-white py-2 rounded-md cursor-pointer flex justify-center items-center space-x-2"
                    disabled={loading}
                >
                    <Image
                        src="/images/icons/google.png"
                        alt="googleicon"
                        width={120}
                        height={120}
                        className="w-6 h-6"
                    />
                    <p>
                        Continue with Google
                    </p>
                </button>

                <div className="flex justify-center space-x-2">
                    <p className="text-center text-small">
                        Don&rsquo;t have an account?&nbsp;
                    </p>
                    <button
                        className="text-indigo-800 hover:text-indigo-600 font-semibold cursor-pointer"
                        onClick={() => setCurrentTab('register')}
                    >
                        Register Now.
                    </button>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-indigo-400/10 to-indigo-500/10 border border-indigo-400/20 rounded-lg">
                    <p className="text-sm font-semibold text-indigo-400 mb-2">Demo Accounts:</p>
                    <div className="space-y-1 text-xs text-gray-300">
                        <p className="text-black"><span className="text-indigo-400 font-medium">User:</span> test@example.com / password123</p>
                    </div>
                </div>

            </div>
            <div className="mt-auto flex mb-10">
                <p className="text-default-500">
                    Copyright @ 2025 MoneyTracker. All Rights Reserved
                </p>
            </div>
        </div>
    );
}
