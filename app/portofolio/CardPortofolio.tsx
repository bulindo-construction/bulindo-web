import React from "react";
import styles from "./styles/CardPortofolio.module.css";

import Image from "next/image";
import Link from "next/link";
import { AllPortofolioItem } from "../database/sheets/portofolio";

type PropType = {
  portofolio: AllPortofolioItem;
};

const CardPortofolio = (props: PropType) => {
  const { id, title, thumbnail } = props.portofolio;
  return (
    <Link href={`/portofolio/${id}`} id={id} className={styles.card_portofolio}>
      <div className={styles.card_portofolio__container}>
        <Image
          alt={title}
          src={thumbnail}
          className={styles.card_portofolio__highlight}
          width={800}
          height={560}
        />
        <div className={styles.card_portofolio__textbar}>
          <div className={styles.card_portofolio__text}>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardPortofolio;
