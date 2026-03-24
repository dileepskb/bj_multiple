"use client"

import { useEffect, useState } from "react"

export default function PreviewPage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("builder-data")
    if (saved) {
      setData(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Preview Page</h1>

      {data.length === 0 && (
        <div className="text-gray-400">No data found</div>
      )}

      {data.map((section) => (
        <div key={section.id} className="p-6 border">
          {section.containers?.map((container: any) => (
            <div key={container.id} className="mb-4">
              {container.components?.map((comp: any) => (
                <RenderComponent key={comp.id} comp={comp} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// 🔥 Separate component
function RenderComponent({ comp }: any) {
  if (comp.type === "image") {
    return (
      <img
        src="https://dummyjson.com/image/150"
        className="w-full mb-2"
      />
    )
  }

  if (comp.type === "gallery") {
    return (
      <div className="grid grid-cols-3 gap-2 mb-2">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src="https://dummyjson.com/image/150"
            className="w-full"
          />
        ))}
      </div>
    )
  }

  if (comp.type === "box") {
    return <div className="p-4 bg-gray-200 mb-2">Box</div>
  }

  if (comp.type === "card") {
    return (
      <div className="p-4 shadow border rounded mb-2">
        Card
      </div>
    )
  }

  return null
}