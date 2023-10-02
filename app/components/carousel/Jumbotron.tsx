"use client";

import styles from "./styles/Jumbotron.module.css";
import React, { useCallback, useMemo } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import { BorderedButton } from "../Buttons";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import classNames from "classnames/bind";
import { Thumb } from "./JumbotronThumb";

type PropType = {
  slides: number[];
  height: string;
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
  withNavigate?: boolean;
  withButton?: boolean;
  withDots?: boolean;
  withPreview?: boolean;
  withNavPadding?: boolean;
};

var cx = classNames.bind(styles);

const Jumbotron: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    height,
    autoplayOptions,
    withNavigate,
    withButton,
    withDots,
    withPreview,
    withNavPadding,
  } = props;

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

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "center",
    dragFree: true,
  });
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  var paddingTop = useMemo(() => {
    if (typeof document === "undefined") return 0;
    var navElement = document.getElementById("nav");
    var navHeight = navElement?.offsetHeight;

    return !!navHeight && withNavPadding ? navHeight : 0;
  }, [withNavPadding]);

  return (
    <section
      className={cx(styles.jumbotron, height)}
      style={{ marginTop: paddingTop + "px" }}
    >
      {!withNavigate ? (
        <></>
      ) : (
        <BorderedButton
          href="/profil"
          className="absolute sm:bottom-1/2 sm:left-[10%] sm:translate-x-0 sm:translate-y-full bottom-[10%] left-1/2 -translate-x-1/2 translate-y-0 z-10 tracking-wider border-white-1"
        >
          TELUSURI
        </BorderedButton>
      )}
      <div className={styles.jumbotron__viewport} ref={emblaRef}>
        <div className={styles.jumbotron__container}>
          {slides.map((index) => (
            <div className={styles.jumbotron__slide} key={index}>
              <Image
                className={styles.jumbotron__slide__img}
                src={imageByIndex(index)}
                alt=""
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>

      {!withButton ? (
        <></>
      ) : (
        <div className={styles.jumbotron__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}

      {!withDots ? (
        <></>
      ) : (
        <div className={styles.jumbotron__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cx({
                jumbotron: true,
                jumbotron__dot__selected: index === selectedIndex,
              })}
            />
          ))}
        </div>
      )}
      {!withPreview ? (
        <></>
      ) : (
        <div className={styles.jumbotron__thumbs}>
          <div
            className={styles.jumbotron__thumbs__viewport}
            ref={emblaThumbsRef}
          >
            <div className={styles.jumbotron__thumbs__container}>
              {slides.map((index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={imageByIndex(index)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Jumbotron;
