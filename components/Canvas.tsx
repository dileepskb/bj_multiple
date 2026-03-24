"use client"

import { useDroppable } from "@dnd-kit/core"
import { useBuilderStore } from "@/store/builderStore"
import { SectionBox } from "./SectionBox"

export const Canvas = () => {
  const sections = useBuilderStore((s) => s.sections)

  const { setNodeRef, isOver } = useDroppable({
    id: "canvas",
  })

  return (
    <div
      ref={setNodeRef}
      className={`min-h-screen p-6 ${
        isOver ? "bg-blue-50" : "bg-gray-100"
      }`}
    >
      {sections.length === 0 && (
        <div className="text-center text-gray-400">
          Drag Section Here
        </div>
      )}

      {sections.map((section) => (
        <SectionBox key={section.id} section={section} />
      ))}
    </div>
  )
}