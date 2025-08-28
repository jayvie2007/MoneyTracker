import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // or any icon set you use

type InputValidationProps = {
    label?: string;
    name: string;
    type?: "text" | "password" | "email" | "number";
    value: string;
    placeholder?: string;
    required?: boolean;
    error?: string; // Error message to display above
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputValidation: React.FC<InputValidationProps> = ({
    label,
    name,
    type = "text",
    value,
    placeholder,
    error,
    required,
    onChange,
}) => {
    const isPassword = type === "password";
    const isEmail = type === "email";
    const [showPassword, setShowPassword] = useState(!isPassword);

    return (
        <div className="flex flex-col gap-1 relative">
            {/* Error message ABOVE the input */}
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            {/* Optional label */}
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={isPassword ?
                        (showPassword ? "text" : "password")
                        : isEmail ? "email" : "text"
                    }
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    className={`bg-white border rounded-md w-full px-3 py-2 pr-10 focus:outline-none focus:ring-2 ${error
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-300 focus:ring-blue-400"
                        }`}
                />
                {isPassword &&
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                }
            </div>
        </div>
    );
};

export default InputValidation;
