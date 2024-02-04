import { layananTable } from "../config";
import Papa from "papaparse";

export type AllLayananItem = Omit<DLayanan, "content" | "folder">
export type AllLayananResponse = AllLayananItem[]
export type LayananResponse = Layanan & { others: AllLayananItem[] } | null;

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

const fetchLayananStream = async (stepCallbackFn: Function) => {
  return fetch(layananTable)
    .then(async (response) => {
      const readableStreamBody = response.body;
      const papaWriteStream = new WritableStream<Uint8Array>({
        write(chunk) {
          var row = new TextDecoder().decode(chunk);
          Papa.parse(row, {
            header: true,
            encoding: "utf-8",
            step: (result: Papa.ParseStepResult<DLayanan>) => {
              stepCallbackFn(result)
              this.close
            }
          })
        },
        close() { console.log("Stream closed...") },
        abort(err) {
          console.error("Sink error:", err);
          throw new Error(err);
        }
      })
      readableStreamBody?.pipeTo(papaWriteStream);
    })
}

function transformLayananData(raw: DLayanan[]): DLayanan[] {
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

function transformSingleLayananData(raw: DLayanan): DLayanan | null {
  let transformedData = {
    id: raw.id,
    title: raw.title,
    category: raw.category,
    content: raw.content,
    folder: raw.folder,
    thumbnail: raw.thumbnail,
  } satisfies DLayanan;

  let values = Object.values(transformedData);
  if (values.some((val) => val != ""))
    return transformedData;
  else
    return null;
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

  const getLayananById = async (targetId: string, takeOthersCount: number = 3): Promise<LayananResponse | null> => {

    if (takeOthersCount < 0) throw new Error("Other layanan count must be 0 or more");

    let layananData: DLayanan[] = []
    await fetchLayananStream((result: Papa.ParseStepResult<DLayanan>) => {
      let data = transformSingleLayananData(result.data);
      if (data != null)
        layananData.push(data);
    })
    const layananDataCount = layananData.length
    if (layananDataCount == 0) return null;

    // > Get Layanan by Id
    const result = layananData.find((data) => data.id == targetId);
    if (result == null) return null;
    const resultIdx = layananData.findIndex((data) => data.id == targetId);

    // > Get Layanan lainnya as suggestion
    let others: AllLayananItem[] = []
    const count = Math.min(takeOthersCount, layananDataCount)
    for (let i = 1; i <= count; i++) {
      let suggestedData = layananData[(resultIdx + i) % layananDataCount];
      if (suggestedData.id != targetId)
        others.push(suggestedData)
    }

    const { id, title, category, content, thumbnail } = result;
    return {
      id, title, category, content, thumbnail, others,
      images: []
    } as LayananResponse;
  }  

  return {
    getAllLayanan,
    getLayananById
  }
}