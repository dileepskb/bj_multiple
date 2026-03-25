import { useBuilderStore } from "@/store/builderStore"
import { apiRegistry } from "@/config/apiRegistry"
import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function GallerySettings({ comp }: any) {
 const [categories, setCategories] = useState([])
 const update = useBuilderStore((s) => s.updateComponent)
 useEffect(() => {
  fetch("/api/protected/categories")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data.categories)
    })
}, [])


  return (
    <Select 
     value={comp?.props?.category || ""}
  onValueChange={(value) => {
    if (!comp) return   // 🔥 only guard here
 update(comp.id, { category: value })
  }}
    >
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select Product Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories?.map((item,i) => { 
            return(
            <SelectItem key={i} value={item?.slug}>{item?.name}</SelectItem>
          )
          })}
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}