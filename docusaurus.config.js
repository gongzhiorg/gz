/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '公知录',
  tagline: '互联网是有记忆的',
  url: 'https://gongzhi.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GongZhi.org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '公知录',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '名单',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '友情链接',
          items: [
            {
              label: '公知录 - 互联网是有记忆的',
              href: 'https://gongzhi.org',
            },
          ],
        },
        {
          title: '联系方式',
          items: [
            {
              label: 'Email',
              href: 'mailto:hello@gongzhi.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GongZhi.org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gongzhiorg/gz/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
		/*
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
		*/
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
