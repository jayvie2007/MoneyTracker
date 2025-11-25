"use client";

import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6 text-center">Oops! The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-indigo-800 hover:bg-indigo-600 rounded-md text-white transition"
            >
                Go Back
            </Link>
        </div>
    );
}