import { StaticJumbotron } from "@/app/components/carousel";
import layananHighlight from "@/public/jumbotron/Jumbo-2.png";
import CardLayanan from "./CardLayanan";
import LayananApi from "@/app/database/sheets/layanan";

// TODO DELETE WHEN BACKEND READY
const mockup = "/../public/mockup/mockup-layanan.png";

export default async function Layanan() {
  const { getAllLayanan } = LayananApi();
  const layananData = await getAllLayanan();
  layananData.forEach((layanan) => {
    layanan.thumbnail = mockup;
  });

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
}
