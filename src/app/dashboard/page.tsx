"use client";

import OverviewCard from "@/components/dashboard/OverviewCard";
import TimeToday from "@/components/reusable/TimeToday";

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-screen p-12">
            {/* Header */}
            <div className="flex w-full justify-between mb-10">
                <h5 className="font-bold text-[#393F9D] text-4xl">Dashboard</h5>
                <h5 className="font-bold text-[#393F9D] text-4xl">
                    <TimeToday />
                </h5>
            </div>
            {/* Overview Cards */}
            <div className="flex justify-between w-full gap-4">
                <OverviewCard
                    title="Total Balance"
                    amount="11,000"
                    percentage="+10%"
                    differenceLabel="0+ than last month"
                    bgColor="bg-[#393F9D]"
                    bgColorOpacity="bg-[#393F9D]/50"
                    textColor="text-[#393F9D]"
                />
                <OverviewCard
                    title="Total Savings"
                    amount="11,000"
                    percentage="+10%"
                    differenceLabel="0+ than last month"
                    bgColor="bg-[#008031]"
                    bgColorOpacity="bg-[#008031]/50"
                    textColor="text-[#008031]"
                />
                <OverviewCard
                    title="Total Expenses"
                    amount="11,000"
                    percentage="+10%"
                    differenceLabel="0+ than last month"
                    bgColor="bg-[#FF0000]"
                    bgColorOpacity="bg-[#FF0000]/50"
                    textColor="text-black"
                />
            </div>
        </div>
    );
}
