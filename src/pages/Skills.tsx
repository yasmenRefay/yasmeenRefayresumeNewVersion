import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAngular,
  FaJsSquare,
  FaSlack,
  FaNpm ,
  FaCheckCircle ,
  FaCloud ,

} from "react-icons/fa";

import { SiTailwindcss, SiTypescript, SiRedux, SiJira ,SiEslint  , SiSwagger , SiJson  , SiAxios   } from "react-icons/si";
import { MdLanguage ,MdApi  } from "react-icons/md";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  icon: IconType;
};



function Skills() {
    const { t } = useTranslation();
    const skillsData: Record<string, Skill[]> = {
    UIFrontend: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Angular (2+)", icon: FaAngular },
      { name: "Angular Material", icon: FaAngular },
      { name: "React.js", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Figma", icon: FaFigma },
    ],

    APIBackend: [
      { name: "JavaScript (ES6+)", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Axios", icon: SiAxios },
      { name: "RESTful API Integration", icon: MdApi },
      { name: "JSON Data Manipulation", icon: SiJson },
      { name: "Swagger", icon: SiSwagger },
      { name: "ServiceNow", icon: FaCloud  },
      { name: "ESLint", icon: SiEslint },
      ],

    Workflow: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Jira", icon: SiJira },
      { name: "Slack", icon: FaSlack },
      { name: "NPM", icon: FaNpm },
      { name: "Internationalization (i18n)", icon: MdLanguage },
      { name: "Form Handling & Validation", icon: FaCheckCircle },

    ],
  };
  
  return (
    <div className="mt-8 flex flex-col gap-6 p-10">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-2 text-[#ff715a]">{t(category)}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => {
                const Icon = skill.icon;
              return (
                <span
                  key={i}
                  className="
                    flex items-center gap-2
                    bg-[#37434c] text-white px-4 py-2
                    rounded-full font-medium
                    hover:scale-110 transition-all duration-300
                    cursor-pointer
                    hover:shadow-[0_0_30px_#ff715a]
                    text-lg
                  "
                >
                  <Icon className="text-xl text-[#ff715a]" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;

