"use client";

import styles from "./styles/LogoCarousel.module.css";
import React, { useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import logoByIndex from "./logoByIndex";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./LogoCarouselArrowButtons";
import classNames from "classnames/bind";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
};

var cx = classNames.bind(styles);

const LogoCarousel: React.FC<PropType> = (props) => {
  const { slides, options, autoplayOptions } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    setTimeout(() => autoplay.play(), 2000);
    autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <div className="lockup flex flex-col justify-center text-center">
      <header>
        <h2 className="text-3xl sm:text-4xl mb-10 text-dark-1">
          Pelanggan Kami
        </h2>
      </header>
      <div className={cx({ logocarousel: true, lockup: true })}>
        <div className={styles.logocarousel__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.logocarousel__overlay}></div>

        <div className={styles.logocarousel__viewport} ref={emblaRef}>
          <div className={styles.logocarousel__container}>
            {slides.map((index) => (
              <div className={styles.logocarousel__slide} key={index}>
                <Image
                  className={styles.logocarousel__slide__img}
                  src={logoByIndex(index)}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
