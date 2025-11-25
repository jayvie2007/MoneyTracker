"use client";

import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { color } from "chart.js/helpers";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Money Chart',
            color: 'text-black'
        },
    },
};

const weeklyLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthlyLabels = [
    "Jan", "Feb", "March", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MoneyMovement = ({ }) => {
    const [tab, setTab] = useState<"weekly" | "monthly">("weekly");
    const labels = tab === "weekly" ? weeklyLabels : monthlyLabels;
    const data = {
        labels,
        datasets: [
            {
                label: 'Balance',
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                backgroundColor: '#393F9D',
            },
            {
                label: 'Expense',
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                backgroundColor: '#FF5781',
            },
        ],
    };
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full min-h-[500px]">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">Money Movement</h1>
                <div className="flex gap-2 bg-gray-100 rounded-md p-1">
                    <button
                        onClick={() => setTab("weekly")}
                        className={`px-4 py-1 rounded-md font-medium transition ${tab === "weekly" ? "bg-[#393F9D] text-white" : "text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Weekly
                    </button>
                    <button
                        onClick={() => setTab("monthly")}
                        className={`px-4 py-1 rounded-md font-medium transition ${tab === "monthly" ? "bg-[#393F9D] text-white" : "text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default MoneyMovement;
