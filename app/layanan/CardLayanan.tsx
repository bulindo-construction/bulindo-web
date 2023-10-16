import React from "react";
import styles from "./styles/CardLayanan.module.css";

import { LayananItem } from "@/app/layanan/page";
import Image from "next/image";
import Link from "next/link";

type PropType = {
  layanan: LayananItem;
};

const CardLayanan = (props: PropType) => {
  const { id, name, highlightImg } = props.layanan;
  return (
    <Link href={`/layanan/${id}`} id={id} className={styles.card_layanan}>
      <div className={styles.card_layanan__container}>
        <Image
          alt={name}
          src={highlightImg}
          className={styles.card_layanan__highlight}
          width={800}
          height={600}
        />
        <div className={styles.card_layanan__textbar}>
          <div className={styles.card_layanan__text}>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardLayanan;
