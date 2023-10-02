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
  const [isSidebarOpen, toggleSidebar] = useState(false);
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
    "flex text-dark-1 justify-end items-center gap-6 py-2 px-6 w-full drop-shadow-md fixed top-0 z-50 transition duration-300 text-logo"
  );

  var navItemClassname =
    "hover:transition-all duration-150 hover:underline md:flex hidden";
  var navSidebarItemClassname =
    "hover:transition-all duration-150 hover:underline flex";

  return (
    <nav id="nav" className={navClassname}>
      <Link href="/" className="ml-0 md:ml-4 mr-auto">
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
        className="px-4 py-2 bg-logo text-white-1 hover:transition-all duration-150 hover:scale-105 md:flex hidden"
        href="/kontak"
      >
        Hubungi Kami
      </Link>
      <button
        className="flex items-center justify-center text-center md:hidden z-50 w-9 h-9 text-xl text-white-1 bg-logo"
        onClick={() => toggleSidebar(!isSidebarOpen)}
      >
        {isSidebarOpen ? "=" : "x"}
      </button>
      <div
        className={classNames(
          {
            nav__sidebar: true,
            "-right-1/2": isSidebarOpen,
            "right-0": !isSidebarOpen,
          },
          "md:hidden fixed z-40 top-0 pt-20 px-8 bg-white-1 h-screen flex flex-col items-end gap-4 transition-position duration-500 ease-in-out"
        )}
      >
        <Link
          className={navSidebarItemClassname}
          href="/"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          Beranda
        </Link>
        <Link
          className={navSidebarItemClassname}
          href="/profil"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          Profil
        </Link>
        <Link
          className={navSidebarItemClassname}
          href="/layanan"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          Layanan
        </Link>
        <Link
          className={navSidebarItemClassname}
          href="/portofolio"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          Portofolio
        </Link>
        <Link
          className="px-4 py-2 bg-logo text-white-1 hover:transition-all duration-150 hover:scale-105"
          href="/kontak"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
