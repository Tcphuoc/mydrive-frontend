"use client"

import * as React from "react"
import {
  House,
  Users,
  Clock,
  Star,
  Trash2,
} from "lucide-react"
import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "My Drive",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Folder A",
          url: "#",
        },
        {
          title: "Folder B",
          url: "#",
        },
        {
          title: "Folder C",
          url: "#",
        },
      ],
    },
    {
      title: "Shared with me",
      url: "#",
      icon: Users,
    },
    {
      title: "Recent",
      url: "#",
      icon: Clock,
    },
    {
      title: "Starred",
      url: "#",
      icon: Star,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center gap-4">
        <Image src="icon.svg" width="48" height="48" alt="logo" />
        <p className="text-2xl">My Drive</p>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
