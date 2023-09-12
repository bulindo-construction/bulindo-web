"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo-footer.png";

type Props = {};

const LOGO_WIDTH = 257;
const LOGO_HEIGHT = 175;

const Footer: React.FC<Props> = (props) => {
  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="border bg-white-1 border-t-primary-1 border-t-8">
      <div className="flex flex-wrap lockup px-6 xl:px-0 pt-12 pb-8 gap-8 justify-between sm:justify-around">
        <div className="flex flex-col w-full md:w-2/5 xl:w-1/5 gap-4 items-center sm:items-start">
          <Image
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            alt="PT. BULINDO BANGUN LESTARI"
            src={logo}
          />
          <div>
            <h4>
              <b className="text-primary-1">PT Bulindo Bangun Lestari</b>
            </h4>
            <p>
              adalah lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
        <div className="flex flex-col flex-grow max-w-xl min-w-fit lg:flex-grow-0 w-1/3 gap-4 items-stretch">
          <h3 className="text-xl font-bold text-primary-1">Hubungi kami</h3>
          <form
            className="flex flex-col flex-grow gap-4 focus:border"
            onSubmit={(e) => {
              submitEmail(e);
            }}
          >
            <input
              type="email"
              placeholder="Alamat email"
              className="p-2"
            ></input>
            <textarea
              placeholder="Ada pertanyaan?"
              className="flex p-2 resize-none flex-grow-0 lg:flex-grow h-36"
            ></textarea>
            <input
              type="submit"
              className="px-8 py-2 bg-primary-1 text-white-1 self-end cursor-pointer tracking-wider"
              value="KIRIM"
            ></input>
          </form>
        </div>
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
