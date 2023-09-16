import styles from "./styles/StaticJumbotron.module.css";
import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames/bind";

type PropType = {
  imgSource: string | StaticImageData;
  className?: string;
  isDark?: boolean;
};

var cx = classNames.bind(styles);

const StaticJumbotron: React.FC<PropsWithChildren<PropType>> = (props) => {
  const { imgSource, isDark, className, children } = props;

  return (
    <section className={cx(styles.static_jumbotron, className)}>
      <Image
        className={styles.static_jumbotron__img}
        src={imgSource}
        alt=""
        width={1920}
        height={1080}
      />
      <div
        className={cx(styles.static_jumbotron__text, {
          "bg-overlay-1": !isDark,
          "bg-overlay-2": isDark,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default StaticJumbotron;
