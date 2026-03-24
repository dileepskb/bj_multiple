"use client"
import { IconContext } from "react-icons"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { TooltipProvider } from "@/components/ui/tooltip"

import { DndContext, DragEndEvent } from "@dnd-kit/core"
import React from "react"
import { useBuilderStore } from "@/store/builderStore"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const pathname = usePathname()

  // "/dashboard/certificate/add"
  const paths = pathname.split("/").filter(Boolean)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      router.push("/login")
    }
  }, [])

  const handleSave = () => {
  const data = useBuilderStore.getState().sections
  localStorage.setItem("builder-data", JSON.stringify(data))
  console.log("Saved:", data)
}

const handlePreview = () => {
  router.push("/preview")
}

  const addSection = useBuilderStore((s) => s.addSection)
  const addContainer = useBuilderStore((s) => s.addContainer)
  const addComponent = useBuilderStore((s) => s.addComponent)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const type = active.data.current?.type
    const overId = over.id

    // ✅ SECTION → canvas
    if (type === "section" && overId === "canvas") {
      addSection()
    }

    // ✅ CONTAINER → section
    if (type === "container") {
      addContainer(overId as string)
    }
    // COMPONENT (🔥 important)
    if (type?.startsWith("component:")) {
      const compType = type.split(":")[1]

      // overId = containerId
      const containerId = overId as string

      // section find karna padega
      const state = useBuilderStore.getState()

      const section = state.sections.find((sec) =>
        sec.containers.some((con) => con.id === containerId)
      )

      // ❗ IMPORTANT GUARD
      if (!section) {
        console.log("❌ Not dropped on container")
        return
      }

      addComponent(section.id, containerId, compType)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/* Header */}
          <header className="flex h-16 items-center justify-between gap-2 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-4" />

              <Breadcrumb>
                <BreadcrumbList>
                  {paths.map((segment, index) => {
                    const href = "/" + paths.slice(0, index + 1).join("/")

                    const isLast = index === paths.length - 1

                    return (
                      <span key={href} className="flex items-center gap-2">
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>
                              {formatLabel(segment)}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={href}>
                              {formatLabel(segment)}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>

                        {!isLast && <BreadcrumbSeparator />}
                      </span>
                    )
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePreview}
                className="rounded border px-4 py-2 text-gray-700 cursor-pointer"
              >
                Preview
              </button>

              <button
                onClick={handleSave}
                className="rounded bg-green-600 px-4 py-2 text-white cursor-pointer"
              >
                Save
              </button>
            </div>
          </header>

          {/* 🔥 Dynamic content */}
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <TooltipProvider>
              <IconContext.Provider value={{ size: "10" }}>
                {children}
              </IconContext.Provider>
            </TooltipProvider>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </DndContext>
  )
}

// 🔥 label format function
function formatLabel(text: string) {
  return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}
