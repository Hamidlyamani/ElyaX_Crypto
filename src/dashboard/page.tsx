import { AppSidebar } from "@/Components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,

} from "@/Components/ui/sidebar"
import Home from "./Home/Home"
import Watchlist from "./Watchlist/Watchlist"
import Portfolio from "./Portfolio/Portfolio"
import Trading from "./Portfolio/Trading"
import Academy from "./Portfolio/Academy"
import { useState } from "react"
import Profile from "./Profile/Profile"
import Wallet from "./Portfolio/Wallet"
import Header from "@/Components/Header"
const Page = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');
  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'Dashboard':
        return <Home />;
      case 'Watchlist':
        return <Watchlist />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Trading':
        return <Trading />;
      case 'Academy':
        return <Academy />;
      case 'Profile':
        return <Profile />;
      case 'Wallet':
        return <Wallet />;
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
            <Header namePage="dachboard" />
            {renderComponent()}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
export default Page;