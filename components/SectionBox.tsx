import { useDroppable } from "@dnd-kit/core"
import { ContainerBox } from "./ContainerBox"

export const SectionBox = ({ section }: any) => {
  const { setNodeRef, isOver } = useDroppable({
    id: section.id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`p-6 mb-4 border-2 transition ${
        isOver ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
      }`}
    >
      <div className="font-semibold mb-2">
        Section: {section.id}
      </div>

      {/* Containers */}
      {section.containers?.map((container: any) => (
        <ContainerBox key={container.id} container={container} />
      ))}
    </div>
  )
}