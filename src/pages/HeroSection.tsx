import { useEffect, useState } from "react";
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
  FaDownload,
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
        className="relative flex flex-col lg:flex-row items-center lg:justify-between
        px-6 sm:px-10 md:px-16 lg:px-28 xl:px-36
        gap-32 min-h-screen pt-24 overflow-hidden"
      >
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left max-w-xl space-y-8">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white lg:ms-24">
            {t("Hello")}
            <span className="mx-2 text-[#ff715a]">.</span>
          </h1>

          {/* Name */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="border-b-2 border-[#ff715a] w-16 sm:w-24 md:w-32 lg:w-48 block"></span>
            <span className="text-4xl sm:text-5xl lg:text-6xl text-white">
              {t("Yasmeen")}
            </span>
          </div>

          <p className="text-4xl lg:text-6xl text-white font-extrabold flex whitespace-nowrap lg:ms-24">
            {t("FrontEndDeveloper")}
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center lg:justify-center items-center gap-4 sm:gap-6 pt-6 flex-wrap">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                 className={`group flex items-center
                    bg-[#1e3644] text-[#ff8c78]
                    rounded-full overflow-hidden
                    transition-all duration-500
                    w-12 sm:w-14 hover:w-40 sm:hover:w-44
                    h-12 sm:h-14
                    border border-[#2c3e47]
                    ${item.color}
                  `}
              >
                <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 shrink-0">
                  {item.icon({ className: "text-lg sm:text-xl" })}
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pr-5 font-medium text-sm sm:text-base">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Download Resume */}
          <div className="flex justify-center mt-20">
            <a
              href="https://drive.google.com/file/d/1rs6l1eZan4-FHuVFv39lix8JI_YC76D3/view?usp=sharing"
              target="_blank"  
              rel="noopener noreferrer"
            >
              <button
                className="group flex items-center gap-3 border border-[#ff715a]
                px-6 py-3 rounded-full bg-transparent
                text-[#ff715a] font-medium
                hover:scale-105 transition hover:shadow-[0_0_20px_#ff715a]"
              >
                {t("DownloadResume")}

                <FaDownload
                  className="transition-transform duration-300
                  group-hover:animate-bounce"
                  size={18}
                />
              </button>
            </a>
          </div>
        </div>

       {/* RIGHT SIDE IMAGE */}
        <div className="relative
          w-[300px] h-[300px]
          sm:w-[340px] sm:h-[340px]
          md:w-[420px] md:h-[420px]
          lg:w-[520px] lg:h-[520px]
          xl:w-[500px] xl:h-[500px]
          flex items-center justify-center lg:me-20 mb-10">

          {/* Circle Border */}
          <div
            className="absolute inset-0 rounded-full border-[18px] sm:border-[22px] lg:border-[30px] border-[#ff715a] z-20 pointer-events-none"
            style={{
              boxShadow: "0 0 200px #653a39, inset 0 0 80px #6e3f3f",
            }}
          />

          {/* Image Mask */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10 bg-[#1e3644]">
            <img
              src={heroImage}
              alt="Yasmeen Refay"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Left Icon */}
          <div
            className="absolute text-[60px] sm:text-[80px] lg:text-[120px]
            -top-10 -left-6 sm:-top-14 sm:-left-10 lg:-top-16 lg:-left-20 font-bold"
            style={{
              color: "#000000",
              WebkitTextStroke: "1px #ff715a",
              filter: "drop-shadow(0 0 30px #653a39)",
            }}
          >
            {leftIcon}
          </div>

          {/* Right Icon */}
          <div
            className="absolute text-[60px] sm:text-[80px] lg:text-[120px]
            -bottom-8 -right-6 sm:-bottom-12 sm:-right-10 lg:-bottom-14 lg:-right-20 font-bold"
            style={{
              color: "#000000",
              WebkitTextStroke: "1px #ff715a",
              filter: "drop-shadow(0 0 30px #653a39)",
            }}
          >
            {rightIcon}
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
