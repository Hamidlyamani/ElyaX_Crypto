

export const WatchlistHeader = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-6">
                <div>
                    <div className=" rounded-full text-tag font-L_regular text-black_100 bg-green_light_1 px-2 py-1 w-fit">Primary</div>
                    <h4 className="text-h2-m font-L_regular text-black_100 dark:text-white">My coins list</h4>
                </div>
                <div className="flex gap-4">
                    <div className="rounded-full bg-gray-800 p-2 flex gap-2 dark:text-white"><div><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z" fill-rule="nonzero" /></svg></div> <span>Edit</span></div>
                    <div className="rounded-full text-black_100 bg-green_light_1"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg></span> <span>New watchlist</span></div>
                </div>
            </div>
        </div>
    )
}
