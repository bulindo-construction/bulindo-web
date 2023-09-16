import { StaticJumbotron } from "@/app/components/carousel";
import portoHighlight from "@/public/jumbotron/Jumbo-3.png";
import { Portofolio } from "@/app/model/database";
import CardPortofolio from "./CardPortofolio";

export type PortofolioItem = Omit<Portofolio, "description">;

const mockup = "/../public/mockup/mockup-portofolio.png";

export default function Portofolio() {
  const listPortofolio: PortofolioItem[] = [
    { id: "1", name: "Porto 1", highlightImg: mockup },
    { id: "2", name: "Porto 2", highlightImg: mockup },
    { id: "3", name: "Porto 3", highlightImg: mockup },
    { id: "4", name: "Porto 4", highlightImg: mockup },
    { id: "5", name: "Porto 5", highlightImg: mockup },
    { id: "6", name: "Porto 6", highlightImg: mockup },
    { id: "7", name: "Porto 7", highlightImg: mockup },
  ];

  return (
    <main className="flex flex-col items-center z-0 bg-primary-1-light">
      <StaticJumbotron imgSource={portoHighlight} className={"h-[35vh]"}>
        <header>
          <h1 className="">Portofolio</h1>
        </header>
      </StaticJumbotron>
      <section className="lockup flex flex-wrap justify-center gap-6 py-12 px-8 xl:px-0 ">
        {listPortofolio.map((item, index) => (
          <CardPortofolio key={index} portofolio={item} />
        ))}
      </section>
    </main>
  );
}
