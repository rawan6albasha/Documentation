import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.ashara.sa',
  integrations: [
    starlight({
      title: '',
      description: 'الدليل الشامل لاستخدام وإدارة منصة عشرة التعليمية',
      logo: {
        light: './src/assets/images/home_logolight_file10-logo0svg.svg',
        dark: './src/assets/images/home_logo_file10-logo-w0svg.svg',
        alt: 'لوغو منصة عشرة',
      },
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
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap',
          },
        },
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
     { slug: 'getting-started/choosing-usage-model-preparing-institution-before-launch', label: 'اختيار نموذج الاستخدام وإعداد المؤسسة قبل الإطلاق' },
    ],
  },
],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});