import { Dispatch, SetStateAction } from "react"
import { layananTable } from "../config"
import Papa from "papaparse"

export type AllLayananItem = Omit<DLayanan, "content" | "folder">
export type AllLayananResponse = AllLayananItem[]

export const layananApi = () => {
  const getAllLayanan = (setLayananData: Dispatch<SetStateAction<AllLayananResponse>>) => {
    Papa.parse(layananTable, {
      download: true,
      header: true,
      complete: (results: Papa.ParseResult<DLayanan>) => {
        var parsedData: AllLayananResponse = [];

        var rawData = results.data;
        rawData.forEach((data) => {
          let transformedData = {
            id: data.id,
            title: data.title,
            category: data.category,
            thumbnail: data.thumbnail,
          } satisfies AllLayananItem;
          let values = Object.values(transformedData);
          if (values.some((val) => val != "")) {
            parsedData.push(transformedData);
          }
        });

        setLayananData(parsedData);
      },
    })

    let result: AllLayananResponse = [];
    return result;
  }


  return {
    getAllLayanan
  }
}