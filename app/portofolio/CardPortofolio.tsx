import React from "react";
import styles from "./styles/CardPortofolio.module.css";

import { PortofolioItem } from "./page";
import Image from "next/image";
import Link from "next/link";

type PropType = {
  portofolio: PortofolioItem;
};

const CardPortofolio = (props: PropType) => {
  const { id, name, highlightImg } = props.portofolio;
  return (
    <Link href={`/portofolio/${id}`} id={id} className={styles.card_portofolio}>
      <div className={styles.card_portofolio__container}>
        <Image
          alt={name}
          src={highlightImg}
          className={styles.card_portofolio__highlight}
          width={800}
          height={560}
        />
        <div className={styles.card_portofolio__textbar}>
          <div className={styles.card_portofolio__text}>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardPortofolio;
