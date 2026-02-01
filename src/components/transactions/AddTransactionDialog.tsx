import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"

type AddTransactionDialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AddTransactionDialog({ open, onOpenChange, }: AddTransactionDialogProps) {
    const [type, setType] = useState<"income" | "expense" | "">("")
    const [category, setCategory] = useState("")

    const categoryOptions =
        type === "income"
            ? [
                { value: "salary", label: "Salary" },
                { value: "savings", label: "Savings" },
            ]
            : type === "expense"
                ? [
                    { value: "installment", label: "Installment" },
                    { value: "monthly_bills", label: "Monthly Bills" },
                    { value: "utilities", label: "Utilities" },
                    { value: "rent", label: "Rent" },
                    { value: "others", label: "Others" },
                ]
                : []

    const handleConfirm = () => {
        // TODO: submit form here
        console.log("Supplier submitted")

        // close dialog after submit
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>

                {/* Dialog body */}
                <div className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Motor Bills" />
                    </div>

                    {/* Type */}
                    <div className="space-y-1">
                        <Label htmlFor="type">Type</Label>

                        <Select
                            value={type}
                            onValueChange={(value) => {
                                setType(value as "income" | "expense")
                                setCategory("") // reset category on type change
                            }}
                        >
                            <SelectTrigger className="w-full" id="type">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="income">Income</SelectItem>
                                <SelectItem value="expense">Expense</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Category */}
                    <div className="space-y-1">
                        <Label htmlFor="category">Category</Label>

                        <Select
                            value={category}
                            onValueChange={setCategory}
                            disabled={!type}
                        >
                            <SelectTrigger className="w-full" id="category">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>

                            <SelectContent>
                                {categoryOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Amount */}
                    <div className="space-y-1">
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" type="number" placeholder="500" />
                    </div>
                </div>

                {/* Footer */}
                <DialogFooter className="pt-4">
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}