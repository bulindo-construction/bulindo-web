import { Jumbotron } from "@/app/components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React, { cache } from "react";
import Image from "next/image";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import Link from "next/link";
import PortofolioApi from "@/app/database/sheets/portofolio";

// TODO DELETE WHEN BE READY
const mockup = "/../public/mockup/mockup-portofolio.png";

export const getPortofolio = cache(async (portofolioId: string) => {
  const { getPortofolioById } = PortofolioApi();
  const res = getPortofolioById(portofolioId);
  return res;
});

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const OPTIONS: EmblaOptionsType = { loop: true };
const CAROUSEL_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  active: false,
};

export default async function PortofolioPage({
  params,
}: {
  params: { id: string };
}) {
  const portofolioId = params.id;
  const portofolio = await getPortofolio(portofolioId);

  // TODO 404 PAGE
  if (portofolio == null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between z-0">
        Layanan dengan ID {portofolioId} tidak ditemukan. Silakan kembali ke
        halaman daftar layanan
      </main>
    );
  }

  // TODO DELETE WHEN BE READY
  portofolio.others.forEach((data) => {
    data.thumbnail = mockup;
  });

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
              <h1 className="text-dark-1 mb-4">{portofolio.title}</h1>
            </header>
            <h3 className="text-lg mb-2">
              <b>Deskripsi Portofolio</b>
            </h3>
            <article>
              <p className="text-justify">{portofolio.description}</p>
            </article>
          </section>
          <aside className="flex flex-col gap-5 md:pl-6 md:pt-0 md:mt-0 pl-0 pt-6 mt-2 md:border-l-2 md:border-l-dark-1 md:border-t-0 border-t-2 border-t-dark-1 text-dark-1">
            <header>
              <h3 className="text-xl">Projek lainnya</h3>
            </header>
            {portofolio.others.map((portofolio) => (
              <Link
                href={`/portofolio/${portofolio.id}`}
                key={portofolio.id}
                className="flex flex-col"
              >
                <Image
                  alt=""
                  src={portofolio.thumbnail}
                  className="mb-2 border-2 border-dark-1"
                  width={360}
                  height={240}
                />
                <h5>
                  <b>{portofolio.title}</b>
                </h5>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </main>
  );
};
