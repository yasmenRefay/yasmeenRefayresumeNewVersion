import React from "react";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket , FaShoppingCart  } from "react-icons/fa";
import { LuWebhook } from "react-icons/lu";

type ServiceItem = {
  icon: IconType;
  title: string;
  description: string;
};



function Service() {
  const { t } = useTranslation();

  const servicesData: ServiceItem[] = [
    {
      icon: FaCode,
      title: t("FrontendDevelopment"),
      description: t("FrontendDevelopmentDesc"),
    },
    {
      icon: FaPaintBrush,
      title: t("UIImplementation"),
      description: t("UIImplementationDesc"),
    },
    {
      icon: FaMobileAlt,
      title: t("ResponsiveDesign"),
      description:t("ResponsiveDesignDesc"),
    },
    {
      icon: FaRocket,
      title: t("PerformanceOptimization"),
      description:t("PerformanceOptimizationDesc"),
    },
    {
      icon: FaShoppingCart ,
      title: t("ECommerceSolutions"),
      description:t("ECommerceSolutionsDesc"),
    },
    {
      icon: LuWebhook ,
      title: t("APIIntegration"),
      description:t("APIIntegrationDesc"),
    },
  ];

  return (
    <div className="py-16">

      {/* Title */}
      <div className="text-center mb-12">

        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("Iprovidemodern")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {servicesData.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="
              group
              bg-[#1e3644]
              p-6
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
              cursor-pointer
              border border-[#2c3e47]
              "
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#223946] text-[#ff8c78] text-2xl mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 border border-[#ff8c78]/40
">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff715a] via-[#ffdb78] to-[#edff8a] bg-clip-text text-transparent mb-2">                
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;