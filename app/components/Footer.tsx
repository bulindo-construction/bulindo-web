import React from "react";
import Image from "next/image";
import logo from "@/public/logo-footer.png";
import FooterEmailForm from "./FooterEmailForm";

type PropType = {};

const LOGO_WIDTH = 257;
const LOGO_HEIGHT = 175;

const Footer = () => {
  return (
    <footer className="bg-white-1 border-t-primary-1 border-t-8">
      <div className="flex flex-wrap lockup px-6 xl:px-0 pt-12 pb-8 gap-8 justify-between sm:justify-around">
        <section className="flex flex-col w-full md:w-2/5 xl:w-1/5 items-center sm:items-start">
          <Image
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            alt="PT. BULINDO BANGUN LESTARI"
            src={logo}
            className="mb-4"
          />
          <h4>
            <b className="text-primary-1">PT Bulindo Bangun Lestari</b>
          </h4>
          <p>
            adalah lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-primary-1">Info kontak</h3>
          <p>Kantor operasional - Bandung</p>
          <p>
            Jalan NamaJalan No. 1234 <br />
            Kel. Lurah, Kec. Camat <br />
            Bandung - 14440 <br />
            No telp. - (+62) 888 0800 8080 <br />
            Fax - (+62) 888 0800 8080 <br />
            Email - construction@gmail.com
          </p>
        </section>
        <section className="flex flex-col flex-grow max-w-xl min-w-fit lg:flex-grow-0 w-1/3 gap-4 items-stretch">
          <h3 className="text-xl font-bold text-primary-1">Hubungi kami</h3>
          <FooterEmailForm />
        </section>
      </div>
      <div className="bg-dark-1 text-white-1 py-2 px-8">
        <small>
          Copyright &copy; {new Date().getFullYear()} Bulindo. All Rights
          Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
