
import notif from "@/assets/imgs/icons/noti.png";
import user from "@/assets/imgs/icons/user.png";
import { Search } from "./ui/search";


const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between  mb-6">
                <div className="title">
                    <h2 className=' font-L_medium text-h1'>Dashboard</h2>
                    <span className='italic text-gray-800 font-L_light text-tag'>Updated on 23 may 2023</span>
                </div>
                <div className="flex items-start gap-5 header_left">
                    <div className="search">
                        <Search />
                    </div>
                    <div className="flex items-start gap-3 user_netf">
                        <div className="flex items-center w-[50px] h-[50px] justify-center rounded-full notif bg-gray-50 dark:bg-sidebar">
                            <img src={notif} alt="" className='filter_black dark:filter_white' />
                        </div>
                        <div className="netf_list">
                            <div className="flex items-center gap-2 user_item">
                                <img src={user} alt="" />
                                <div>
                                    <select id="countries" className="block text-black bg-transparent dark:text-white outline-0 dark:placeholder-gray ">
                                        <option selected className='p-4 m-4 border-0 dark:bg-sidebar outline-0 focus:bg-gray'>Alexim</option>
                                        <option value="US" className='p-4 m-4 border-0 dark:bg-sidebar outline-0'>My profile</option>
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