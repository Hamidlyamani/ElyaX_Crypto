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


  return (
    <SidebarProvider>
      <AppSidebar selectedMenuItem={selectedMenuItem} onMenuItemClick={setSelectedMenuItem} />
      <SidebarInset>
        {renderComponent()}
      </SidebarInset>
    </SidebarProvider>
  )
}
export default Page;