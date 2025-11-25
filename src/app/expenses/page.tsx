"use client";

import TimeToday from "@/components/reusable/TimeToday";

export default function ExpensesPage() {
    return (
        <div className="flex flex-col h-screen p-12">
            {/* Header */}
            <div className="flex w-full justify-between mb-10">
                <h5 className="font-bold text-[#393F9D] text-4xl">Expenses</h5>
                <h5 className="font-bold text-[#393F9D] text-4xl">
                    <TimeToday />
                </h5>
            </div>

            {/* Body */}
            <div className="flex justify-between w-full gap-4">

            </div>
        </div>
    );
}
