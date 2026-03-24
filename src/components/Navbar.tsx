import { NavLink, useLocation } from "react-router-dom";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

type NavItem = {
  name: string;
  icon: IconType;
  path: string;
};

type NavbarProps = {
  setAnimateTitle: (val: boolean) => void;
};

const Navbar = ({ setAnimateTitle }: NavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: t("nav_about"), path: "about", icon: FaUser },
    { name: t("nav_experience"), path: "experience", icon: FaBriefcase },
    { name: t("nav_skills"), path: "skills", icon: FaCode },
    { name: t("nav_service"), path: "service", icon: FaServicestack },
    { name: t("nav_projects"), path: "projects", icon: FaProjectDiagram },
    { name: t("nav_contact"), path: "contact", icon: FaEnvelope },
  ];

  return (
    <nav className="w-full z-50 shadow-md bg-[#19252c]">
      <div className="flex items-center justify-center py-4 px-6 lg:px-20">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === `/${item.path}`;
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  onClick={() => {
                    setAnimateTitle(false);
                    setTimeout(() => setAnimateTitle(true), 50);
                  }}
                  className={`
                    flex items-center gap-2
                    px-7 py-3 rounded-full border
                    text-xl font-semibold
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#223946] text-[#ff8c78] border-[#ff8c78]/40 shadow-[0_0_15px_#ff715a]"
                        : "bg-[#1e3644] text-white border-[#2c3e47] hover:bg-[#243740] hover:border-[#ff8c78]/40 hover:text-[#ff8c78]"
                    }
                  `}
                >
                  <Icon className="text-base lg:text-lg" />
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden px-6 pb-6">
        <ul className="flex flex-wrap justify-center gap-3">
          {navItems.map((item) => {
            const isActive = location.pathname === `/${item.path}`;
            const Icon = item.icon;

            return (
              <li key={item.path} className="flex justify-center">
                <NavLink
                  to={`/${item.path}`}
                  onClick={() => {
                    setAnimateTitle(false);
                    setTimeout(() => setAnimateTitle(true), 50);
                  }}
                  className={`
                    flex items-center justify-center gap-2
                    px-4 py-2
                    rounded-xl lg:rounded-full
                    border
                    text-sm lg:text-base font-semibold
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#223946] text-[#ff8c78] border-[#ff8c78]/40 shadow-[0_0_15px_#ff715a]"
                        : "bg-[#1e3644] text-white border-[#2c3e47] hover:bg-[#243740] hover:border-[#ff8c78]/40 hover:text-[#ff8c78]"
                    }
                  `}
                >
                  <Icon className="text-base lg:text-lg" />
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
