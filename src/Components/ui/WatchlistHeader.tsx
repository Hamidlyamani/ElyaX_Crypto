import { Input } from "./input"
interface WatchlistHeaderProps {
    table: any; // Replace 'any' with the actual type if known
}

export const WatchlistHeader: React.FC<WatchlistHeaderProps> = ({ table }) => {
    if (table) {
        return (
            <div>
                <div className="flex justify-between items-center my-6">
                    <div>
                        <div className=" rounded-full text-tag font-L_regular text-black_100 bg-green_light_1 px-2 py-1 w-fit">Primary</div>
                        <h4 className="text-h2-m font-L_regular text-black_100 dark:text-white">My coins list</h4>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center relative">
                            <Input
                                placeholder="Filter coins..."
                                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn("name")?.setFilterValue(event.target.value)
                                }
                                className="max-w-sm"
                            />
                            <div className="text-gray-800 absolute right-2 w-4 "><svg clipRule="evenodd" fill="currentColor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007zm-.744 6.26h-2.5c-.414 0-.75.336-.75.75s.336.75.75.75h2.5v2.5c0 .414.336.75.75.75s.75-.336.75-.75v-2.5h2.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.5v-2.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg></div>
                        </div>
                        <div className="rounded-full p-2 px-4 flex items-center gap-1 bg-gray-50 dark:dark:bg-gray-900 text-black cursor-pointer dark:text-white">
                            <div className="max-w-16">
                                <svg clipRule="evenodd" fill="currentColor" fillRule="evenodd" strokeLinejoin="round"
                                    style={{ width: "28px" }}
                                    strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z" fillRule="nonzero" />
                                </svg>
                            </div>
                            <span>Edit</span>
                        </div>
                        <div className="rounded-full p-2 px-4 flex items-center gap-1 cursor-pointer text-black_100  bg-green_light_1"><div className="max-w-6"><svg xmlns="http://www.w3.org/2000/svg" style={{ width: "18px" }} fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg></div> <span>New watchlist</span></div>
                    </div>
                </div>
            </div>
        )
    }

}
