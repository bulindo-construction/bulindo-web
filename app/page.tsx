import { EmblaOptionsType } from "embla-carousel-react";
import { AutoplayOptionsType } from "embla-carousel-autoplay";
import { BorderedTransparentButton } from "@/app/components/Buttons";
import { Jumbotron, Carousel, LogoCarousel } from "@/app/components/carousel";

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
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const LOGOS_COUNT = 7;
const LOGOS = Array.from(Array(LOGOS_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between z-0">
      <Jumbotron
        slides={SLIDES}
        options={OPTIONS}
        height={"h-[45vh] lg:h-[60vh]"}
        autoplayOptions={JUMBOTRON_AUTOPLAY_OPTIONS}
        withNavigate
      />
      <section className="w-full pt-16 lg:py-16 bg-primary-1-light">
        <Carousel
          slides={SLIDES}
          options={CAROUSEL_OPTIONS}
          autoplayOptions={CAROUSEL_AUTOPLAY_OPTIONS}
          textBgClassName="bg-gradient-1"
        >
          <header>
            <h2 className="text-3xl font-light">Layanan</h2>
          </header>
          <p className="mb-0 lg:mb-12 text-md text-center">
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
      </section>
      <section className="w-full pt-16 lg:py-16 bg-secondary-1-light">
        <Carousel
          slides={SLIDES}
          options={CAROUSEL_OPTIONS}
          autoplayOptions={CAROUSEL_AUTOPLAY_OPTIONS}
          textBgClassName={"bg-gradient-2"}
          flip
        >
          <header>
            <h2 className="text-3xl font-light">Portofolio</h2>
          </header>
          <p className="mb-0 lg:mb-12 text-md text-center">
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
      </section>
      <section className="pt-16 pb-16 lg:pb-28">
        <LogoCarousel
          slides={LOGOS}
          options={LOGOCAROUSEL_OPTIONS}
          autoplayOptions={LOGOCAROUSEL_AUTOPLAY_OPTIONS}
        />
      </section>
    </main>
  );
}
