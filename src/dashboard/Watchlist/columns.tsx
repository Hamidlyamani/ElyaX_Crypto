"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { coinType } from "@/Api/types"



export const columns: ColumnDef<coinType>[] = [

    {
        accessorKey: "name",
        header: () => <div className="flex gap-12 text-black dark:text-white text-tag font-L_medium px-2 "><span>#</span>Name</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-6">
                <span>{row.index + 1} </span>  {/* Display index */}
                <img src={row.original.image} alt={row.original.name} className="h-6 w-6" /> {/* Display image */}
                <div>
                    {row.original.name}
                    <span className="p-2 text-tag text-gray-800 uppercase">{row.original.symbol} </span>
                </div>
            </div>
        ),
    },
    {
        accessorKey: "current_price",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">Price</div>,

    },
    {
        accessorKey: "price_change_24h",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">24H</div>,

    },
    {
        accessorKey: "ath_change_percentage",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">7D</div>,

    },
    {
        accessorKey: "market_cap",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">Market cap</div>,

    },
    {
        accessorKey: "total_volume",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">Volume</div>,

    },

    {
        accessorKey: "last_updated",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">Last 7 days</div>,

    },
    {
        id: "actions",
        header: () => <div className="">Actions</div>,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
