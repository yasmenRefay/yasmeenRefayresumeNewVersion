import React, { useEffect, useState } from "react";
import heroImage from "../assets/img/User.png";
// import heroImage from "../assets/img/user2.png";
import Navbar from "../components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "../components/Footer";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Projects from "./Projects";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import i18n from "../i18n/i18n";

const HeroSection = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const savedLang = localStorage.getItem("appLanguage") || "en";

 useEffect(() => {
  if (i18n.language !== savedLang) {
    i18n.changeLanguage(savedLang);
  }
  document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
}, [savedLang, i18n.language]);

  const [active, setActive] = useState(
    () => localStorage.getItem("activeRoute") || "about"
  );
  const [animateTitle, setAnimateTitle] = useState(false);

  const leftIcon = i18n.language === "ar" ? ">" : "<";
  const rightIcon = i18n.language === "ar" ? "<" : ">";

  // const toggleLanguage = () => {
  //   const newLang = i18n.language === "ar" ? "en" : "ar";
  //   i18n.changeLanguage(newLang);
  //   document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  //   localStorage.setItem("appLanguage", newLang);
  // };

  const routesData = [
    { path: "/about", element: <About />, key: "about" },
    { path: "/skills", element: <Skills />, key: "skills" },
    { path: "/experience", element: <Experience />, key: "experience" },
    { path: "/service", element: <Service />, key: "service" },
    { path: "/projects", element: <Projects />, key: "projects" },
    { path: "/contact", element: <Contact />, key: "contact" },
  ];

  useEffect(() => {
  const pathKey =
    routesData.find((r) => r.path === location.pathname)?.key || "about";

  // تأجيل التحديث لتجنب render متكرر
  const updateState = () => {
    setActive(pathKey);
    localStorage.setItem("activeRoute", pathKey);

    setAnimateTitle(false);
    setTimeout(() => setAnimateTitle(true), 50);
  };

  updateState();
}, [location.pathname]);

  const getRouteName = () => t(`nav_${active}`);

  const contacts = [
    {
      icon: FaLinkedin,
      label: t("contact_linkedin"),
      link: "https://www.linkedin.com/in/yasmeen-refay-90045b187/",
      color:
        "hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-transparent",
    },
    {
      icon: FaGithub,
      label: t("contact_github"),
      link: "https://github.com/yasmenRefay",
      color:
        "hover:border-[#ff8c78] hover:text-[#ff8c78] hover:bg-transparent",
    },
    {
      icon: FaWhatsapp,
      label: t("contact_whatsapp"),
      link: "https://wa.me/201200101503",
      color:
        "hover:border-[#25D366] hover:text-[#25D366] hover:bg-transparent",
    },
    {
      icon: FaEnvelope,
      label: t("contact_email"),
      link: "mailto:yasmeenhifny@gmail.com",
      color:
        "hover:border-[#EA4335] hover:text-[#EA4335] hover:bg-transparent",
    },
  ];

  return (
    <div>
      <LanguageSwitcher/>

      <section
        id="hero"
        className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-36 gap-10 min-h-screen pt-20 overflow-hidden animate-slideInLeft"
      >
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
            {t("Hello")}
            <span className=" mx-2 text-[#ff715a]">.</span>
          </h1>

          <div className="flex items-center justify-start gap-3 -ml-40">
            <span className="border-b-2 border-[#ff715a] w-[200px] block"></span>
            <span className="text-4xl lg:text-6xl text-white">
              {t("Yasmeen")}
            </span>
          </div>

          <p className="text-4xl lg:text-6xl text-white font-extrabold flex whitespace-nowrap">
            {t("FrontEndDeveloper")}
          </p>

          <div className="flex justify-center items-center gap-6 py-10">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center
                  bg-[#1e3644]
                  text-[#ff8c78]
                  rounded-full
                  overflow-hidden
                  transition-all duration-500
                  w-14 hover:w-44
                  h-14
                  border border-[#2c3e47]
                  ${item.color}
                `}
              >
                <div className="flex items-center justify-center w-14 h-14 shrink-0">
                  {item.icon({ className: "text-xl" })}
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pr-5 font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] flex items-center justify-start mx-0 lg:mx-20 fadeInImage">
          <div
            className="absolute inset-0 rounded-full border-[30px] border-[#ff715a] shadow-lg"
            style={{
              boxShadow: "0 0 400px #653a39, inset 0 0 100px #6e3f3f",
            }}
          ></div>

          <div
            className="absolute text-[100px] -top-24 -left-10 lg:-top-20 lg:-left-32 lg:text-[150px] font-bold"
            style={{
              color: "#000000",
              WebkitTextStroke: "1px #ff715a",
              filter: "drop-shadow(0 0 30px #653a39)",
            }}
          >
            {leftIcon}
          </div>

          <div
            className="absolute -bottom-10 -right-12 text-[100px] lg:-bottom-10 lg:-right-32 lg:text-[150px] font-bold"
            style={{
              color: "#000000",
              WebkitTextStroke: "1px #ff715a",
              filter: "drop-shadow(0 0 30px #653a39)",
            }}
          >
            {rightIcon}
          </div>

          <div className="absolute z-10 left-1/2 lg:-bottom-20 -translate-x-1/2 overflow-visible flex items-end justify-center drop-shadow-[0_0_30px_#653a39]">
            <img
              src={heroImage}
              alt="Yasmeen Refay"
              className="w-full h-[300px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      <Navbar setAnimateTitle={setAnimateTitle} />

      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mt-10 relative inline-block">
          <span
            className={`inline-block mb-4 transition-opacity duration-700 ${
              animateTitle ? "opacity-100 animate-fadeInSlide" : "opacity-0"
            }`}
          >
            {getRouteName()}
          </span>
          <span
            className={`absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-[#ff715a] via-[#ff8c78] to-[#ffb58a] rounded-full transition-all duration-700 ${
              animateTitle ? "w-full animate-expandLine" : "w-0"
            }`}
          ></span>
        </h1>
      </div>

      <div className="flex justify-center w-full mt-24 pb-10">
        <div className="w-full max-w-5xl mx-10 px-4 sm:px-6 md:px-8 bg-[#19252c] text-white rounded-3xl border border-red-100">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            {routesData.map((route) => (
              <Route key={route.key} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HeroSection;
