import Image from "next/image";
import Jumbotron from "./components/carousel/Jumbotron";
import { EmblaOptionsType } from "embla-carousel-react";
import Carousel from "./components/carousel/Carousel";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import { BorderedTransparentButton } from "./components/Buttons";
import { LogoCarousel } from "./components/carousel";

const JUMBOTRON_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  delay: 8000,
  stopOnInteraction: false,
};
const OPTIONS: EmblaOptionsType = { loop: true };
const CAROUSEL_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  delay: 5000,
};
const CAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
};
const LOGOCAROUSEL_AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  delay: 4000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};
const LOGOCAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
  dragFree: true,
};
const SLIDE_COUNT = 3;
const LOGOS_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const LOGOS = Array.from(Array(LOGOS_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between z-0">
      <Jumbotron
        slides={SLIDES}
        options={OPTIONS}
        autoplayOptions={JUMBOTRON_AUTOPLAY_OPTIONS}
      />
      <div className="w-full pt-16 xl:py-16 bg-secondary-1-light">
        <Carousel
          slides={SLIDES}
          options={CAROUSEL_OPTIONS}
          autoplayOptions={CAROUSEL_AUTOPLAY_OPTIONS}
          textBgClassName="bg-gradient-1"
        >
          <h2 className="text-3xl font-light">Layanan</h2>
          <p className="mb-12 text-md text-center">
            Dengan spesialiasi pada desain dan pembangunan, kami menyediakan
            layanan yang sesuai dengan kebutuhan Anda
          </p>
          <BorderedTransparentButton
            href="/layanan"
            className="tracking-wider border-white-1"
          >
            TELUSURI
          </BorderedTransparentButton>
        </Carousel>
      </div>
      <div className="w-full pt-16 xl:py-16 bg-primary-1-light">
        <Carousel
          slides={SLIDES}
          options={CAROUSEL_OPTIONS}
          autoplayOptions={CAROUSEL_AUTOPLAY_OPTIONS}
          textBgClassName={"bg-gradient-2"}
          flip
        >
          <h2 className="text-3xl font-light">Portofolio</h2>
          <p className="mb-12 text-md text-center">
            Mulai dari rumah sampai perusahaan multinasional, kami memiliki
            pengalaman dengan klien-klien yang bervariasi
          </p>
          <BorderedTransparentButton
            href="/portofolio"
            className="tracking-wider border-white-1"
          >
            TELUSURI
          </BorderedTransparentButton>
        </Carousel>
      </div>
      <div className="pt-16 pb-28">
        <LogoCarousel
          slides={LOGOS}
          options={LOGOCAROUSEL_OPTIONS}
          autoplayOptions={LOGOCAROUSEL_AUTOPLAY_OPTIONS}
        />
      </div>
    </main>
  );
}
