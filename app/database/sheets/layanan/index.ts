import { layananTable } from "../config"
import Papa from "papaparse"

export type AllLayananItem = Omit<DLayanan, "content" | "folder">
export type AllLayananResponse = AllLayananItem[]
export type LayananResponse = Layanan | null;

const parseLayananTable = (callbackFn: Function) => {
  Papa.parse(layananTable, {
    download: true,
    header: true,
    complete: (results: Papa.ParseResult<DLayanan>) => {
      var data = transformLayananData(results.data);
      callbackFn(data);
    }
  })
}

const transformLayananData = (raw: DLayanan[]): DLayanan[] => {
  var processedData: DLayanan[] = [];
  raw.forEach((data: DLayanan) => {
    let transformedData = {
      id: data.id,
      title: data.title,
      category: data.category,
      content: data.content,
      folder: data.folder,
      thumbnail: data.thumbnail,
    } satisfies DLayanan;
    let values = Object.values(transformedData);
    if (values.some((val) => val != "")) {
      processedData.push(transformedData);
    }
  });
  return processedData;
}

export const layananApi = () => {
  const getAllLayanan = (): Promise<AllLayananResponse> => {
    return new Promise((resolve, reject) => {
      parseLayananTable((data: DLayanan[]) => {
        var allLayananResponse: AllLayananResponse = data.map((data: DLayanan) => {
          const { id, title, category, thumbnail } = data;
          return { id, title, category, thumbnail } as AllLayananItem;
        })
        resolve(allLayananResponse);
      })
    })
  }

  const getLayananById = (targetId: string): Promise<LayananResponse> => {
    return new Promise<LayananResponse>((resolve, reject) => {
      parseLayananTable((data: DLayanan[]) => {
        const targetData: DLayanan | undefined = data.find((value): boolean => value.id == targetId);
        if (targetData == undefined) {
          reject(null);
          return;
        }

        const { id, title, category, content, thumbnail } = targetData;
        var layananData = {
          id, title, category, content, thumbnail,
          images: []
        } as LayananResponse;

        resolve(layananData);
      })
    })
  }  

  return {
    getAllLayanan,
    getLayananById
  }
}