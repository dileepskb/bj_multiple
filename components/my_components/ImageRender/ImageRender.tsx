"use client"

import { useBuilderStore } from "@/store/builderStore"

export const ImageRenderer = ({ comp }: any) => {
  const update = useBuilderStore((s) => s.updateComponent)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      update(comp.id, {
        src: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-2">

      {/* ❌ No image → show input */}
      {!comp?.props?.src && (
        <input type="file" onChange={handleImageChange} />
      )}

      {/* ✅ Image uploaded → show preview */}
      {comp?.props?.src && (
        <img
          src={comp.props.src}
          className="w-full rounded border"
        />
      )}

    </div>
  )
}