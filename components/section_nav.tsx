"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"
import { BsSignIntersection } from "react-icons/bs"
import { GoContainer } from "react-icons/go"
import { CiImageOn } from "react-icons/ci"
import { LuGalleryHorizontal } from "react-icons/lu"
import { FiBox } from "react-icons/fi"
import { FaRegAddressCard } from "react-icons/fa"
import { Button } from "./ui/button"
import DraggableItem from "./DraggableItem"

export function SectionsNav({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Page Builders</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon}
                  <span>{item.title}</span>
                  <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <div className="grid grid-cols-2 gap-1">
                    <DraggableItem id="section">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <BsSignIntersection className="text-lg" />
                        <span className="text-sm">Section</span>
                      </div>
                    </DraggableItem>
                    <DraggableItem id="container">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <GoContainer className="text-lg" />
                        <span className="text-sm">Container</span>
                      </div>
                    </DraggableItem>
                    <DraggableItem id="component:image">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <CiImageOn className="text-lg" />
                        <span className="text-sm">Image</span>
                      </div>
                    </DraggableItem>

                    <DraggableItem id="component:gallery">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <LuGalleryHorizontal className="text-lg" />
                        <span className="text-sm">Gallery</span>
                      </div>
                    </DraggableItem>
                    <DraggableItem id="component:box">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <FiBox className="text-lg" />
                        <span className="text-sm">Box</span>
                      </div>
                    </DraggableItem>
                    <DraggableItem id="component:card">
                      <div className="flex h-auto flex-col items-center justify-center gap-1 rounded-none border border-gray-300 bg-white py-2 text-gray-600">
                        <FaRegAddressCard className="text-lg" />
                        <span className="text-sm">Card</span>
                      </div>
                    </DraggableItem>
                  </div>
                  {/* {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))} */}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
