import * as React from "react"
import logo from "@/assets/imgs/logo.png"
import m1 from "@/assets/imgs/icons/m1.png"
import m2 from "@/assets/imgs/icons/m2.png"
import m3 from "@/assets/imgs/icons/m3.png"
import m4 from "@/assets/imgs/icons/m4.png"
import m5 from "@/assets/imgs/icons/m5.png"
import m6 from "@/assets/imgs/icons/m6.png"
import m7 from "@/assets/imgs/icons/m7.png"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { FaBeer } from 'react-icons/fa';
import { RxDashboard } from "react-icons/rx";
import { IconMenu } from "./ui/IconMenu"
// This is sample data.
const data = {
  navMain: [

    {
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: m1,
        },
        {
          title: "Watchlist",
          url: "#",
          icon: FaBeer,
          isActive: true,
        },
        {
          title: "Portfolio",
          url: "#",
          icon: FaBeer,
        },
        {
          title: "Trading",
          url: "#",
          icon: FaBeer,
        },
        {
          title: "Academy",
          url: "#",
          icon: FaBeer,
        },
        {
          title: "Profile",
          url: "#",
          icon: FaBeer,
        },
        {
          title: "Wallet",
          url: "#",
          icon: FaBeer,
        },

      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        <img src={logo} alt="" className="p-2 m-4 mr-8 logo " />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item, index) => (
          <SidebarGroup key={index}>

            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>

                      <a href={item.url}><IconMenu imge={item.icon} />  {item.title}</a>
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
            hgghghhg
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
