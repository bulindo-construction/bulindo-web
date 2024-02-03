"use client";

import { StaticJumbotron } from "@/app/components/carousel";
import layananHighlight from "@/public/jumbotron/Jumbo-2.png";
import CardLayanan from "./CardLayanan";
import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  layananApi,
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

  useEffect(() => {
    getAllLayanan(setLayananData);
  }, []);

  const serviceCards: ReactNode = useMemo(() => {
    if (layananData.length == 0) return <></>;
    return layananData.map((item, index) => {
      item.thumbnail = mockup; // TODO DELETE WHEN BACKEND READY
      return <CardLayanan key={index} layanan={item} />;
    });
  }, [layananData]);

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
