import { DPortofolio, Portofolio } from "@/app/model/portofolio";
import { fetchDataStream, parseTable, portofolioTable } from "../config";
import Papa from "papaparse";

export type AllPortofolioItem = Omit<DPortofolio, "folder" | "description">
export type AllPortofolioResponse = AllPortofolioItem[]
export type PortofolioResponse = Portofolio & { others: AllPortofolioItem[] } | null;

function transformManyPortofolioData(raw: DPortofolio[]): DPortofolio[] {
  var processedData: DPortofolio[] = [];
  raw.forEach((data: DPortofolio) => {
    let transformedData = transformPortofolioData(data)
    if (transformedData != null) {
      processedData.push(transformedData);
    }
  });
  return processedData;
}

function transformPortofolioData(raw: DPortofolio): DPortofolio | null {
  let transformedData = {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    folder: raw.folder,
    thumbnail: raw.thumbnail,
  } satisfies DPortofolio;

  let values = Object.values(transformedData);
  if (values.some((val) => val != ""))
    return transformedData;
  else
    return null;
}

const parsePortofolioTable = (callbackFn: Function) => {
  return parseTable(portofolioTable, transformManyPortofolioData, callbackFn);
}

const fetchPortofolioStream = async (stepCallbackFn: Function) => {
  return fetchDataStream(portofolioTable, stepCallbackFn);
}

const PortofolioApi = () => {

  const getAllPortofolio = async (): Promise<AllPortofolioResponse> => {

    let allPortofolios: DPortofolio[] = [];
    await fetchPortofolioStream((result: Papa.ParseStepResult<DPortofolio>) => {
      let data = transformPortofolioData(result.data);
      if (data != null)
        allPortofolios.push(data);
    })

    const result = allPortofolios.map((data: DPortofolio) => {
      const { id, title, thumbnail } = data
      return { id, title, thumbnail } as AllPortofolioItem
    })

    return result;
  }

  const getPortofolioById = async (targetId: string, takeOthersCount: number = 3): Promise<PortofolioResponse | null> => {

    if (takeOthersCount < 0) throw new Error("Other portofolio count must be 0 or more");

    let portofolioData: DPortofolio[] = []
    await fetchPortofolioStream((result: Papa.ParseStepResult<DPortofolio>) => {
      let data = transformPortofolioData(result.data);
      if (data != null)
        portofolioData.push(data);
    })
    const PortofolioDataCount = portofolioData.length
    if (PortofolioDataCount == 0) return null;

    // > Get Portofolio by Id
    const result = portofolioData.find((data) => data.id == targetId);
    if (result == null) return null;
    const resultIdx = portofolioData.findIndex((data) => data.id == targetId);

    // > Get Portofolio lainnya as suggestion
    let others: AllPortofolioItem[] = []
    const count = Math.min(takeOthersCount, PortofolioDataCount)
    for (let i = 1; i <= count; i++) {
      let suggestedData = portofolioData[(resultIdx + i) % PortofolioDataCount];
      if (suggestedData.id != targetId)
        others.push(suggestedData)
    }

    const { id, title, description, thumbnail } = result;
    return {
      id, title, description, thumbnail, others,
      images: []
    } as PortofolioResponse;
  }

  return {
    getAllPortofolio,
    getPortofolioById
  }
}

export default PortofolioApi;