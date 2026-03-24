import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaCode,
} from "react-icons/fa";
import { projects } from "../data/projectsData";
import { useTranslation } from "react-i18next";

function Projects() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  

  // Auto slider
    useEffect(() => {
        if (expanded || isHovered) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [expanded, isHovered, projects.length]);

  return (
    <div className="py-10 px-4 lg:px-24 text-white">

        {/* Main Card */}
        <div 
            className="overflow-hidden relative py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}   
        >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(${isRTL ? "" : "-"}${current * 100}%)`,
                }}
            >
                {projects.map((project, index) => (
                    
                <div
                    key={index}
                    className="min-w-full px-2 mb-0"
                    
                >
                    <div className="bg-[#1e3644] rounded-3xl p-8 transform transition duration-500 hover:scale-[1.03] cursor-pointer">
                        {/* Project Image */}
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-700">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-[260px] object-cover"
                            />
                        </div>

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                        <p className="text-gray-300 mb-4">{t(project.shortDesc)}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-[#37434c] px-3 py-1 rounded-full text-sm">
                                {tech}
                            </span>
                            ))}
                        </div>
                        </div>

                        <div className="text-5xl text-[#ff8c78]">{project.icon({})} </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">

                    {/* View Details */}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-2 bg-[#ff8c78] hover:bg-[#ff6b57] transition px-6 py-3 rounded-xl font-semibold"
                    >
                        {expanded ? FaChevronUp({}) : FaChevronDown({})}
                        {expanded ? t("HideDetails") : t("ViewDetails")}
                    </button>   

                    {/* Conditional Buttons Container */}
                    <div className="flex flex-wrap gap-4">
                        
                        {/* Live Demo Button */}
                        {project.hasDemo && project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-[#ff8c78] text-[#ff8c78] hover:bg-[#ff8c78] hover:text-white transition px-6 py-3 rounded-xl font-semibold"
                        >
                            {FaExternalLinkAlt({})} {t("LiveDemo")}
                        </a>
                        )}

                        {/* Link Repo Button */}
                        {project.linkRepo && (
                        <a
                            href={project.linkRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition px-6 py-3 rounded-xl font-semibold"
                    >
                            {FaCode({})} {t("ViewCode")}
                        </a>
                        )}
                        

                    </div>
                    </div>                    

                    {/* Expanded Details */}
                    {expanded && (
                    <div className="mt-8 border-t border-gray-600 pt-6 space-y-8 animate-fadeIn">

                        {/* Overview */}
                        <div>
                            <h3 className="text-xl font-bold text-[#ff8c78] mb-2">{t("ProjectOverview")}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t(project.details.overview)}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl font-bold text-[#ff8c78] mb-4">{t("TechStack")}</h3>
                            <div className="grid md:grid-cols-2 gap-6">

                            {Object.entries(project.details.techStack).map(([category, items]) => {
                            if (!items?.length) return null;

                            return (
                                <div key={category}>
                                    <h4 className="capitalize text-white font-semibold mb-2">
                                        {category}
                                    </h4>
                                    <ul className="text-gray-300 space-y-1">
                                        {items.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                            })}

                            </div>
                        </div>

                        {/* Features */}
                        <div>
                        <h3 className="text-xl font-bold text-[#ff8c78] mb-2">{t("KeyFeatures")}</h3>
                        <ul className="text-gray-300 space-y-1">
                            {project.details.keyFeatures.map((featureKey, i) => (
                                <li key={i}>✓ {t(featureKey)}</li>
                            ))}
                        </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                        <h3 className="text-xl font-bold text-[#ff8c78] mb-2">{t("TechnicalAchievements")}</h3>
                        <ul className="text-gray-300 space-y-1">
                            {project.details.achievements.map((a, i) => (
                            <li key={i}>🏆 {t(a)}</li>
                            ))}
                        </ul>
                        </div>

                    </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-3 lg:mt-10">
            {projects.map((_p, i) => (
            <button
                key={i}
                onClick={() => {
                setCurrent(i);
                setExpanded(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                i === current
                    ? "bg-[#ff8c78] scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
            />
            ))}
        </div>

        {/* Select Project */}
        <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <span className="text-[#ff8c78]">✦</span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t("SelectProject")}
            </span>
            <span className="text-[#ff8c78]">✦</span>
            </h3>      

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((p, i) => (
                <button
                    key={i}
                    onClick={() => {
                    setCurrent(i);
                    setExpanded(false);
                    }}
                    className={`group flex flex-col items-center justify-center text-center
                    rounded-3xl p-3 border transition-all duration-300
                    min-h-[170px]
                    ${
                    i === current
                        ? "border-[#ff715a] border text-[#ff715a] scale-105 "
                        : "bg-[#1e3644] text-gray-300 border-[#2c3e47] hover:bg-[#274554] hover:scale-105"
                    }`}
                >
                    {/* Icon */}
                    <div
                    className={`text-2xl mb-4 transition-all duration-500
                    ${i === current ? "animate-bounce" : "group-hover:-translate-y-2"}
                    `}
                    >
                    {p.icon({})}
                    </div>

                    {/* Title */}
                    <p className="font-semibold leading-snug">
                    {p.title}
                    </p>
                </button>
                ))}
            </div>
        </div>

    </div>

    
  );
}

export default Projects;