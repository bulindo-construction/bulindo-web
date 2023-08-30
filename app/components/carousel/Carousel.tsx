"use client";

import styles from "./styles/Carousel.module.css";
import React, { useCallback, PropsWithChildren } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import classNames from "classnames/bind";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
  flip?: boolean;
  textBgClassName: string;
};

var cx = classNames.bind(styles);

const Carousel: React.FC<PropsWithChildren<PropType>> = (props) => {
  const { slides, options, autoplayOptions, flip, textBgClassName, children } =
    props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <div className={cx({ carousel_flip: flip, carousel: true, lockup: true })}>
      <div
        className={cx(textBgClassName, {
          carousel__text_section: true,
        })}
      >
        {children}
      </div>
      <div className={styles.carousel__utility_container}>
        <div className={styles.carousel__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.carousel__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cx({
                carousel__dot: true,
                carousel__dot__selected: index === selectedIndex,
              })}
            />
          ))}
        </div>
      </div>
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container}>
          {slides.map((index) => (
            <div className={styles.carousel__slide} key={index}>
              <Image
                className={styles.carousel__slide__img}
                src={imageByIndex(index)}
                alt=""
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
