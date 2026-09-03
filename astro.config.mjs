import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.ashara.sa',
  integrations: [
    starlight({
      title: 'دليل منصة عشرة',
      description: 'الدليل الشامل لاستخدام وإدارة منصة عشرة التعليمية',
      defaultLocale: 'ar',
      locales: {
        ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
        en: { label: 'English', lang: 'en', dir: 'ltr' },
        tr: { label: 'Türkçe', lang: 'tr', dir: 'ltr' },
      },
            head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
          },
        },
      ],
      sidebar: [
        {
          label: 'البداية والإعداد',
          items: [
            { slug: 'getting-started/preparing-institution' },
            { slug: 'getting-started/site-settings', label: 'الوصول لإعدادات المنصة' },
            { slug: 'getting-started/choosing-usage-model' },

           
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});