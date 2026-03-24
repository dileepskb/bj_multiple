import { useDroppable } from "@dnd-kit/core"

export const ContainerBox = ({ container }: any) => {
  const { setNodeRef, isOver } = useDroppable({
    id: container.id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`p-4 mb-2 border ${
        isOver ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50"
      }`}
    >
      Container: {container.id}

      {/* Components */}
      {/* {container.components?.map((comp: any) => (
        <div key={comp.id} className="p-2 border mt-2">
          {comp.type}
        </div>
      ))} */}
      {container.components?.map((comp: any) => (
  <div key={comp.id} className="p-2 border mt-2 bg-white">
    {comp.type === "gallery" && (
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src="https://dummyjson.com/image/150"
            className="w-full rounded"
          />
        ))}
      </div>
    )}

    {comp.type === "image" && (
      <img
        src="https://dummyjson.com/image/150"
        className="w-full"
      />
    )}

    {comp.type === "box" && (
      <div className="p-4 bg-gray-200">Box</div>
    )}

    {comp.type === "card" && (
      <div className="p-4 shadow rounded bg-white">
        Card
      </div>
    )}
  </div>
))}
    </div>
  )
}