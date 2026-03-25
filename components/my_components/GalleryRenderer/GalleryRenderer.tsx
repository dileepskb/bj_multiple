"use client"

import { useEffect, useState } from "react"

export const GalleryRenderer = ({ comp }: any) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    if (!comp?.props?.category) return
    console.log(comp.props.category)
    fetch(`/api/products/${comp.props.category}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.products || [])
      })
  }, [comp?.props?.category])



  return (
    <div className="flex gap-3">
      {data.slice(0, 3).map((item: any) => (
        <div key={item.id} className="border">
        <img
          src={item.imgs?.previews[0]}
          className="rounded"
        />
        </div>
      ))}
    </div>
  )
}