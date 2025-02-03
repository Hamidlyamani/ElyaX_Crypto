
import notif from "@/assets/imgs/icons/noti.png";
import user from "@/assets/imgs/icons/user.png";
import { Search } from "./ui/search";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};
type HeaderProps = {
    namePage: string;
};

const Header = ({ namePage }: HeaderProps) => {
    const today = new Date();

    return (
        <>
            <div className="flex items-center justify-between  mb-6">
              
                <div className="title flex items-center gap-3">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="h-12 bg-gray-700   w-[1px] dark:bg-gray-300" />
                    <div>
                        <h2 className=' font-L_medium text-h1'>{namePage}</h2>
                        <span className='italic text-gray-800 font-L_light text-tag'>Updated on {formatDate(today)}</span>
                    </div>
                </div>
                <div className="flex items-start gap-5 header_left">
                    <div className="search hidden">
                        <Search />
                    </div>
                    <div className="flex items-start gap-3 user_netf">
                        <div className="hidden md:flex items-center w-[50px] h-[50px] justify-center rounded-full notif bg-gray-50 dark:bg-sidebar">
                            <img src={notif} alt="" className='filter_black dark:filter_white' />
                        </div>
                        <div className="netf_list">
                            <div className="flex items-center gap-2 user_item">
                                <img src={user} alt="" />
                                <div>
                                    <select id="setting" className="hidden md:block text-black bg-transparent dark:text-white outline-0 dark:placeholder-gray " defaultValue="user" >
                                        
                                        <option value="US" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>My profile</option>
                                        <option value="user" className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>Alexim</option>
                                        <option value="CA" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>Logout</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header