import { useDroppable } from "@dnd-kit/core"
import Slider from "./my_components/slider/slider"
import { useEffect, useRef, useState } from "react"
import GallerySettings from "./my_components/slider/setting"
import { GalleryRenderer } from "./my_components/GalleryRenderer/GalleryRenderer"
import { Input } from "./ui/input"
import { useBuilderStore } from "@/store/builderStore"
import { ImageRenderer } from "./my_components/ImageRender/ImageRender"

export const ContainerBox = ({ container }: any) => {
  const { setNodeRef, isOver } = useDroppable({
    id: container.id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`mb-2 w-full border p-4 ${
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
        <div key={comp.id} className="mt-2 border bg-white p-2">
          {comp.type === "gallery" && (
            <div className="relative flex gap-3 pt-10">
              <div className="absolute top-0 right-0">
                <GallerySettings comp={comp} />
              </div>
              <GalleryRenderer comp={comp} />
              {/* <Slider /> */}
              {/* {[1,2,3].map((i) => (
<img
            key={i}
            src="https://dummyjson.com/image/150"
            className="w-full rounded"
          />
           ))} */}
            </div>
          )}

          {comp.type === "image" && <ImageRenderer comp={comp} />}

          {comp.type === "box" && <div className="bg-gray-200 p-4">Box</div>}

          {comp.type === "card" && (
            <div className="rounded bg-white p-4 shadow">Card</div>
          )}
        </div>
      ))}
    </div>
  )
}
