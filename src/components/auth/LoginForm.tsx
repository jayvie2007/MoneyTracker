"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <InputValidation
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        error={error}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <InputValidation
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        error={error}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center justify-between px-1 py-2">
                        <button className="text-indigo-800 hover:text-indigo-600 font-semibold">
                            Forgot password?
                        </button>
                    </div>
                    <button className="bg-indigo-800 hover:bg-indigo-600 py-2 rounded-md text-white cursor-pointer" type="submit">
                        Log In
                    </button>
                </form>

                <div className="flex items-center gap-4 py-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <p className="shrink-0 text-tiny text-default-500">Or Login with</p>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button className="bg-white hover:bg-indigo-600 hover:text-white py-2 rounded-md cursor-pointer flex justify-center items-center space-x-2">
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
                        className="text-indigo-800 hover:text-indigo-600 font-semibold"
                        onClick={() => setCurrentTab('register')}
                    >
                        Register Now.
                    </button>
                </div>


            </div>
            <div className="mt-auto flex mb-10">
                <p className="text-default-500">
                    Copyright @ 2025 MoneyTracker, All Rights Reserved
                </p>
            </div>
        </div>
    );
}
