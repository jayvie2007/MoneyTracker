"use client";

import MoneyTransaction from "@/components/dashboard/MoneyTransaction";
import OverviewCard from "@/components/dashboard/OverviewCard";
import UpcomingPayment from "@/components/dashboard/UpcomingPayment";
import TimeToday from "@/components/reusable/TimeToday";
import { faker } from "@faker-js/faker";
import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-12 space-y-5">
      {/* Header */}
      <div className="flex w-full justify-between mb-5">
        <div className="flex items-center gap-2 text-[#393F9D]">
          <LayoutDashboard className="w-8 h-8 text-[#393F9D]" />
          <h5 className="font-extrabold text-4xl">DASHBOARD</h5>
        </div>
        <TimeToday />
      </div>

      {/* Overview Cards */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <OverviewCard
          title="Total Balance"
          amount={faker.number.int({ min: 1000, max: 10000 })}
          percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
          differenceLabel={`+${faker.number.int({
            min: 500,
            max: 3500,
          })} than last month`}
          bgColor="bg-[#393F9D]"
          bgColorOpacity="bg-[#393F9D]/50"
          textColor="text-[#393F9D]"
        />
        <OverviewCard
          title="Total Savings"
          amount={faker.number.int({ min: 1000, max: 10000 })}
          percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
          differenceLabel={`+${faker.number.int({
            min: 500,
            max: 3500,
          })} than last month`}
          bgColor="bg-[#008031]"
          bgColorOpacity="bg-[#008031]/50"
          textColor="text-[#008031]"
        />
        <OverviewCard
          title="Total Expenses"
          amount={faker.number.int({ min: 1000, max: 10000 })}
          percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
          differenceLabel={`+${faker.number.int({
            min: 500,
            max: 3500,
          })} than last month`}
          bgColor="bg-[#FF0000]"
          bgColorOpacity="bg-[#FF0000]/50"
          textColor="text-black"
        />
        <OverviewCard
          title="Loan Balance"
          amount={faker.number.int({ min: 1000, max: 10000 })}
          percentage={`+${faker.number.int({ min: 0, max: 15 })}%`}
          differenceLabel={`+${faker.number.int({
            min: 500,
            max: 3500,
          })} than last month`}
          bgColor="bg-[#C0C0C0]"
          bgColorOpacity="bg-[#C0C0C0]/50"
          textColor="text-black"
        />
      </div>

      {/* Money Movement */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <UpcomingPayment />
        <MoneyTransaction />
      </div>
    </div>
  );
}
