import { FaCode } from "react-icons/fa";
import sapetrolImg from "../assets/img/sapetrol1.png";
import todoAppIonic from "../assets/img/todo app ionic.png";
import Quotes from "../assets/img/quets.png";
import login from "../assets/img/login.png";
import weather from "../assets/img/weather.png";
import Games from "../assets/img/games.png";
import Party from "../assets/img/party.png";
import Recipes from "../assets/img/Recipes.png";
import Routing from "../assets/img/Routing.png";
import FreshMarket from "../assets/img/Freshcart.png";
import GoldenDeveloper from "../assets/img/Golden Developer1.png";
import ServiceNow from "../assets/img/ServiceNow.jpeg";
import bogProjectImg from "../assets/img/BOG.jpeg";
import lmsProjectImg from "../assets/img/LMS.jpeg";
import PortfolioImg from "../assets/img/PortflioV1.png";
import type { Project } from "../types/project";



export const projects: Project[] = [
  
  {
    title: "BOG Project",
    shortDesc:
      "BOGProjectDesc",
    icon: FaCode,
    img: bogProjectImg, 
    technologies: ["React", "TypeScript", "Redux", "JavaScript (ES6+", "Bootstrap 5", "REST APIs", "Git"],

    details: {
      overview:
        "BOGProjectDetail",

      techStack: {
        frontend: ["React", "TypeScript", "Bootstrap 5"],
        state: ["Redux"],
        api: ["Axios", "REST APIs"],
        versionControl: ["Git"],
      },

      keyFeatures: [
        "CentralizedState",
        "HighPerformance",
        "ProperError",
        "MaintainableAndScalable",
      ],

      achievements: [
        "ImplementedScalable",
        "EnhancedUI",
        "SeamlessAPI",
        "DeliveredProduction",
      ],
    },

    demoLink: "", 
    linkRepo: "", 
    hasDemo: false, 
  },

  {
    title: "LMS (E-Learning Platform)",
    shortDesc:
      "ELearningDesc",
    icon: FaCode,
    img: lmsProjectImg, 
    technologies: ["React", "Redux", "JavaScript", "ESLint", "Tailwind CSS", "Shadcn/ui", "Iconsax React", "REST APIs", "Slack", "Jira"],

    details: {
      overview:
        "ELearningOverview",

      techStack: {
        frontend: ["React", "Tailwind CSS", "Shadcn/ui", "Iconsax React"],
        state: ["Redux"],
        codeQuality: ["ESLint"],
        collaboration: ["Slack", "Jira"],
        api: ["REST APIs"],
      },

      keyFeatures: [
        "InstructorAndAdminDashboards",
        "QuizzesCreation",
        "LearnerPages",
        "AuthenticationSystem",
        "AuthenticationSystem",
        "HighCode",
      ],

      achievements: [
        "BuiltFull",
        "IntegratedState",
        "Ensured",
        "CollaboratedEffectively",
        "DeliveredResponsive",
      ],
    },

    demoLink: "",
    linkRepo: "", 
    hasDemo: false,
  },

  {
      title: "NCVC - Enterprise Service Porta",
      shortDesc: "NCVCDesc",
      icon: FaCode,
      img: ServiceNow,
      technologies: ["ServiceNow", "JavaScript", "AngularJS", "REST APIs", "HTML", "CSS"],
      demoLink: "",
      hasDemo: false,
      details: {
          overview:
        "NCVCOverView",

          techStack: {
              platform: ["ServiceNow Service Portal", "App Engine Studio"],
              frontend: ["AngularJS", "HTML5", "CSS3", "Bootstrap"],
              backend: ["Glide API", "Script Includes", "Business Rules"],
              automation: ["Flow Designer", "Workflow Automation"],
              integrations: ["REST APIs", "External Systems Integration"],
              tools: ["Git", "Jira", "VS Code"],
          },

          keyFeatures: [
          "NCVCFeature1",
          "NCVCFeature2",
          "NCVCFeature3",
          "NCVCFeature4",
          "NCVCFeature5",
          "NCVCFeature6",
          
          ],

          achievements: [
          "NCVCAchievement1",
          "NCVCAchievement2",
          "NCVCAchievement3",
          "NCVCAchievement4",
          ],
      }
  },

  {
    title: "Golden Developers Ticket Booking Platform",
    shortDesc: "GoldenTicketDesc",
    icon: FaCode,
    img: GoldenDeveloper,
    technologies: ["HTML5", "CSS3", "Bootstrap5"],

    details: {
      overview:
        "GoldenTicketOverView",

      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5"],
        ui: ["Responsive Layouts", "Pixel-Perfect Design", "Cross-Browser Compatibility"],
      },

      keyFeatures: [
        "GoldenTicketFeature1",
        "GoldenTicketFeature2",
        "GoldenTicketFeature3",
        "GoldenTicketFeature4",
        "GoldenTicketFeature5",
        "GoldenTicketFeature6",
      
      ],

      achievements: [
        "GoldenTicketAchievement1",
        "GoldenTicketAchievement2",
        "GoldenTicketAchievement3",
        "GoldenTicketAchievement4",
        
      ],
    },

    demoLink: "",
    hasDemo: false,
    linkRepo: "",
  },

  {
      title: "FreshMarket",
      shortDesc:
        "FreshMarketDesc",
      icon: FaCode ,
      img: FreshMarket,
      technologies: ["Angular 17", "TypeScript", "Bootstrap5"],
      demoLink: "https://e-commerce-eta-six-36.vercel.app",
      linkRepo: 'https://github.com/yasmenRefay/e-commerce',
      hasDemo: true,
      details: {
          overview:
              "FreshMarketOverView" ,
          techStack: {
              frontend: ["Angular 17", "TypeScript" , "HTML5" , "CSS3" , "Bootstrap5"],
              ui: [
                  "Authentication",
                  "Categories",
                  "Brands",
                  "Make Order",
                  "WishList",
                  "Address Management",
                  "Product Filtering",
              ],

          },

          keyFeatures: [
              "FreshMarketFeature1",
              "FreshMarketFeature2",
              "FreshMarketFeature3",
              "FreshMarketFeature4",
              "FreshMarketFeature5",
              "FreshMarketFeature6",
              "FreshMarketFeature7",
              "FreshMarketFeature8",
              "FreshMarketFeature9",
              "FreshMarketFeature10",
              
          ],

          achievements: [
              "FreshMarketAchievement1",
              "FreshMarketAchievement2",
              "FreshMarketAchievement3",
              "FreshMarketAchievement4",
          ],
      }
  },

  {
      title: "My Portfolio - Version One",
      shortDesc:
        "MyPortfolioDesc",
      icon: FaCode,
      img: PortfolioImg,
      technologies: ["Angular 17", "TypeScript", "Bootstrap 5", "SCSS", "Routing"],

      details: {
        overview:
          "MyPortfolioOverView",
        techStack: {
          frontend: ["Angular 17", "TypeScript", "Bootstrap 5", "SCSS"],
          routing: ["Angular Routing"],
          state: [],
          api: [],
          versionControl: [],
        },

        keyFeatures: [
          "MyPortfolioFeature1",
          "MyPortfolioFeature2",
          "MyPortfolioFeature3",
          "MyPortfolioFeature4",
          "MyPortfolioFeature5",
          
        ],

        achievements: [
          "MyPortfolioAchievement1",
          "MyPortfolioAchievement2",
          "MyPortfolioAchievement3",
          "MyPortfolioAchievement4",
        
        ],
      },

      demoLink: "https://yasmeen-refayresume.vercel.app/home", 
      linkRepo: "https://github.com/yasmenRefay/yasmeenRefayresume",  
      hasDemo: true, 
  },

  {
    title: "Routing",
    shortDesc: "RoutingDesc",
    icon: FaCode,
    img: Routing,
    technologies: ["Angular 17", "TypeScript", "HTML5", "CSS3", "Bootstrap5"],
    demoLink: "https://routing-black.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/routing",
    hasDemo: true,
    details: {
      overview:
        "RoutingOverView",

      techStack: {
          frontend: ["Angular 17", "TypeScript", "HTML5", "CSS3", "Bootstrap5"],
          ui: ["Responsive Layout", "Navigation Bar", "Structured Pages"],
      },


      keyFeatures: [
        "RoutingFeature1",
        "RoutingFeature2",
        "RoutingFeature3",
        "RoutingFeature4",
        "RoutingFeature5",
        "RoutingFeature6",
        
      ],

      achievements: [
        "RoutingAchievement1",
        "RoutingAchievement2",
        "RoutingAchievement3",
        "RoutingAchievement4",
        
      ],
    },
  },

  {
    title: "Yummy Recipes",
    shortDesc: "YummyRecipesDesc",
    icon: FaCode,
    img: Recipes,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript", "jQuery"],

    details: {
      overview:
          "YummyRecipesOverView",
      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript", "jQuery"],
        ui: ["API Integration", "Dynamic Modals", "Search System", "Input Validation"],
      },

      keyFeatures: [
        "YummyRecipesFeature1",
        "YummyRecipesFeature2",
        "YummyRecipesFeature3",
        "YummyRecipesFeature4",
        "YummyRecipesFeature5",
        "YummyRecipesFeature6",
        "YummyRecipesFeature7",
        
      ],

      achievements: [
        "YummyRecipesAchievement1",
        "YummyRecipesAchievement2",
        "YummyRecipesAchievement3",
        "YummyRecipesAchievement4",
        
      ],
    },

    demoLink: "https://meals-app-lyart-two.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/meals-App",
    hasDemo: true,
  },

  {
    title: "Egyptian Party",
    shortDesc: "EgyptianPartyDesc",
    icon: FaCode,
    img: Party,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript", "jQuery"],

    details: {
      overview:
        "EgyptianPartyOverView",

      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript", "jQuery"],
        ui: ["jQuery Animations", "Countdown Timer", "Form Validation", "Interactive Sections"],
      },

      keyFeatures: [
        "EgyptianPartyFeature1",
        "EgyptianPartyFeature2",
        "EgyptianPartyFeature3",
        "EgyptianPartyFeature4",
        "EgyptianPartyFeature5",
        "EgyptianPartyFeature6",
        "EgyptianPartyFeature7",
        
      ],

      achievements: [
        "EgyptianPartyAchievement1",
        "EgyptianPartyAchievement2",
        "EgyptianPartyAchievement3",
        "EgyptianPartyAchievement4",
        
      ],
    },

    demoLink: "https://event-time-teal.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/event-time",
    hasDemo: true,
  },

  {
    title: "Games Site",
    shortDesc: "GamesSiteDesc",
    icon: FaCode,
    img: Games,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],

    details: {
      overview:
        "GamesSiteOverView",
      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],
        ui: ["Search System", "Animated UI", "Responsive Layout"],
      },

      keyFeatures: [
        "WeatherLiveFeature1",
        "WeatherLiveFeature2",
        "WeatherLiveFeature3",
        "WeatherLiveFeature4",
        "WeatherLiveFeature5",
      
      ],

      achievements: [
        "GamesSiteAchievement1",
        "GamesSiteAchievement2",
        "GamesSiteAchievement3",
        "GamesSiteAchievement4",
        
      ],
    },

    demoLink: "https://games-site-three.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/games-site",
    hasDemo: true,
  },

  {
    title: "Weather Live",
    shortDesc: "WeatherLiveDesc",
    icon: FaCode,
    img: weather,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],

    details: {
      overview:
        "WeatherLiveOverView",

      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],
        ui: ["API Integration", "Search System", "Dynamic Data Rendering"],
      },

      keyFeatures: [
        "WeatherLiveFeature1",
        "WeatherLiveFeature2",
        "WeatherLiveFeature3",
        "WeatherLiveFeature4",
        "WeatherLiveFeature5",
        
      ],

      achievements: [
        "WeatherLiveAchievement1",
        "WeatherLiveAchievement2",
        "WeatherLiveAchievement3",
        "WeatherLiveAchievement4",
        
      ],
    },

    demoLink: "https://weather-rose-nine.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/weather",
    hasDemo: true,
  },

  {
    title: "Smart Login System",
    shortDesc: "SmartLoginDesc",
    icon: FaCode,
    img: login,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],

    details: {
      overview:
        "SmartLoginOverView",

      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],
        forms: ["Form Validation", "Regular Expressions", "Error Handling"],
        ui: ["Authentication UI", "Interactive Inputs"],
      },

      keyFeatures: [
        "SmartLoginFeature1",
        "SmartLoginFeature2",
        "SmartLoginFeature3",
        "SmartLoginFeature4",
        "SmartLoginFeature5",
        
      ],

      achievements: [
        "SmartLoginAchievement1",
        "SmartLoginAchievement2",
        "SmartLoginAchievement3",
        "SmartLoginAchievement4",
        
      ],
    },

    demoLink: "https://smart-login-tau.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/smart-login",
    hasDemo: true,
  },

  {
    title: "Quote Generator",
    shortDesc: "QuoteGeneratorDesc",
    icon: FaCode,
    img: Quotes,
    technologies: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],

    details: {
      overview:
        "QuoteGeneratorOverView",

      techStack: {
        frontend: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],
        ui: ["Random Generator", "Dynamic Content", "DOM Manipulation"],
      },

      keyFeatures: [
        "QuoteGeneratorFeature1",
        "QuoteGeneratorFeature2",
        "QuoteGeneratorFeature3",
        "QuoteGeneratorFeature4",
        
      ],

      achievements: [
        "QuoteGeneratorAchievement1",
        "QuoteGeneratorAchievement2",
        "QuoteGeneratorAchievement3",
        "QuoteGeneratorAchievement4",
      
      ],
    },

    demoLink: "https://quotes-orcin.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/Quotes",
    hasDemo: true,
  },

  {
    title: "Ionic To-Do Application",
    shortDesc: "IonicTodoDesc",
    icon: FaCode,
    img: todoAppIonic,
    technologies: ["Ionic", "Angular", "TypeScript"],

    details: {
      overview:
        "IonicTodoOverView",
      techStack: {
        frontend: ["Ionic Angular", "TypeScript"],
        forms: ["Reactive Forms", "Validation"],
        ui: ["Navigation System", "User Alerts", "Interactive Components"],
      },

      keyFeatures: [
        "IonicTodoFeature1",
        "IonicTodoFeature2",
        "IonicTodoFeature3",
        "IonicTodoFeature4",
        "IonicTodoFeature5",
        "IonicTodoFeature6",
      
      ],

      achievements: [
        "IonicTodoAchievement1",
        "IonicTodoAchievement2",
        "IonicTodoAchievement3",
        "IonicTodoAchievement4",
        
      ],
    },

    demoLink: "https://todo-app-ionic-orcin.vercel.app",
    linkRepo: "https://github.com/yasmenRefay/todo-app-ionic",
    hasDemo: true,
  },

  {
    title: "Sapetrol Mobile Application",
    shortDesc: "SapetrolDesc",
    icon: FaCode,
    img: sapetrolImg,
    technologies: ["Ionic", "React", "TypeScript"],

    details: {
      overview:
        "SapetrolOverView"  ,
      techStack: {
        frontend: ["Ionic React", "TypeScript"],
        backend: ["API Integration"],
        ui: ["Admin Dashboard", "Authentication", "Multi-Page Navigation", "Media Uploads"],
      },

      keyFeatures: [
        "SapetrolFeature1",
        "SapetrolFeature2",
        "SapetrolFeature3",
        "SapetrolFeature4",
        "SapetrolFeature5",
        "SapetrolFeature6",
        "SapetrolFeature7",
        "SapetrolFeature8",
      
      ],

      achievements: [
        "SapetrolAchievement1",
        "SapetrolAchievement2",
        "SapetrolAchievement3",
        "SapetrolAchievement4",
        
      ],
    },

    demoLink: "",
    linkRepo: "",
    hasDemo: false,

  },
  
];