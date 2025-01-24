import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/10 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="bgColor" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg"
            : ""
        }`}
      >
        <Link href={"/"}>
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center justify-evenly gap-6 lg:gap-8
                rounded-full px-12 py-3   ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}
        >
          <li>
            <Link className="font-Ovo" href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href={"#about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href={"#work"}>
              {" "}
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href={"#contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="theme" className="w-6" />
          </button>
          <Link
            href={"#contact"}
            className="hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            {" "}
            Contact{" "}
            <Image src={assets.arrow_icon} alt="contact-img" className="w-3" />
          </Link>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="theme"
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>
        {/* ******* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="closing" className="w-5" />
          </div>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#work"}>
              {" "}
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" onClick={closeMenu} href={"#contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
