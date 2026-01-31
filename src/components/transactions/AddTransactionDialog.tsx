import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "@radix-ui/react-label"

type AddTransactionDialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AddTransactionDialog({ open,
    onOpenChange, }: AddTransactionDialogProps) {
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
                    <DialogTitle>Add Supplier</DialogTitle>
                </DialogHeader>

                {/* Dialog body */}
                <div className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Due" />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="number">Position</Label>
                        <Input id="number" placeholder="Manager" />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="amount">Status</Label>
                        <Input id="amount" type="number" placeholder="active" />
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