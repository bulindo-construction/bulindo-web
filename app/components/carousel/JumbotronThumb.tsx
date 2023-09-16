import Image from "next/image";
import React from "react";
import styles from "./styles/Jumbotron.module.css";
import classNames from "classnames/bind";

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

var cx = classNames.bind(styles);

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={cx({
        jumbotron__thumbs__slide: true,
        jumbotron__thumbs__slide__selected: selected,
      })}
    >
      <button
        onClick={onClick}
        className={styles.jumbotron__thumbs__slide__button}
        type="button"
      >
        <Image
          className={styles.jumbotron__thumbs__slide__img}
          src={imgSrc}
          alt=""
          width={400}
          height={300}
        />
      </button>
    </div>
  );
};
