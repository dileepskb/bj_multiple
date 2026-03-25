import { useEffect, useState } from "react"
import axios from "axios"
import { apiRegistry } from "@/config/apiRegistry"

export const useGalleryData = (comp: any) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const apiKey = comp?.props?.api
    const api = apiRegistry[apiKey]

    if (!api) return

    axios.get(api.endpoint).then((res) => {
      setData(res.data)
    })
  }, [comp?.props?.api])

  return data
}