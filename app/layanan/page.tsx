"use client";

import { StaticJumbotron } from "@/app/components/carousel";
import layananHighlight from "@/public/jumbotron/Jumbo-2.png";
import CardLayanan from "./CardLayanan";
import { useEffect } from "react";
import Papa from "papaparse";
import { layananTable } from "@/app/database/sheets/config";

// TODO DELETE WHEN BACKEND READY
const mockup = "/../public/mockup/mockup-layanan.png";
const listLayanan: LayananItem[] = [
  { id: "1", name: "Jasa 1", category: "Cat1", thumbnail: mockup },
  { id: "2", name: "Jasa 2", category: "Cat2", thumbnail: mockup },
  { id: "3", name: "Jasa 3", category: "Cat3", thumbnail: mockup },
  { id: "4", name: "Jasa 4", category: "Cat4", thumbnail: mockup },
  { id: "5", name: "Jasa 5", category: "Cat5", thumbnail: mockup },
];

export type LayananItem = Omit<Layanan, "content" | "images">;
type PropTypes = {
  services: LayananItem[];
};

// export const getStaticProps = (async () => {
// TODO
// const res = await fetch("https://.../portofolios");
// let portofolios = await res.json();
//   let services = listLayanan;

//   return { props: { services } };
// }) satisfies GetStaticProps<PropTypes>;

const getLayananList = () => {
  Papa.parse(layananTable, {
    download: true,
    header: true,
    complete: (results: Papa.ParseResult<DLayanan>) => {
      var parsedData = results.data;
      var columns = results.meta.fields;
      console.log(parsedData[0]["category"]);
      console.log(columns);

      // const res = rows.reduce((acc, e, i) => {
      //   return [...acc, [[e], columns[i]]];
      // }, []);
      // console.log(res);
    },
  });
};

const Layanan: React.FC<PropTypes> = ({ services }) => {
  useEffect(() => {
    getLayananList();
  }, []);
  const serviceCards =
    process.env.NODE_ENV === "development"
      ? listLayanan.map((item, index) => (
          <CardLayanan key={index} layanan={item} />
        ))
      : services &&
        services.map((item, index) => (
          <CardLayanan key={index} layanan={item} />
        ));

  return (
    <main className="flex flex-col items-center z-0 bg-primary-1-light">
      <StaticJumbotron imgSource={layananHighlight} className={"h-[35vh]"}>
        <header className="">
          <h1>Layanan</h1>
        </header>
      </StaticJumbotron>
      <section className="lockup flex flex-wrap justify-center gap-8 py-12 px-8 xl:px-0">
        {serviceCards}
      </section>
    </main>
  );
};

export default Layanan;
