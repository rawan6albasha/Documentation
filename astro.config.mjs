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
    label: 'التجهيز والإعدادات',
    items: [
      { slug: 'getting-started/indexv1', label: 'نموذج أولي للفهرس' },
     { slug: 'getting-started/currenciescountriescities', label: 'العملات والدول والمدن' },
    ],
  },
],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});