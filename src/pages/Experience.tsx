import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type ExperienceItem = {
  title: string;
  date: string;
  description: string;
  tools: string[];
  name: string;
};



function Experience() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotTop, setDotTop] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const dummyData: ExperienceItem[] = [
  {
    title: t("FrontEndDeveloper2"),
    name: t("JwanAdvanced"),
    date: t("JwanAdvancedDate"),
    description:
      t("JwanAdvancedDesc"),
    tools: ["React", "TypeScript", "Tailwind CSS", "Redux" ,  "JavaScript  (ES6+)" ,  "Bootstrap 5",  "Axios",  "REST APIs",  "Git & GitHub" , "Angular", "ServiceNow", "Service  Portal"],
  },
  {
    title: t("FrontEndDeveloper2"),
    name: t("Spiritude"),
    date: t("SpiritudeDate"),
    description:
      t("SpiritudeDesc"),
    tools: [ "React",  "Redux", "JavaScript",  "ESLint", "Tailwind CSS", "Shadcn/ui",  "Iconsax" , "React", "Slack", "Jira", "REST APIs"],
  },
  {
    title: t("FrontEndDeveloper2"),
    name: t("Sapetrol"),
    date: t("SapetrolDate"),
    description:
      t("SapetrolDesc"),
    tools: ["React",  "Ionic",  "HTML5",  "CSS3",  "Sass", "JavaScript",  "Git",  "GitHub",  "ES6+"],
  },
  {
    title: t("FrontEndDeveloper2"),
    name: t("FreelanceGolden"),
    date: "2023",
    description:
     t("FreelanceGoldenDesc"),
    tools: ["HTML5" ,  "CSS3" ,  "Bootstrap"],
  },
];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            setActiveIndex(index); 
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = cardsRef.current[activeIndex];
    if (el && timelineRef.current) {
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      setDotTop(elTop - timelineTop + el.offsetHeight / 2 - 6); 
    }
  }, [activeIndex]);

  return (
    <div className="relative flex gap-10 px-6 lg:px-32 py-20">
      {/* Timeline Line */}
      <div className="hidden lg:block relative w-10">
        {/* Base Line White */}
        <div
          ref={timelineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white rounded-full"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, #ff715a, #ff8c78, #ffb58a)",
            maskImage: `linear-gradient(to bottom, black ${((activeIndex+1)/dummyData.length)*100}%, transparent 0%)`,
            WebkitMaskImage: `linear-gradient(to bottom, black ${((activeIndex+1)/dummyData.length)*100}%, transparent 0%)`,
          }}
        />
        {/* Dot */}
        <span
          className="absolute w-3 h-3 bg-[#ff715a] rounded-full left-1/2 -translate-x-1/2 transition-all"
          style={{ top: dotTop }}
        />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-16 flex-1">
        {dummyData.map((item, index) => {
          const isVisible = visibleIndexes.includes(index);

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative transition-all duration-700 transform cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
            <div className="bg-[#1e3644] rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:border hover:border-red-200">                
                {/* Title + Date */}
                <div className="flex justify-between items-center mb-3 ">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-[#f7a192] text-sm sm:text-base bg-slate-700 rounded-full px-2 py-1 sm:px-3 sm:py-2">
                    {item.date}
                    </span>                
                </div>
                <p className="text-[#ff8c78] mb-8"> {item.name}</p>
                {/* Description */}
                <p className="text-gray-300 mb-4">{item.description}</p>
                {/* Tools */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-[#37434c] text-white px-3 py-1 rounded-full text-sm shadow-[0_0_20px_#653a39]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;