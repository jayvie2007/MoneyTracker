"use client";

import TimeToday from "@/components/reusable/TimeToday";
import { PiggyBank } from "lucide-react";

export default function IncomePage() {
    return (
        <div className="flex flex-col h-screen p-12">
            {/* Header */}
            <div className="flex w-full justify-between mb-5">
                <div className="flex items-center gap-2 text-[#393F9D]">
                    <PiggyBank className="w-8 h-8 text-[#393F9D]" />
                    <h5 className="font-extrabold text-4xl">SAVINGS</h5>
                </div>
                <TimeToday />
            </div>

            {/* Body */}
            <div className="flex justify-between w-full gap-4">

            </div>
        </div>
    );
}
