"use client";

import "./embla.css";
import React, { useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import { BorderedButton } from "../Buttons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Jumbotron: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  return (
    <div className="embla">
      <BorderedButton
        href="/profil"
        className="absolute top-1/2 left-40 z-10"
        stylingClassname="tracking-wider border-white-1"
      >
        TELUSURI
      </BorderedButton>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
