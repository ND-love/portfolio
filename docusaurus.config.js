// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Портфолио Д.Р.',
  tagline: 'Кибербезопасность, CTF и исследования',
  favicon: 'img/favicon.ico',

  url: 'https://ND-love.github.io',
  baseUrl: '/portfolio/',

  organizationName: 'ND-love',
  projectName: 'portfolio',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  // ПОДКЛЮЧАЕМ ПОИСК
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "ru"], // Ищем и по-русски, и по-английски
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Портфолио Д.Р.',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro', 
            position: 'left',
            label: 'Мои Райтапы',
          },
          {
            href: 'https://github.com/ND-love/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // ЧИСТЫЙ ФУТЕР (Убрали все лишние ссылки)
      footer: {
        style: 'dark',
        links: [], // Пустой массив = нет ссылок
        copyright: `Copyright © ${new Date().getFullYear()} Портфолио Д.Р.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json', 'python', 'sql'],
      },
    }),
};

export default config;