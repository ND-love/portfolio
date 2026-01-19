// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Портфолио Д.Р.',
  tagline: 'Кибербезопасность, CTF и исследования',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ND-love.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/portfolio/',

  // GitHub pages deployment config.
  organizationName: 'ND-love', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  // Игнорируем битые ссылки (чтобы сборка не падала из-за мелочей)
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Ставим русский язык основным
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
          // Убрали editUrl, чтобы не было ссылки "Редактировать эту страницу"
        },
        blog: {
          showReadingTime: true,
          // Убрали editUrl
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // По умолчанию темная тема
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
            // Главная ссылка на твои райтапы
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Мои Райтапы',
            // Ссылка ведет сразу на первый уровень Bandit (проверь, что файл так называется)
            // Если будет 404, поменяй на '/docs/'
            to: '/docs/bandit/Level 00', 
          },
          {to: '/blog', label: 'Блог', position: 'left'},
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
                to: '/docs/bandit/Level 00',
              },
              {
                label: 'Блог',
                to: '/blog',
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
        // Добавляем языки, нужные хакеру
        additionalLanguages: ['bash', 'diff', 'json', 'python', 'sql'],
      },
    }),
};

export default config;