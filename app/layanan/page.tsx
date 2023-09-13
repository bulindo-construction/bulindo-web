import { StaticJumbotron } from "@/app/components/carousel";
import layananHighlight from "@/public/jumbotron/Jumbo-2.png";
import { Layanan } from "@/app/model/database";
import CardLayanan from "./CardLayanan";

export type LayananItem = Omit<Layanan, "description">;

const mockup = "/../public/mockup/mockup-layanan.png";

export default function Layanan() {
  const listLayanan: LayananItem[] = [
    { id: "1", name: "Jasa 1", category: "Cat1", highlightImg: mockup },
    { id: "2", name: "Jasa 2", category: "Cat2", highlightImg: mockup },
    { id: "3", name: "Jasa 3", category: "Cat3", highlightImg: mockup },
    { id: "4", name: "Jasa 4", category: "Cat4", highlightImg: mockup },
    { id: "5", name: "Jasa 5", category: "Cat5", highlightImg: mockup },
  ];

  return (
    <main className="flex flex-col items-center z-0 bg-primary-1-light">
      <StaticJumbotron imgSource={layananHighlight} className={"h-[35vh]"}>
        <h1 className="">Layanan</h1>
      </StaticJumbotron>
      <div className="lockup flex flex-wrap justify-center gap-8 py-12 px-8 xl:px-0">
        {listLayanan.map((item, index) => (
          <CardLayanan key={index} layanan={item} />
        ))}
      </div>
    </main>
  );
}
