import { AppSidebar } from "@/Components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,

} from "@/Components/ui/sidebar"
import Home from "./Home/Home"
import Watchlist from "./Watchlist/Watchlist"
import { useState } from "react"
import Profile from "./Profile/Profile"
import Header from "@/Components/Header"
const Page = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');
  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'Dashboard':
        return <Home />;
      case 'Watchlist':
        return <Watchlist />;
      case 'Profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };
  const containerClass = "mx-4 md:mx-8 my-4";

  return (
    <div >
      <SidebarProvider>
        <AppSidebar selectedMenuItem={selectedMenuItem} onMenuItemClick={setSelectedMenuItem} />
        <SidebarInset>
          <div className={containerClass}>
            <Header namePage={selectedMenuItem} />
            {renderComponent()}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
export default Page;