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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Убрали ссылку "Edit this page"
        },
        // ОТКЛЮЧАЕМ БЛОГ ПОЛНОСТЬЮ
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
            // МАГИЯ ЗДЕСЬ:
            // Мы убрали жесткую ссылку 'to: ...'
            // Теперь Docusaurus САМ найдет первую страницу в меню и откроет её.
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Мои Райтапы',
          },
          // Ссылку на Блог удалили
          {
            href: 'https://github.com/ND-love/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              {
                label: 'Райтапы',
                // В футере тоже ссылаемся просто на docs, движок сам перенаправит
                to: '/docs/bandit/Level 00', 
              },
            ],
          },
          {
            title: 'Контакты',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ND-love',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Портфолио Д.Р. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json', 'python', 'sql'],
      },
    }),
};

export default config;