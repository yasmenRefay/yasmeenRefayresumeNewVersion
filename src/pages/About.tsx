import React from "react";
import { useTranslation } from "react-i18next";

const skillsData = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Redux", level: 85 },
  { name: "Angular (2+)", level: 80 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Bootstrap", level: 95 },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <>
    <div className=" text-white min-h-screen px-6 lg:px-10 py-16  animate-fadeIn">

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <p className="text-lg leading-relaxed">
            {t("PassionateFrontEndDeveloperwithexperience")} <span className="font-semibold">Angular, React, Ionic, HTML/CSS, and ServiceNow</span>.
            {t("Skilledincreating")} <span className="text-[#ff715a] font-bold">{t("Ecommerceplatforms")}</span>, 
            {t("withstrongexpertise")}<span className="font-semibold">{t("APIintegrationandconnecting")}</span>, 
            {t("deliveringresponsive")}
          </p>
        </div>

        <div className="lg:w-1/4 flex flex-col gap-6 text-lg">
          <div className="flex justify-between border-b border-dashed border-[#ff715ac2] p-2">
            <span className="font-bold text-2xl text-[#ff715a]">13+</span>
            <span>{t("projects_completed")}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#ff715ac2] p-2">
            <span className="font-bold text-2xl text-[#ff715a]">98%</span>
            <span>{t("positive_reviews")}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#ff715ac2] p-2">
            <span className="font-bold text-2xl text-[#ff715a]">3+</span>
            <span>{t("years_experience")}</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8">{t("key_competencies")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((skill) => (
        <div
          key={skill.name}
          className="bg-[#283d4e] p-6 rounded-lg flex flex-col items-center gap-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="relative w-24 h-24">
            {/* Circle Background */}
            <svg className="absolute top-0 left-0" width="96" height="96">
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="#37434c"
                strokeWidth="8"
                fill="none"
              />
            </svg>
            {/* Circle Progress */}
            <svg className="absolute top-0 left-0 rotate-[-90deg]" width="96" height="96">
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="#ff715a"
                strokeWidth="8"
                fill="none"
                strokeDasharray={276} // 2 * π * r
                strokeDashoffset={276 - (276 * skill.level) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
              {skill.level}%
            </div>
          </div>
          <span className="text-lg font-semibold">{skill.name}</span>
        </div>
      ))}

      </div>
    </div>
  </>

  );
}
