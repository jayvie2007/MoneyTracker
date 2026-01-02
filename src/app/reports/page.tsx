"use client";

import MoneyMovement from "@/components/reports/MoneyMovement";
import TimeToday from "@/components/reusable/TimeToday";
import { ChartPie } from "lucide-react";

export default function IncomePage() {
    return (
        <div className="flex flex-col p-12">
            {/* Header */}
            <div className="flex w-full justify-between mb-5">
                <div className="flex items-center gap-2 text-[#393F9D]">
                    <ChartPie className="w-8 h-8 text-[#393F9D]" />
                    <h5 className="font-extrabold text-4xl">REPORTS</h5>
                </div>
                <TimeToday />
            </div>

            {/* Body */}
            <div className="flex justify-between w-full">
                <MoneyMovement />
            </div>
        </div>
    );
}
