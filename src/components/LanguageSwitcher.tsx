// import { useTranslation } from "react-i18next";
// import i18n from "i18next";
// import { FaGlobe } from "react-icons/fa";

// const LanguageSwitcher = () => {
//   const { i18n: i18next } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18next.language === "ar" ? "en" : "ar";
//     i18n.changeLanguage(newLang);

//     document.body.dir = newLang === "ar" ? "rtl" : "ltr";
//   };

//     return (
//     <button
//         onClick={toggleLanguage}
//         className="
//         fixed top-6 right-6 z-50
//         px-2 py-1
//         bg-[#1e3644]
//         text-white
//         rounded-full
//         border border-[#ff715a]
//         hover:bg-[#ff715a]
//         transition-all duration-300
//         shadow-lg
//         flex items-center gap-2
//         text-sm
//         "
//     >
//         {FaGlobe ({className:"text-lg"}) }

//         <span className="font-medium">
//         {i18next.language === "ar" ? "English" : "عربي"}
//         </span>
//     </button>
//     );
// };

// export default LanguageSwitcher;


import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";

    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("appLanguage", newLang); // ✅ مهم للحفظ بعد الريفرش
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        fixed top-6 right-6 z-50
        px-2 py-1
        bg-[#1e3644]
        text-white
        rounded-full
        border border-[#ff715a]
        hover:bg-[#ff715a]
        transition-all duration-300
        shadow-lg
        flex items-center gap-2
        text-sm
      "
    >
       {FaGlobe ({className:"text-lg"}) }

      <span className="font-medium">
        {i18n.language === "ar" ? "English" : "عربي"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;