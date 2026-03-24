import { ReactNode } from "react"
import { useDraggable } from "@dnd-kit/core"

type Props = {
  id: string
  children: ReactNode
}

const DraggableItem = ({ id, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: id, // ✅ yahi important hai
    },
  })

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </div>
  )
}

export default DraggableItem