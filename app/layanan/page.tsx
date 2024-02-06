"use client";

import { StaticJumbotron } from "@/app/components/carousel";
import layananHighlight from "@/public/jumbotron/Jumbo-2.png";
import CardLayanan from "./CardLayanan";
import { useEffect, useState } from "react";
import layananApi from "@/app/database/sheets/layanan";
import type {
  AllLayananItem,
  AllLayananResponse,
} from "@/app/database/sheets/layanan";

// TODO DELETE WHEN BACKEND READY
const mockup = "/../public/mockup/mockup-layanan.png";

type PropTypes = {
  services: AllLayananItem[];
};

// export const getStaticProps = (async () => {
// TODO
// const res = await fetch("https://.../portofolios");
// let portofolios = await res.json();
//   let services = listLayanan;

//   return { props: { services } };
// }) satisfies GetStaticProps<PropTypes>;

const Layanan: React.FC<PropTypes> = ({ services }) => {
  const { getAllLayanan } = layananApi();
  const [layananData, setLayananData] = useState<AllLayananResponse>([]);

  const fetchLayanan = async () => {
    getAllLayanan()
      .then((res) => {
        if (res != null) setLayananData(res);
      })
      .catch((error) => console.log("Get All Layanan error", error));
  };

  useEffect(() => {
    fetchLayanan();
  }, []);

  return (
    <main className="flex flex-col items-center z-0 bg-primary-1-light">
      <StaticJumbotron imgSource={layananHighlight} className={"h-[35vh]"}>
        <header className="">
          <h1>Layanan</h1>
        </header>
      </StaticJumbotron>
      <section className="lockup flex flex-wrap justify-center gap-8 py-12 px-8 xl:px-0">
        {layananData.map((item, index) => {
          item.thumbnail = mockup; // TODO DELETE WHEN BACKEND READY
          return <CardLayanan key={index} layanan={item} />;
        })}
      </section>
    </main>
  );
};

export default Layanan;
