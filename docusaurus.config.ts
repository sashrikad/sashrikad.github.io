import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '👋 Hello, I am Sashrika',
  tagline: 'Making cool inventions!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sashrikad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sashrikad', // Usually your GitHub org/user name.
  projectName: 'sashrikad.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins:[
    'plugin-image-zoom'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Iamsashrika',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        {to: '/achievements', label: 'Achievements', position: 'left'},
        {to: '/art-blog', label: 'Art Blog', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.hackster.io/sashrikad',
          label: 'Hackster',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Community',
          items: [
            {
              label: 'Hackster',
              href: 'https://www.hackster.io/sashrikad',
            },
            {
              label: 'Github',
              href: 'https://github.com/sashrikad',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCnBiDeQRr8I__a4olGiSXmQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sashrikad',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iamsashrika.link, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.container img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: 'rgb(24 25 26 / 80%)',
        scrollOffset: 0
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
