"use client";

import OverviewIconCard from "@/components/reusable/OverviewIconCard";
import TimeToday from "@/components/reusable/TimeToday";
import { faker } from "@faker-js/faker";
import { BanknoteArrowDown, Boxes } from "lucide-react";

export default function ExpensesPage() {
    return (
        <div className="flex flex-col h-screen p-12">
            {/* Header */}
            <div className="flex w-full justify-between mb-5">
                <div className="flex items-center gap-2 text-[#393F9D]">
                    <BanknoteArrowDown className="w-8 h-8 text-[#393F9D]" />
                    <h5 className="font-extrabold text-4xl">EXPENSES</h5>
                </div>
                <TimeToday />
            </div>

            {/* Body */}
            <div className="flex justify-between w-full gap-4">
                <OverviewIconCard
                    title="Monthly Bills"
                    amount={faker.number.int({ min: 5, max: 20 })}
                    bgColor="bg-[#393F9D]/20"
                    textColor="text-[#393F9D]"
                    IconLucide={Boxes}
                />
                <OverviewIconCard
                    title="Remaining Loan"
                    amount={faker.number.int({ min: 5, max: 20 })}
                    bgColor="bg-[#393F9D]/20"
                    textColor="text-[#393F9D]"
                    IconLucide={Boxes}
                />
                <OverviewIconCard
                    title="Expenses"
                    amount={faker.number.int({ min: 5, max: 20 })}
                    bgColor="bg-[#393F9D]/20"
                    textColor="text-[#393F9D]"
                    IconLucide={Boxes}
                />
            </div>
        </div>
    );
}
