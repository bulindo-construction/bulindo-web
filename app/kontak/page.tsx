import { StaticJumbotron } from "@/app/components/carousel";
import contactHighlight from "@/public/jumbotron/Jumbo-1.png";
import icon_email from "@/public/icons/alternate_email.svg";
import icon_cs from "@/public/icons/support_agent.svg";
import icon_alamat from "@/public/icons/apartment.svg";
import styles from "./styles/Contact.module.css";
import Image from "next/image";
import Map from "./Map";

const ICON_HEIGHT = 200;

export default function Contact() {
  return (
    <main className="flex flex-col items-center z-0">
      <StaticJumbotron
        imgSource={contactHighlight}
        className={"h-[35vh]"}
        isDark
      >
        <header>
          <h1 className="text-white-1">Hubungi Kami</h1>
        </header>
      </StaticJumbotron>
      <section className="w-full py-16 bg-secondary-1-light flex justify-center">
        <div className="lockup inline-grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8">
          <div className={styles.contact_container}>
            <Image
              src={icon_alamat}
              alt=""
              height={ICON_HEIGHT}
              className={styles.contact_icon}
            />
            <h3 className={styles.contact_title}>Alamat Kantor</h3>
            <p className={styles.contact_content}>
              Jalan NamaJalan No. 1234
              <br />
              Kel. Lurah, Kec. Camat
              <br />
              Bandung - 14440
            </p>
          </div>
          <div className={styles.contact_container}>
            <Image
              src={icon_cs}
              alt=""
              height={ICON_HEIGHT}
              className={styles.contact_icon}
            />
            <h3 className={styles.contact_title}>Customer Service</h3>
            <p className={styles.contact_content}>
              No telp. - (+62) 888 0800 8080
              <br />
              Fax. - (+62) 888 0800 8080
            </p>
          </div>
          <div className={styles.contact_container}>
            <Image
              src={icon_email}
              alt=""
              height={ICON_HEIGHT}
              className={styles.contact_icon}
            />
            <h3 className={styles.contact_title}>Email</h3>
            <p className={styles.contact_content}>construction@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary-1-light flex">
        <Map />
      </section>
    </main>
  );
}
