export const SITE_CONFIG = {
  name: 'Mouhib Writeups',
  shortName: 'MW',
  url: (process.env.SITE_URL || 'https://writeups.mouhibmahadbi.online').replace(/\/$/, ''),
  author: {
    name: 'Mouhib MH',
    bio: {
      ar: 'أهتم بالأمن السيبراني، الشبكات، Linux، الخصوصية وبناء المشاريع التقنية. أوثّق ما أتعلمه وأجرّبه وأشرح كيف تعمل الأنظمة فعليًا.',
      en: 'Interested in cybersecurity, networking, Linux, privacy and building technical projects. I document what I learn and experiment with, with a focus on how systems actually work.'
    }
  },
  tagline: {
    ar: 'ملاحظات تقنية حول الأمن، الشبكات والأنظمة.',
    en: 'Technical notes on security, networks and systems.'
  },
  category: {
    ar: 'الأمن السيبراني / أمن الويب',
    en: 'Cybersecurity / Web Security'
  },
  themeColor: '#FAF8F2',
  defaultOgImage: '/assets/og/og-cover.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630
};

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withTrailingSlash = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  return `${SITE_CONFIG.url}${withTrailingSlash}`;
}
