"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const isBrowser = () => typeof window !== "undefined";

const Navbar = () => {
  const [navTransparent, setNavTransparent] = useState(true);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      console.log(window.scrollY);
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
  };

  useEffect(() => {
    console.log(window);
    if (isBrowser()) {
      window.addEventListener("scroll", changeNavbarColor);
    }
  }, [window]);

  useEffect(() => {
    console.log("navTransparent: " + navTransparent);
  }, [navTransparent]);

  // $ Window is not defined

  return (
    <nav
      className={`${
        navTransparent ? "bg-white-1/75" : "bg-white-1"
      } flex text-dark-1 justify-end items-center gap-6 py-2 px-6 drop-shadow-md sticky top-0 z-10 overflow-hidden
      transition duration-300`}
    >
      <Link href="/" className="ml-4 mr-auto">
        <div>
          <Image
            alt="Bulindo Construction"
            width={136}
            height={40}
            src="/logo-nav.png"
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
