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
import up from "@/assets/imgs/icons/up_green.png"
import down from "@/assets/imgs/icons/down_red.png"


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
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium">Price</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="">
                $ {row.original.current_price}
            </div>
        ),
    },
    {
        accessorKey: "price_change_percentage_24h",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium ">24H</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 items-center ">
                {row.original.price_change_percentage_24h > 0 ? <img src={up} alt={row.original.name} className=" w-4 inline" /> : <img src={down} alt={row.original.name} className="w-4 inline" />}
                <div className={row.original.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-700"}>
                    {row.original.price_change_percentage_24h.toFixed(2)}%
                </div>
            </div>
        ),
    },
    {
        accessorKey: "circulating_supply",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium  ">Circulating supply</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 items-center ">
                ${row.original.circulating_supply.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
        ),
    },
    {
        accessorKey: "market_cap",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium ">Market cap</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 items-center ">
                ${row.original.market_cap.toLocaleString("en-US")}
            </div>
        ),
    },
    {
        accessorKey: "market_cap_change_percentage_24h",
        header: () => <div className="text-left text-black dark:text-white text-tag font-L_medium ">Market cap in 24H</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 items-center ">
                {row.original.market_cap_change_percentage_24h > 0 ? <img src={up} alt={row.original.name} className=" w-4 inline" /> : <img src={down} alt={row.original.name} className="w-4 inline" />}
                <div className={row.original.market_cap_change_percentage_24h > 0 ? "text-green-500" : "text-red-700"}>
                    {row.original.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
            </div>
        ),
    },
    {
        accessorKey: "total_volume",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium px-4 ">Volume</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 items-center ">
                ${row.original.total_volume.toLocaleString("en-US")}
            </div>
        ),
    },
    {
        accessorKey: "charts",
        header: () => <div className=" text-black dark:text-white text-tag font-L_medium">Details</div>,
        cell: ({ row }) => (  // Added cell to display row data
            <div className="flex gap-2 cursor-pointer items-center bg-green-500 p-2 rounded text-black_coin ">
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667" />
                </svg>
                View  Chart
            </div>
        ),
    },


    {
        id: "actions",
        header: () => <div className="">Actions</div>,
        cell: ({ row }) => {
            const payment = row.original

            return (<div>


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
                            Copy Coin ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Coin details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            )
        },
    },
]
