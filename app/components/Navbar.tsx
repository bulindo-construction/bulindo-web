"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";

const isBrowser = () => typeof window !== "undefined";
const SCROLL_HEIGHT_TRANSITION = 120;
const LOGO_WIDTH = 136;
const LOGO_HEIGHT = 40;
const LOGO_IMAGE = "/logo-nav.png";

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
      "bg-white-1/[.85]": navTransparent,
      "bg-white-1": !navTransparent,
    },
    "flex text-dark-1 justify-end items-center gap-6 py-2 px-6 w-full drop-shadow-md fixed top-0 z-50 overflow-hidden transition duration-300"
  );

  return (
    <nav className={navClassname}>
      <Link href="/" className="ml-4 mr-auto">
        <div>
          <Image
            alt="Bulindo Construction"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            src={LOGO_IMAGE}
          />
        </div>
      </Link>
      <Link href="/">Beranda</Link>
      <Link href="/profil">Profil</Link>
      <Link href="/layanan">Layanan</Link>
      <Link href="/portofolio">Portofolio</Link>
      <Link className="px-5 py-3 bg-primary-1 text-white-1" href="/kontak">
        Hubungi Kami
      </Link>
    </nav>
  );
};

export default Navbar;
