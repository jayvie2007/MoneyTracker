import React from "react";

const MoneyTransaction = ({ }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full min-h-[500px]">
            <h1 className="font-bold text-xl">Money Transaction</h1>

            <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">
                    {/* {currency} {amount.toLocaleString?.() ?? amount} */}
                </p>

            </div>

        </div>
    );
};

export default MoneyTransaction;
