"use client";

// import styles from "./styles/Embla.module.css";
import styles from "./styles/Jumbotron.module.css";
import React, { useCallback } from "react";
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

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
  withButton?: boolean;
  withPreview?: boolean;
};

var cx = classNames.bind(styles);

const Jumbotron: React.FC<PropType> = (props) => {
  const { slides, options, autoplayOptions, withButton, withPreview } = props;
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
    <div className={styles.embla}>
      <BorderedButton
        href="/profil"
        className="absolute top-1/2 left-[10%] z-10"
        stylingClassname="tracking-wider border-white-1"
      >
        TELUSURI
      </BorderedButton>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
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
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cx({
              embla: true,
              embla__dot__selected: index === selectedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
