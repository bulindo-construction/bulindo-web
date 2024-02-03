import React from "react";
import styles from "./styles/CardLayanan.module.css";

import Image from "next/image";
import Link from "next/link";
import { AllLayananItem } from "../database/sheets/layanan";

type PropType = {
  layanan: AllLayananItem;
};

const CardLayanan = (props: PropType) => {
  const { id, title, thumbnail } = props.layanan;
  return (
    <Link href={`/layanan/${id}`} id={id} className={styles.card_layanan}>
      <div className={styles.card_layanan__container}>
        <Image
          alt={title}
          src={thumbnail}
          className={styles.card_layanan__highlight}
          width={800}
          height={600}
        />
        <div className={styles.card_layanan__textbar}>
          <div className={styles.card_layanan__text}>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardLayanan;
