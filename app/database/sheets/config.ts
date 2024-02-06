import Papa from "papaparse"

export const layananTable = `https://docs.google.com/spreadsheets/d/e/${process.env.NEXT_PUBLIC_GOOGLE_SHEETS_KEY}/pub?gid=${process.env.NEXT_PUBLIC_SHEETS_LAYANAN_TABLE}&single=true&output=csv`
export const portofolioTable = `https://docs.google.com/spreadsheets/d/e/${process.env.NEXT_PUBLIC_GOOGLE_SHEETS_KEY}/pub?gid=${process.env.NEXT_PUBLIC_SHEETS_PORTOFOLIO_TABLE}&single=true&output=csv`

export function parseTable(dataTable: string, mappingFunction: Function, callbackFn: Function) {
  Papa.parse(dataTable, {
    download: true,
    header: true,
    complete: (results) => {
      var data = mappingFunction(results.data);
      callbackFn(data);
    }
  })
}

export async function fetchDataStream(dataTable: string, stepCallbackFn: Function) {
  return fetch(dataTable)
    .then(async (response) => {
      const readableStreamBody = response.body;
      const papaWriteStream = new WritableStream<Uint8Array>({
        write(chunk) {
          var row = new TextDecoder().decode(chunk);
          Papa.parse(row, {
            header: true,
            encoding: "utf-8",
            step: (result) => {
              stepCallbackFn(result)
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