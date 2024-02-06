import { Jumbotron } from "@/app/components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { cache } from "react";
import Image from "next/image";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import Link from "next/link";
import layananApi from "@/app/database/sheets/layanan";

// TODO DELETE WHEN BE READY
const mockup = "/../public/mockup/mockup-layanan.png";

export const getLayanan = cache(async (layananId: string) => {
  const { getLayananById } = layananApi();
  const res = getLayananById(layananId);
  return res;
});

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const OPTIONS: EmblaOptionsType = { loop: true };
const CAROUSEL_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  active: false,
};

export default async function LayananPage({
  params,
}: {
  params: { id: string };
}) {
  const layananId = params.id;
  const layanan = await getLayanan(layananId);

  if (layanan == null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between z-0">
        Layanan dengan ID {layananId} tidak ditemukan. Silakan kembali ke
        halaman daftar layanan
      </main>
    );
  }

  // TODO DELETE WHEN BE READY
  layanan.others.forEach((data) => {
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
              <h1 className="text-dark-1 mb-2">{layanan.title}</h1>
            </header>
            <h3 className="text-lg mb-8">
              <b>{layanan.category}</b>
            </h3>
            <article>
              <p className="text-justify">{layanan.content}</p>
            </article>
          </section>
          {layanan.others.length > 0 && (
            <aside className="flex flex-col gap-5 md:pl-6 md:pt-0 md:mt-0 pl-0 pt-6 mt-2 md:border-l-2 md:border-l-dark-1 md:border-t-0 border-t-2 border-t-dark-1 text-dark-1">
              <header>
                <h3 className="text-xl">Layanan lainnya</h3>
              </header>
              {layanan.others.map((otherLayanan) => (
                <Link
                  href={`/layanan/${otherLayanan.id}`}
                  key={otherLayanan.id}
                  className="flex flex-col"
                >
                  <Image
                    alt=""
                    src={otherLayanan.thumbnail}
                    className="mb-2 border-2 border-dark-1"
                    width={360}
                    height={240}
                  />
                  <h5>
                    <b>{otherLayanan.title}</b>
                  </h5>
                  <h6 className="text-sm">{otherLayanan.category}</h6>
                </Link>
              ))}
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}
