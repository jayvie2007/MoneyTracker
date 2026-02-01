"use client";

import OverviewIconCard from "@/components/reusable/OverviewIconCard";
import Pagination from "@/components/reusable/Pagination";
import TimeToday from "@/components/reusable/TimeToday";
import { AddTransactionDialog } from "@/components/transactions/AddTransactionDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { faker } from "@faker-js/faker";
import { Boxes, Download, Eye, PackageSearch, ScrollText } from "lucide-react";
import { useState } from "react";

const transactions = [
    {
        id: 1,
        name: "Laptop Installment",
        type: "Expenses",
        category: "Installment",
        amount: 15000,
        createdAt: "2024-01-10",
    },
    {
        id: 2,
        name: "Electricity Bill",
        type: "Expenses",
        category: "Monthly Bills",
        amount: 3200,
        createdAt: "2024-01-11",
    },
    {
        id: 3,
        name: "Office Supplies",
        type: "Expenses",
        category: "Expenses",
        amount: 4800,
        createdAt: "2024-01-12",
    },
    {
        id: 4,
        name: "Water Bill",
        type: "Expenses",
        category: "Utilities",
        amount: 2100,
        createdAt: "2024-01-13",
    },
    {
        id: 5,
        name: "Team Lunch",
        type: "Expenses",
        category: "Expenses",
        amount: 6700,
        createdAt: "2024-01-14",
    },
    {
        id: 6,
        name: "Motorcycle Installment",
        type: "Expenses",
        category: "Installment",
        amount: 25000,
        createdAt: "2024-01-15",
    },
    {
        id: 7,
        name: "Internet Subscription",
        type: "Expenses",
        category: "Monthly Bills",
        amount: 3900,
        createdAt: "2024-01-16",
    },
    {
        id: 7,
        name: "Salary Income",
        type: "Income",
        category: "Salary",
        amount: 3900,
        createdAt: "2024-01-16",
    },
];



export default function TransactionsPage() {
    const PAGE_SIZE = 5;
    const [page, setPage] = useState(1);
    const paginatedTransactions = transactions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const totalPages = Math.ceil(transactions.length / PAGE_SIZE);

    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col h-screen p-12">
            {/* Header */}
            <div className="flex w-full justify-between items-center mb-5">
                <div>
                    <div className="flex items-center gap-2 text-[#393F9D]">
                        <ScrollText className="w-8 h-8 text-[#393F9D]" />
                        <h5 className="font-extrabold text-4xl">TRANSACTIONS</h5>
                    </div>
                    {/* <div>Users</div> */}
                </div>

                <div className="flex space-x-5">
                    <Button
                        variant="outline"
                        className="border-indigo-500 text-indigo-500 bg-transparent hover:bg-indigo-600 hover:text-white cursor-pointer"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>

                    {/* Add Item Modal */}
                    <Button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        Add Transaction
                    </Button>
                    <AddTransactionDialog open={open} onOpenChange={setOpen} />
                </div>
            </div>

            {/* Body */}
            <div className="flex justify-between w-full gap-4 mb-5">
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

            <div className="bg-white shadow-xl p-10 rounded-lg flex flex-col space-y-2 border">
                {/* Filters */}
                <div className="w-full flex justify-between">
                    <div className="w-1/2 flex items-center space-x-2">
                        <Input className="w-1/2" type="text" placeholder="Search Name" />
                        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
                            Search
                        </Button>
                    </div>
                    <NativeSelect>
                        <NativeSelectOption value="">Filter Status</NativeSelectOption>
                        <NativeSelectOption value="active">Active</NativeSelectOption>
                        <NativeSelectOption value="inactive">Inactive</NativeSelectOption>
                    </NativeSelect>
                </div>

                {/* Tables */}
                <div className="">
                    <Table>
                        <TableHeader className="bg-[#393f9d] rounded-t-xl">
                            <TableRow>
                                <TableHead className="text-white">NAME</TableHead>
                                <TableHead className="text-white">TYPE</TableHead>
                                <TableHead className="text-white">CATEGORY</TableHead>
                                <TableHead className="text-white">AMOUNT</TableHead>
                                <TableHead className="text-white">CREATED AT</TableHead>
                                <TableHead className="text-white">ACTION</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedTransactions.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-12 text-center">
                                        <div className="flex flex-col items-center gap-2 text-gray-500">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                                                <PackageSearch className="h-10 w-10 text-gray-400" />
                                            </div>
                                            <div className="text-lg font-semibold">
                                                No transaction found
                                            </div>
                                            <div className="text-sm">
                                                Try adjusting your search or filters
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                paginatedTransactions.map((user, index) => (
                                    <TableRow
                                        key={user.id}
                                        className={`border-b-0 ${index % 2 === 0 ? "bg-gray-200" : "bg-white"
                                            }`}
                                    >
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.type}</TableCell>
                                        <TableCell>{user.category}</TableCell>
                                        <TableCell>{user.amount}</TableCell>
                                        <TableCell>{user.createdAt}</TableCell>
                                        <TableCell>
                                            <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
                                                <Eye />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}> Total Transaction: {transactions.length} </TableCell>
                                {/* <TableCell className="text-right">$2,500.00</TableCell> */}
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>

                {/* Pagination */}
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}
