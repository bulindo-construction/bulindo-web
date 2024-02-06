import { StaticJumbotron } from "@/app/components/carousel";
import portoHighlight from "@/public/jumbotron/Jumbo-3.png";
import { Portofolio } from "@/app/model/portofolio";
import CardPortofolio from "./CardPortofolio";
import { cache } from "react";
import PortofolioApi from "@/app/database/sheets/portofolio";

// TODO DELETE WHEN BACKEND READY
const mockup = "/../public/mockup/mockup-portofolio.png";

export const getAllPortofolio = cache(async () => {
  const { getAllPortofolio } = PortofolioApi();
  const res = getAllPortofolio();
  return res;
});

export default async function Portofolio() {
  const portofolios = await getAllPortofolio();
  portofolios.forEach((portofolio) => {
    portofolio.thumbnail = mockup;
  });

  const portofolioCards = portofolios.map((item, index) => (
    <CardPortofolio key={index} portofolio={item} />
  ));

  return (
    <main className="flex flex-col items-center z-0 bg-primary-1-light">
      <StaticJumbotron imgSource={portoHighlight} className={"h-[35vh]"}>
        <header>
          <h1 className="">Portofolio</h1>
        </header>
      </StaticJumbotron>
      <section className="lockup flex flex-wrap justify-center gap-6 py-12 px-8 xl:px-0 ">
        {portofolioCards}
      </section>
    </main>
  );
};
