"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import logo from "@/public/logo-nav.png";

const isBrowser = () => typeof window !== "undefined";
const SCROLL_HEIGHT_TRANSITION = 200;
const LOGO_WIDTH = 136;
const LOGO_HEIGHT = 40;

const Navbar = () => {
  const [navTransparent, setNavTransparent] = useState(true);
  const changeNavbarColor = () => {
    if (window.scrollY >= SCROLL_HEIGHT_TRANSITION) {
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
  };

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener("scroll", changeNavbarColor);
    }
  }, []);

  var navClassname = classNames(
    {
      "bg-white-1/[.75]": navTransparent,
      "bg-white-1": !navTransparent,
    },
    "flex text-dark-1 justify-end items-center gap-6 py-2 px-6 w-full drop-shadow-md fixed top-0 z-50 overflow-hidden transition duration-300"
  );

  var navItemClassname = "hover:transition-all duration-150 hover:underline";

  return (
    <nav id="nav" className={navClassname}>
      <Link href="/" className="ml-4 mr-auto">
        <Image
          alt="Bulindo Construction"
          width={LOGO_WIDTH}
          // height={LOGO_HEIGHT}
          className="h-auto"
          src={logo}
        />
      </Link>
      <Link className={navItemClassname} href="/">
        Beranda
      </Link>
      <Link className={navItemClassname} href="/profil">
        Profil
      </Link>
      <Link className={navItemClassname} href="/layanan">
        Layanan
      </Link>
      <Link className={navItemClassname} href="/portofolio">
        Portofolio
      </Link>
      <Link
        className="px-4 py-2 bg-primary-1 text-white-1 hover:transition-all duration-150 hover:scale-105"
        href="/kontak"
      >
        Hubungi Kami
      </Link>
    </nav>
  );
};

export default Navbar;
