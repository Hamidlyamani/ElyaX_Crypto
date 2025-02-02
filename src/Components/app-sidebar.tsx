import * as React from "react"
import { useState, useEffect } from "react"
import logo from "@/assets/imgs/logo.png"
import m1 from "@/assets/imgs/icons/m1.png"
import m2 from "@/assets/imgs/icons/m2.png"
import m3 from "@/assets/imgs/icons/m3.png"
import m4 from "@/assets/imgs/icons/m4.png"
import m5 from "@/assets/imgs/icons/m5.png"
import m6 from "@/assets/imgs/icons/m6.png"
import m7 from "@/assets/imgs/icons/m7.png"
import Logout from "@/assets/imgs/icons/logout.png"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { IconMenu } from "./ui/IconMenu"
import { Switch } from "@/Components/ui/switch"
// Adjust the import based on your library

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  selectedMenuItem: string;
  onMenuItemClick: (itemTitle: string) => void;
}


const data = {
  navMain: [
    {
      items: [
        { title: "Dashboard", url: "dashboard", icon: m1, isActive: true },
        { title: "Watchlist", url: "watchlist", icon: m2, },
        { title: "Portfolio", url: "portfolio", icon: m3 },
        { title: "Trading", url: "trading", icon: m4 },
        { title: "Profile", url: "profile", icon: m6 },
      ],
    },
  ],
};



export function AppSidebar({ selectedMenuItem, onMenuItemClick, ...props }: AppSidebarProps) {

  const [dark, setDark] = useState(true);


  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark])


  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark); // Add or remove the "dark" class based on the new state
  };
  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        <img src={logo} alt="" className="p-2 my-4 mr-8 logo " />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item, index) => (
          <SidebarGroup key={index}>

            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={selectedMenuItem === item.title}>
                      <button onClick={() => onMenuItemClick(item.title)} ><IconMenu imge={item.icon} />  {item.title}</button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="my-4">
              <div className="peer/menu-button flex w-3/4 items-center gap-2 overflow-hidden rounded-2xl p-2 text-left outline-none data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent  hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-12 text-sm">
                <img src={Logout} alt="" className="p-2" />
                <span>Logout</span>
              </div>
              <Switch checked={dark}
                onCheckedChange={darkModeHandler} />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
