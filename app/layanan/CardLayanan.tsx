import React from "react";
import styles from "./styles/CardLayanan.module.css";

import { LayananItem } from "@/app/layanan/page";
import Image from "next/image";
import Link from "next/link";

type PropType = {
  layanan: LayananItem;
};

const CardLayanan = (props: PropType) => {
  const { id, name, category, highlightImg } = props.layanan;
  return (
    <Link href={`/layanan/${id}`} id={id} className={styles.card_layanan}>
      <div className={styles.card_layanan__container}>
        <Image
          alt={name}
          src={highlightImg}
          className={styles.card_layanan__highlight}
          placeholder="blur"
          blurDataURL={
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTk1MCA1MDk4IGMtMjcgLTE0IC01MyAtMzcgLTY1IC01OCAtMTEgLTE5IC0xNDYgLTE2MiAtMzAwIC0zMTcKLTI2MyAtMjY2IC0yODIgLTI4MyAtMzE1IC0yODMgLTk2IDAgLTE5OCAtNjEgLTI0MyAtMTQ0IC0yMSAtNDAgLTIyIC00OSAtMjIKLTM3MSAwIC0zMjAgMSAtMzMxIDIyIC0zNzEgMTIgLTIyIDM5IC01NiA1OSAtNzQgNjIgLTU0IDk3IC02NCAyMTQgLTY1IDk5IDAKMTA4IDIgMTYwIDMxIDM4IDIxIDY2IDQ2IDkwIDgyIGwzNCA1MiAxMzMgMCAxMzMgMCAwIC0xNDQ5IDAgLTE0NTAgLTIxNyAtMwpjLTIxNiAtMyAtMjE4IC0zIC0yNzEgLTMxIC03MSAtMzcgLTEyOCAtOTcgLTE2MCAtMTY2IC0yMyAtNDkgLTI3IC03MiAtMzAKLTE4MyAtNSAtMTU2IDAgLTE4OSA0MSAtMjM1IDU5IC02NyAtMSAtNjMgMTA2NyAtNjMgMTA2OCAwIDEwMDggLTQgMTA2NyA2Mwo0MSA0NiA0NiA3OSA0MSAyMzUgLTMgMTExIC03IDEzNCAtMzAgMTgzIC0zMiA2OSAtODkgMTI5IC0xNjAgMTY2IC01MyAyOCAtNTUKMjggLTI3MCAzMSBsLTIxOCAzIDAgMTQ1MCAwIDE0NDkgNzI1IDAgNzI1IDAgMCAtMjU1IDAgLTI1NSAtNzIgMCBjLTEyMyAwCi0yMTMgLTU4IC0yNTMgLTE2MyAtMTMgLTM0IC0xNiAtNjggLTEzIC0xNDMgMyAtODUgNiAtMTA0IDI3IC0xMzMgNDggLTY2IDcxCi03MSAzOTQgLTcxIDMxOSAwIDMzMCAyIDM4NCA2MyAzOCA0NCA0NyA4MyA0MSAxODYgLTEwIDE2NiAtMTA5IDI2MSAtMjc0IDI2MQpsLTY0IDAgMCAyNTUgMCAyNTUgNTEzIDAgYzMyNiAwIDUyNiA0IDU1MCAxMSA0NiAxMiAxMDAgNTggMTE3IDk5IDggMTkgMTEgNjcKOCAxNDIgLTMgMTAyIC02IDEyMCAtMzUgMTgxIC0zOCA4MCAtMTE0IDE2MyAtMTgzIDIwMSAtODUgNDcgLTE1OCA1NiAtNDQ1IDU2CmwtMjYwIDAgLTk1MiAzNzIgYy03NzEgMzAxIC05NTMgMzc2IC05NjIgMzk0IC01IDEyIC0yNiAzNSAtNDcgNTAgbC0zNyAyOQotMzAxIDMgYy0yOTYgMyAtMzAyIDIgLTM0NiAtMjB6IG01OTAgLTQzMCBsMCAtMjgzIC0yNjAgMjYwIGMtMTg2IDE4NiAtMjYwCjI2NiAtMjYwIDI4MiBsMCAyMyAyNjAgMCAyNjAgMCAwIC0yODJ6IG04NTcgLTExNCBjMzczIC0xNDYgNjg3IC0yNzAgNjk4Ci0yNzQgMTEgLTUgLTI5MSAtOSAtNjgyIC05IGwtNzAzIC0xIDAgMjc1IGMwIDE1MSAyIDI3NSA0IDI3NSAzIDAgMzEwIC0xMjAKNjgzIC0yNjZ6IG0tMTU0NyAtNTQgbDAgLTIzMCAtMTM0IDAgLTEzNCAwIC0yNSA0MyBjLTE0IDI0IC0zMyA1MCAtNDIgNTcgLTE0CjEyIDMgMzMgMTU3IDE4NyA5NSA5NSAxNzQgMTczIDE3NSAxNzMgMiAwIDMgLTEwMyAzIC0yMzB6IG0zNzUgLTQwIGwxOTAgLTE5MAotMTk4IDAgLTE5NyAwIDAgMTkwIGMwIDEwNSAzIDE5MCA4IDE5MCA0IDAgOTMgLTg1IDE5NyAtMTkweiBtLTg0NiAtMjA0IGM0OAotMjUgNTEgLTQ2IDUxIC0zMzIgMCAtMjk5IC0zIC0zMTMgLTY2IC0zMzQgLTU4IC0yMCAtMTQ0IC03IC0xNzEgMjUgLTIzIDI2Ci0yMyAzMCAtMjMgMzA4IDAgMzA0IDIgMzE2IDU0IDMzNyAzNCAxNCAxMjQgMTEgMTU1IC00eiBtMzgxMiAtMTc3IGMxMDEgLTQ3CjE1OSAtMTM5IDE1OSAtMjU2IGwwIC03MyAtMTg3NSAwIC0xODc1IDAgMCAxNzUgMCAxNzUgMTc3OCAtMiBjMTYxNSAtMyAxNzgwCi00IDE4MTMgLTE5eiBtLTI2NTEgLTg1OSBjMCAtMTk4IC0zIC0zNjAgLTggLTM2MCAtNCAwIC0xMjEgMTE0IC0yNjAgMjUzCmwtMjUyIDI1MiAwIDEwOCAwIDEwNyAyNjAgMCAyNjAgMCAwIC0zNjB6IG0tMjcyIC04MDcgYy0xMjggLTEyOCAtMjM2IC0yMzMKLTI0MCAtMjMzIC01IDAgLTggMjEzIC04IDQ3MiBsMCA0NzMgMjQwIC0yNDAgMjQwIC0yNDAgLTIzMiAtMjMyeiBtMjIwMyA0NTgKYzI1IC0yNiAyOSAtMzcgMjkgLTg1IGwwIC01NiAtMjU1IDAgLTI1NSAwIDAgNjAgYzAgNTEgNCA2NSAyNSA4NSAyNCAyNSAyNQoyNSAyMjUgMjUgbDIwMiAwIDI5IC0yOXogbS0xOTMxIC05MTMgbDAgLTQ3MyAtMjQwIDI0MCAtMjQwIDI0MCAyMzIgMjMyIGMxMjgKMTI4IDIzNiAyMzMgMjQwIDIzMyA1IDAgOCAtMjEzIDggLTQ3MnogbS0yNzAgLTQ0MyBsMjM1IC0yMzUgLTIzNSAtMjM1IGMtMTI5Ci0xMjkgLTIzOCAtMjM1IC0yNDIgLTIzNSAtNSAwIC04IDIxMSAtOCA0NzAgMCAyNTkgMyA0NzAgOCA0NzAgNCAwIDExMyAtMTA2CjI0MiAtMjM1eiBtMjY2IC04MjIgYy00IC0xMCAtNTEgLTEzIC0xOTggLTEzIGwtMTkzIDAgMTk1IDE5NSAxOTUgMTk1IDMgLTE4MgpjMSAtMTAwIDAgLTE4OCAtMiAtMTk1eiBtNjAwIC0yMDggYzY1IC0zOCA4NCAtODcgODQgLTIxMyBsMCAtMTAyIC05NDAgMAotOTQwIDAgMCAxMDIgYzAgMTI1IDE5IDE3NCA4MyAyMTMgbDQyIDI1IDgxNCAwIDgxNCAwIDQzIC0yNXoiLz4KPHBhdGggZD0iTTI2NzAgMjI5MyBjLTM3IC0xNCAtNzQgLTQ5IC05MSAtODcgLTE4IC0zOSAtMTkgLTg4IC0xOSAtMTA1NCAwCi04MzggMiAtMTAxOCAxNCAtMTA0NSAxNiAtMzkgNjEgLTgyIDk5IC05NiA0MCAtMTUgMjI5NCAtMTUgMjMzNCAwIDM4IDE0IDgzCjU3IDk5IDk2IDEyIDI3IDE0IDE2OSAxNCA3OTEgbDAgNzU5IC0yMyA0NCBjLTE1IDI3IC0zOCA1MiAtNjMgNjYgbC0zOSAyMwotNTMyIDAgLTUzMyAwIDAgMTY4IGMtMSAyMjYgLTEyIDI2NiAtOTAgMzIwIGwtMzMgMjIgLTU2MSAtMSBjLTMwOSAwIC01NjggLTMKLTU3NiAtNnogbTEwODAgLTExNDMgbDAgLTk4MCAtODUgMCAtODUgMCAwIDE5OSBjMCAxODkgLTEgMjAwIC0yMiAyMzEgLTUxIDc0Ci01NCA3NSAtMzA0IDc4IGwtMjI1IDMgLTQ0IC0yNSBjLTc1IC00NSAtODUgLTc5IC04NSAtMjk5IGwwIC0xODcgLTg1IDAgLTg1CjAgMCA5ODAgMCA5ODAgNTEwIDAgNTEwIDAgMCAtOTgweiBtMTIwMCAtMjU1IGwwIC03MjUgLTg1IDAgLTg1IDAgMCAxODcgYzAKMjIwIC0xMCAyNTQgLTg1IDI5OSBsLTQ0IDI1IC0yMjUgLTMgYy0yNTAgLTMgLTI1MyAtNCAtMzAzIC03OCAtMjIgLTMxIC0yMwotNDIgLTIzIC0yMzEgbDAgLTE5OSAtODUgMCAtODUgMCAwIDcyNSAwIDcyNSA1MTAgMCA1MTAgMCAwIC03MjV6IG0tMTU0MAotNTU1IGwwIC0xNzAgLTE3MCAwIC0xNzAgMCAwIDE3MCAwIDE3MCAxNzAgMCAxNzAgMCAwIC0xNzB6IG0xMjAwIDAgbDAgLTE3MAotMTcwIDAgLTE3MCAwIDAgMTcwIDAgMTcwIDE3MCAwIDE3MCAwIDAgLTE3MHoiLz4KPHBhdGggZD0iTTMwMTUgMTkzNSBjLTIyIC0yMSAtMjUgLTMzIC0yNSAtMTAwIDAgLTY3IDMgLTc5IDI1IC0xMDAgMzYgLTM3IDg2Ci0zNCAxMTkgNiAyMiAyNiAyNiA0MCAyNiA5NCAwIDU0IC00IDY4IC0yNiA5NCAtMzMgNDAgLTgzIDQzIC0xMTkgNnoiLz4KPHBhdGggZD0iTTMzNTUgMTkzNSBjLTIyIC0yMSAtMjUgLTMzIC0yNSAtMTAwIDAgLTY3IDMgLTc5IDI1IC0xMDAgNDAgLTQxCjEwNSAtMzMgMTMwIDE2IDE4IDM0IDIwIDEzMiAzIDE2MiAtMjggNTMgLTkyIDY0IC0xMzMgMjJ6Ii8+CjxwYXRoIGQ9Ik0zMDUwIDE1MzMgYy04IC0zIC0yNSAtMTUgLTM3IC0yNiAtMjAgLTE4IC0yMyAtMzAgLTIzIC05OSAwIC03MCAzCi04MiAyNSAtMTAzIDMxIC0zMiA3NSAtMzIgMTExIC0yIDIzIDIwIDI4IDM0IDMyIDg2IDYgNzggLTExIDExOSAtNTQgMTM3IC0xOQo4IC0zNSAxNCAtMzYgMTMgLTIgMCAtMTAgLTMgLTE4IC02eiIvPgo8cGF0aCBkPSJNMzM4NCAxNTMwIGMtMzkgLTE1IC01NCAtNTAgLTU0IC0xMjEgMCAtODIgNSAtOTYgNDEgLTExNCA0MiAtMjIgNjcKLTE4IDEwMCAxNCAyNiAyNiAyOSAzNiAyOSA5MCAwIDgwIC0xMiAxMDkgLTU1IDEyNiAtMTkgOCAtMzYgMTUgLTM3IDE0IC0yIDAKLTEzIC00IC0yNCAtOXoiLz4KPHBhdGggZD0iTTMwMzUgMTA5OCBjLTM3IC0yMCAtNDUgLTQwIC00NSAtMTE4IDAgLTY3IDMgLTc5IDIzIC05NyAzMyAtMzAgNjIKLTM2IDk1IC0xOSA0MCAyMSA1NSA2MyA1MCAxMzcgLTQgNTIgLTkgNjYgLTMyIDg2IC0yOSAyNSAtNTkgMjkgLTkxIDExeiIvPgo8cGF0aCBkPSJNMzM3NSAxMDk4IGMtMzYgLTIxIC00NCAtNDIgLTQ1IC0xMTUgMCAtNjEgMyAtNzYgMjQgLTk5IDMwIC0zNiA4NgotMzkgMTE5IC02IDE3IDE4IDIyIDM2IDI1IDk3IDQgNzIgMyA3NSAtMjYgMTA1IC0zMiAzMSAtNjMgMzcgLTk3IDE4eiIvPgo8cGF0aCBkPSJNNDE2NSAxMzYzIGMtNjUgLTE2IC04OCAtOTggLTM5IC0xNDQgMjYgLTI0IDI2IC0yNCAyOTQgLTI3IDIyMSAtMwoyNzQgLTEgMzA0IDEyIDY5IDI5IDcyIDExNSA2IDE0OCAtMzEgMTYgLTY2IDE4IC0yOTAgMTcgLTE0MCAtMSAtMjY0IC0zIC0yNzUKLTZ6Ii8+CjxwYXRoIGQ9Ik00MTIyIDk5NyBjLTMxIC0zMyAtMjkgLTg3IDQgLTExOCBsMjYgLTI0IDI3NiAtMyBjMzAxIC0yIDMxNiAwIDM0MAo1MiAxNiAzMiA5IDY5IC0xOCA5NiAtMTkgMTkgLTM1IDIwIC0zMTMgMjAgbC0yOTQgMCAtMjEgLTIzeiIvPgo8L2c+Cjwvc3ZnPgo="
          }
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
