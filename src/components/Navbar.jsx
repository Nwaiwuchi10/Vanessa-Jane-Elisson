import { useEffect, useRef } from "react";

import header_bg_color from "../assets/header-bg-color.png";
import moon_icon from "../assets/moon_icon.png";
import sun_icon from "../assets/sun_icon.png";
import arrow_icon from "../assets/arrow-icon.png";
import arrow_icon_dark from "../assets/arrow-icon-dark.png";
import menu_black from "../assets/menu-black.png";
import menu_white from "../assets/menu-white.png";
import close_black from "../assets/close-black.png";
import close_white from "../assets/close-white.png";
import pdf from "../assets/profile.pdf";
const Navbar = () => {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      }
    });

    // -------- make DARK the default, light when toggled ----------
    if (
      localStorage.theme === "light" || // user explicitly chose light
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      document.documentElement.classList.remove("dark"); // force light
    } else {
      document.documentElement.classList.add("dark"); // default dark
    }
  }, []);
  const downloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "VanessaJaneElisson-Portfolio.pdf";
    link.click();
  };

  return (
    <>
      <div
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
    dark:hidden"
      >
        <img src={header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[6%] py-4 flex items-center gap-4 z-50"
      >
        <span className="flex-none whitespace-nowrap text-sm sm:text-lg lg:text-xl cursor-pointer dark:hidden">
          Vanessa Jane Elisson
        </span>
        <span className="flex-none whitespace-nowrap text-sm sm:text-lg lg:text-xl cursor-pointer hidden dark:block">
          Vanessa Jane Elisson
        </span>
        {/* <img src={logo} alt="Logo"
        className="w-28 cursor-pointer mr-14 dark:hidden" />

        <img src={logo_dark} alt="Logo"
        className="w-28 cursor-pointer mr-14 hidden dark:block" /> */}

        <ul
          ref={navLinkRef}
          className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-5 rounded-full px-4 xl:px-6 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo
        dark:border dark:border-white/50 dark:bg-transparent"
        >
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors" href="#top">Home</a>
          </li>
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors" href="#about">About me</a>
          </li>
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors" href="#services">Services</a>
          </li>
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors" href="#work">My Work</a>
          </li>
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors cursor-pointer" onClick={downloadPortfolio}>
              My portfolio
            </a>
          </li>
          <li>
            <a className="whitespace-nowrap text-sm xl:text-base hover:text-[#b820e6] transition-colors" href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex flex-none items-center justify-end gap-3">
          <button onClick={toggleTheme} aria-label="Toggle color theme">
            <img src={moon_icon} alt="" className="w-6 dark:hidden" />
            <img src={sun_icon} alt="" className="w-6 hidden dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 xl:px-7 py-2.5 border border-gray-500 rounded-full font-Ovo whitespace-nowrap"
          >
            Contact
            <img src={arrow_icon} alt="" className="w-3 dark:hidden" />
            <img
              src={arrow_icon_dark}
              alt=""
              className="w-3 hidden dark:block"
            />
          </a>

          <button className="block lg:hidden ml-1" onClick={openMenu} aria-label="Open navigation menu">
            <img src={menu_black} alt="" className="w-6 dark:hidden" />
            <img src={menu_white} alt="" className="w-6 hidden dark:block" />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src={close_black}
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />

            <img
              src={close_white}
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a onClick={downloadPortfolio} style={{ cursor: "pointer" }}>
              My portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
