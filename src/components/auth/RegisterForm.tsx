"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputValidation from "@/components/inputs/InputValidation";

type RegisterFormProps = {
    setCurrentTab: (tab: string) => void
}

type RegisterType = {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export default function RegisterForm({ setCurrentTab }: RegisterFormProps) {
    const router = useRouter();
    const [forms, setForms] = useState<RegisterType>({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="w-full lg:w-1/2 flex px-5 flex-col bg-[#F1F5FE] items-center justify-center">
            <div className="flex w-full max-w-xl flex-col gap-4 rounded-large px-10 pb-10 pt-6 shadow-small mt-auto">
                <div className="flex flex-col space-y-2 justify-center items-center ">

                    <p className="pb-2 text-5xl text-black">
                        Create an Account!
                    </p>
                    <p className="text-[#9E9E9E]">
                        Sign up to start your money movements.
                    </p>
                </div>
                <form
                    className="flex flex-col gap-3"
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <InputValidation
                        label="First Name"
                        name="first_name"
                        value={forms?.first_name}
                        placeholder="Enter your first name"
                        error={error}
                        onChange={(e) => setForms((prev) => ({ ...prev, first_name: e.target.value, }))}
                        required
                    />
                    <InputValidation
                        label="Last Name"
                        name="last_name"
                        value={forms?.last_name}
                        placeholder="Enter your last name"
                        error={error}
                        onChange={(e) => setForms((prev) => ({ ...prev, last_name: e.target.value, }))}
                        required
                    />
                    <InputValidation
                        label="Email"
                        name="email"
                        type="email"
                        value={forms?.email}
                        placeholder="Enter your email"
                        error={error}
                        onChange={(e) => setForms((prev) => ({ ...prev, email: e.target.value, }))}
                        required
                    />

                    <InputValidation
                        label="Password"
                        name="password"
                        type="password"
                        value={forms?.password}
                        placeholder="Enter your password"
                        error={error}
                        onChange={(e) => setForms((prev) => ({ ...prev, password: e.target.value, }))}
                        required
                    />

                    <InputValidation
                        label="Confirm Password"
                        name="password"
                        type="password"
                        value={confirmPassword}
                        placeholder="Enter your confirm password"
                        error={error}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button className="bg-indigo-800 hover:bg-indigo-600 py-2 mt-2 rounded-md text-white cursor-pointer" type="submit">
                        Register
                    </button>
                </form>

                <div className="flex justify-center space-x-2">
                    <p className="text-center text-small">
                        Already have an account?
                    </p>
                    <button
                        className="text-indigo-800 hover:text-indigo-600 font-semibold cursor-pointer"
                        onClick={() => setCurrentTab('login')}
                    >
                        Login Now.
                    </button>
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
