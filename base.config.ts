import { Config } from "@/types/_config";
import { getURL } from "@/utils/main";

// Base Configuration
const _config: Config = {
  year: "2024",
  // Author
  author: {
    name: "PromNET",
    url: "https://promnet.cloud/",
    socialAccounts: {
      email: "info@promnet.cloud",
      github: "https://github.com/csiber",
      discord: "https://discord.com/channels/917759709468037190/917759709468037193",
    },
  },
  // Metadata
  meta: {
    origin: "https://promark.promnet.cloud", // Site origin
    title: "PromARK Game Servers", // Site title
    description:
      "Welcome to PromARK Game Servers! We offer comprehensive ARK server hosting, ensuring all your favorite servers are just a click away. Enjoy stable, fast, and reliable gameplay with our top-tier services. Join us and elevate your ARK experience!", // Site description
    authors: {
      name: "PromNET", // Author's name
      url: "https://promnet.cloud/", // Author's URL
    },
    Image: { icon: "/favicon.ico", apple: "/favicon.png" }, // Icon images
    cardImage:
      "https://promark.promnet.cloud/img/screenshot/en-light-fullscreen.png", // Card image
    robots: "follow, index", // Robots meta tag content
    url: getURL(), // Site URL
  },
  // i18n Configuration
  i18n: {
    namespaces: [
      "translation", // Translation file namespaces
      "site", // Site-specific translation file namespaces
    ],
    defaultLocale: "en", // Default language
    locales: [
      "en", // English
      "hu", // Magyar
    ],
    path: "i18n", // Path to translation files
    localeConfigs: {
      en: {
        label: "English", // English label
        htmlLang: "en-US", // HTML lang attribute value
        path: "en", // Path
      },
      hu: {
        label: "Magyar", // Hungarian label
        htmlLang: "hu-HU", // HTML lang attribute value
        path: "hu", // Path
      },
    },
  },
  // Sitemap Configuration
  sitemap: {
    excludedDirs: [
      "error", // Directory for error pages
      "not-found", // Directory for 404 pages
    ],
  },
  navigation: {
    ui: {
      home_url: "/",
      logo: {
        url: "/brand/promnet/arklogo.png",
        url_dark: '/brand/promnet/arklogo.png',
        alt: "PromARK Logo",
      },
      label: "PromARK Game Servers",
      style: {
        bg: "none",
      },
    },
    contents: [
      {
        type: "one",
        label: "Home",
        url: "/",
      },
      {
        type: "one",
        label: "Discord",
        url: "https://discord.gg/QumXfEs5",
        target: "_blank",
      },
      {
        type: "one",
        label: "Hosting",
        url: "https://promnet.cloud",
        target: "_blank",
      },
    ],
  },
  footer: {
    ui: {
      label: "PromNET Hosting",
      logo: {
        url: "/brand/promnet/cloud.webp",
        alt: "PromNET Logo",
        css: "border overflow-hidden rounded-full shadow-sm",
      },
      style: {
        bg: "primary",
        dataBsTheme: "dark",
      },
    },
    contents: [


    ],
  },
};

// If you update the languages in i18n, you need to manually update the config in src/middleware.ts.
// (If the locales array in i18n is changed, you need to update the matcher section in middleware.ts)

export default _config;
