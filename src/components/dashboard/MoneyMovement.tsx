import React from "react";

type OverviewCardProps = {
    title: string;
    currency?: string;
    amount: number | string;
    percentage: string;          // e.g. "+10%"
    differenceLabel: string;     // e.g. "+0 than last month"
    bgColor: string;             // e.g. "bg-[#393F9D]"
    bgColorOpacity: string;      // e.g. "bg-[#393F9D]/50"
    textColor: string;           // e.g. "text-[#393F9D]"
};

const OverviewCard: React.FC<OverviewCardProps> = ({
    title,
    currency = "PHP",
    amount,
    percentage,
    differenceLabel,
    bgColor,
    bgColorOpacity,
    textColor,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full">
            {/* Title */}
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${bgColor}`}></span>
                <p className="text-sm font-medium text-gray-600">{title}</p>
            </div>

            {/* Body  */}
            <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">
                    {currency} {amount.toLocaleString?.() ?? amount}
                </p>

                <span className={`${bgColorOpacity} ${textColor} text-xs px-2 rounded`}>
                    {percentage}
                </span>
            </div>

            {/* Difference */}
            <p className="text-xs text-gray-500">{differenceLabel}</p>
        </div>
    );
};

export default OverviewCard;
