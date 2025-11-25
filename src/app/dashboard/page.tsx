"use client";

import MoneyMovement from "@/components/dashboard/MoneyMovement";
import MoneyTransaction from "@/components/dashboard/MoneyTransaction";
import OverviewCard from "@/components/dashboard/OverviewCard";
import TimeToday from "@/components/reusable/TimeToday";
import { faker } from '@faker-js/faker';

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-screen p-12 space-y-5">
            {/* Header */}
            <div className="flex w-full justify-between mb-10">
                <h5 className="font-bold text-[#393F9D] text-4xl">Dashboard</h5>
                <h5 className="font-bold text-[#393F9D] text-4xl">
                    <TimeToday />
                </h5>
            </div>
            {/* Overview Cards */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                <OverviewCard
                    title="Total Balance"
                    amount={faker.number.int({ min: 1000, max: 10000 })}
                    percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
                    differenceLabel={`+${faker.number.int({ min: 500, max: 3500 })} than last month`}
                    bgColor="bg-[#393F9D]"
                    bgColorOpacity="bg-[#393F9D]/50"
                    textColor="text-[#393F9D]"
                />
                <OverviewCard
                    title="Total Savings"
                    amount={faker.number.int({ min: 1000, max: 10000 })}
                    percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
                    differenceLabel={`+${faker.number.int({ min: 500, max: 3500 })} than last month`}
                    bgColor="bg-[#008031]"
                    bgColorOpacity="bg-[#008031]/50"
                    textColor="text-[#008031]"
                />
                <OverviewCard
                    title="Total Expenses"
                    amount={faker.number.int({ min: 1000, max: 10000 })}
                    percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
                    differenceLabel={`+${faker.number.int({ min: 500, max: 3500 })} than last month`}
                    bgColor="bg-[#FF0000]"
                    bgColorOpacity="bg-[#FF0000]/50"
                    textColor="text-black"
                />
            </div>

            {/* Money Movement */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                <MoneyMovement />
                <MoneyTransaction />
            </div>
        </div>
    );
}
