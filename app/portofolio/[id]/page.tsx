import { Jumbotron } from "@/app/components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PortofolioItem } from "../page";
import { Portofolio } from "@/app/model/database";
import Image from "next/image";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import Link from "next/link";

// TODO DELETE WHEN BE READY
const mockup = "/../public/mockup/mockup-portofolio.png";
const other_portofolio: PortofolioItem[] = [
  { id: "1", name: "Portofolio 1", highlightImg: mockup },
  { id: "2", name: "Portofolio 2", highlightImg: mockup },
  { id: "3", name: "Portofolio 3", highlightImg: mockup },
];
const mock_data: Portofolio = {
  id: "10",
  name: "Portofolio 10",
  highlightImg: mockup,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
          lacus viverra vitae congue eu. Facilisis magna etiam tempor orci eu
          lobortis elementum nibh tellus. Metus dictum at tempor commodo
          ullamcorper a lacus vestibulum sed. Ultrices sagittis orci a
          scelerisque. Accumsan lacus vel facilisis volutpat. Aliquam sem et
          tortor consequat id porta. Malesuada bibendum arcu vitae elementum
          curabitur vitae. Augue eget arcu dictum varius duis at. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus. Mauris pharetra
          et ultrices neque ornare aenean euismod elementum nisi.

          Morbi leo urna molestie at elementum eu facilisis. Erat velit
          scelerisque in dictum non consectetur a. Sed id semper risus in
          hendrerit gravida. Mauris pellentesque pulvinar pellentesque habitant.
          Velit egestas dui id ornare arcu odio ut sem nulla. Sit amet tellus
          cras adipiscing enim eu turpis egestas pretium. Nam at lectus urna
          duis. Enim ut tellus elementum sagittis vitae et. At in tellus integer
          feugiat scelerisque varius morbi enim. Risus sed vulputate odio ut
          enim blandit volutpat maecenas volutpat. Diam maecenas sed enim ut`,
  images: [],
};

async function getPortofolio(noteId: string) {
  const res = await fetch(
    `http://localhost:3000/api/collections/portofolio/records/${noteId}`,
    { next: { revalidate: 60 } }
  );
  const data = res.json();
  return data;
}

async function getOtherPortofolio() {
  const res = await fetch(
    `http://localhost:3000/api/collections/portofolio/records`,
    { next: { revalidate: 60 } }
  );
  const data = res.json();
  return data;
}

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const OPTIONS: EmblaOptionsType = { loop: true };
const CAROUSEL_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  active: false,
};

const LayananPage: React.FC = () => {
  // TODO DELETE WHEN BE READY
  var data = mock_data;
  var otherData = other_portofolio;

  // const router = useRouter();
  // var data = getLayanan(router.query.id);
  // var otherData = getOtherLayanan();

  return (
    <main>
      <Jumbotron
        slides={SLIDES}
        options={OPTIONS}
        autoplayOptions={CAROUSEL_AUTOPLAY_OPTIONS}
        height={"h-[50vh] lg:h-[80vh]"}
        withButton
        withPreview
        withNavPadding
      />
      <div className="w-full md:py-16 py-10 bg-primary-1-light">
        <div className="lockup px-10 md:grid lg:grid-cols-[8fr_2fr] md:grid-cols-[7fr_3fr] flex flex-col gap-8">
          <section className="flex flex-col text-dark-1">
            <header>
              <h1 className="text-dark-1 mb-4">{data.name}</h1>
            </header>
            <h3 className="text-lg mb-2">
              <b>Deskripsi Portofolio</b>
            </h3>
            <article>
              <p className="text-justify">{data.description}</p>
            </article>
          </section>
          <aside className="flex flex-col gap-5 md:pl-6 md:pt-0 md:mt-0 pl-0 pt-6 mt-2 md:border-l-2 md:border-l-dark-1 md:border-t-0 border-t-2 border-t-dark-1 text-dark-1">
            <header>
              <h3 className="text-xl">Projek lainnya</h3>
            </header>
            {otherData.map((portofolio) => (
              <Link
                href={`/portofolio/${portofolio.id}`}
                key={portofolio.id}
                className="flex flex-col"
              >
                <Image
                  alt=""
                  src={portofolio.highlightImg}
                  className="mb-2 border-2 border-dark-1"
                  width={360}
                  height={240}
                />
                <h5>
                  <b>{portofolio.name}</b>
                </h5>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default LayananPage;
