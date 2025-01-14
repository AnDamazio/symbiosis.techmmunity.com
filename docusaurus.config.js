const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Techmmunity Symbiosis",
  tagline: "The Ultimate OM For All Databases",
  url: "https://symbiosis.techmmunity.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "techmmunity", // Usually your GitHub org/user name.
  projectName: "symbiosis", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Symbiosis",
      logo: {
        alt: "Symbiosis",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/techmmunity/symbiosis",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/TakYksUzzZ",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/techmmunity/symbiosis",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Techmmunity, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'contributors',
      content:
        'We need contributors, please <a href="/docs/contributing/first-steps">help us!</a>',
      backgroundColor: 'rgb(15, 211, 211)',
      textColor: '#101920',
      isCloseable: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
  },
};
