import { StaticJumbotron } from "@/app/components/carousel";
import portoHighlight from "@/public/jumbotron/Jumbo-3.png";
import { Portofolio } from "@/app/model/portofolio";
import CardPortofolio from "./CardPortofolio";

// TODO DELETE WHEN BACKEND READY
const mockup = "/../public/mockup/mockup-portofolio.png";
const listPortofolio: PortofolioItem[] = [
  { id: "1", name: "Porto 1", highlightImg: mockup },
  { id: "2", name: "Porto 2", highlightImg: mockup },
  { id: "3", name: "Porto 3", highlightImg: mockup },
  { id: "4", name: "Porto 4", highlightImg: mockup },
  { id: "5", name: "Porto 5", highlightImg: mockup },
  { id: "6", name: "Porto 6", highlightImg: mockup },
  { id: "7", name: "Porto 7", highlightImg: mockup },
];

export type PortofolioItem = Omit<Portofolio, "description" | "images">;
type PropTypes = {
  portofolios: PortofolioItem[];
};

// export const getStaticProps = (async () => {
//   // TODO
//   // const res = await fetch("https://.../portofolios");
//   // let portofolios = await res.json();
//   let portofolios = listPortofolio;

//   return { props: { portofolios } };
// }) satisfies GetStaticProps<PropTypes>;

const Portofolio: React.FC<PropTypes> = ({ portofolios }) => {
  const portofolioCards =
    process.env.NODE_ENV === "development"
      ? listPortofolio.map((item, index) => (
          <CardPortofolio key={index} portofolio={item} />
        ))
      : portofolios &&
        portofolios.map((item, index) => (
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

export default Portofolio;