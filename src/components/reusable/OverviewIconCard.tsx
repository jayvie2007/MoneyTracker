import { LucideIcon } from "lucide-react";
import React from "react";

type OverviewIconCardProps = {
    title: string;
    amount: number | string;
    bgColor: string;             // e.g. "bg-[#393F9D]"
    textColor: string;           // e.g. "text-[#393F9D]"
    IconLucide: LucideIcon;
};

const OverviewIconCard: React.FC<OverviewIconCardProps> = ({
    title,
    amount,
    bgColor,
    textColor,
    IconLucide,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full">
            <div className="flex space-x-2 items-center">
                {/* Icon */}
                <div className={`p-2 rounded-sm ${bgColor} ${textColor}`}>
                    <IconLucide size={40} />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">
                        {amount.toLocaleString?.() ?? amount}
                    </p>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewIconCard;
