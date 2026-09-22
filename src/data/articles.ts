export interface ArticleMeta {
  id: string;
  number: string;
  slug: string;
  filterKey: 'cybersecurity' | 'networking' | 'privacy';
  featured?: boolean;
  status: 'published' | 'draft';
  publishedAt: string;
  relatedId: string;
  category: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  readingTime: {
    ar: string;
    en: string;
  };
}

export const ARTICLES: ArticleMeta[] = [
  {
    id: 'session-hijacking',
    number: '01',
    slug: 'session-hijacking',
    filterKey: 'cybersecurity',
    featured: false,
    status: 'published',
    publishedAt: '2026-09-22',
    relatedId: 'what-happens-when-you-type-a-domain',
    category: {
      ar: 'الأمن السيبراني / أمن الويب',
      en: 'CYBERSECURITY / WEB SECURITY'
    },
    title: {
      ar: 'كيف تُسرق جلسة تسجيل الدخول بدون سرقة كلمة السر؟',
      en: 'How Can a Session Be Stolen Without Stealing the Password?'
    },
    subtitle: {
      ar: 'أحيانًا المهاجم لا يحتاج كلمة السر أصلًا. يكفيه الشيء الذي يثبت أنك سجّلت الدخول بالفعل.',
      en: 'Sometimes the attacker does not need the password. They only need the token proving you already authenticated.'
    },
    excerpt: {
      ar: 'شرح عملي لكيفية عمل Session Cookies، ولماذا يؤدي تسريب معرّف الجلسة إلى الدخول للحساب مباشرة بدون الحاجة لكلمة المرور.',
      en: 'A practical look at how session cookies work, why session tokens are targeted, and how a valid token lets someone into an account without the password.'
    },
    readingTime: {
      ar: '12 دقيقة قراءة',
      en: '12 min read'
    }
  },
  {
    id: 'what-happens-when-you-type-a-domain',
    number: '02',
    slug: 'what-happens-when-you-type-a-domain',
    filterKey: 'networking',
    featured: false,
    status: 'published',
    publishedAt: '2026-09-22',
    relatedId: 'what-a-vpn-actually-does',
    category: {
      ar: 'الشبكات / بروتوكولات الويب',
      en: 'NETWORKING / WEB'
    },
    title: {
      ar: 'كتبت اسم موقع وضغطت Enter… ماذا حدث فعلًا؟',
      en: 'You Typed a Domain and Pressed Enter. What Actually Happened?'
    },
    subtitle: {
      ar: 'بين كتابة اسم الموقع وظهور أول pixel، مرّت البيانات عبر عدة مراحل تقنية في جهازك والشبكة.',
      en: 'Between typing the domain and seeing the first pixel, your request crossed several layers across your machine and the network.'
    },
    excerpt: {
      ar: 'شرح خطوة بخطوة لما يحدث خلف الكواليس: من الذاكرة المحلية وDNS وبوابة الراوتر إلى مصافحات TCP/TLS والـHTTP وعرض الصفحة في المتصفح.',
      en: 'A step-by-step walkthrough of what happens under the hood: from local cache, DNS and the gateway MAC to TCP/TLS handshakes, HTTP requests and browser rendering.'
    },
    readingTime: {
      ar: '16 دقيقة قراءة',
      en: '16 min read'
    }
  },
  {
    id: 'what-a-vpn-actually-does',
    number: '03',
    slug: 'what-a-vpn-actually-does',
    filterKey: 'privacy',
    featured: true,
    status: 'published',
    publishedAt: '2026-09-22',
    relatedId: 'session-hijacking',
    category: {
      ar: 'الشبكات / الخصوصية',
      en: 'NETWORKING / PRIVACY'
    },
    title: {
      ar: 'الـVPN لا يجعلك مختفيًا… هو فقط يغيّر من يرى ماذا',
      en: 'A VPN Does Not Make You Invisible. It Changes Who Can See What.'
    },
    subtitle: {
      ar: 'الـVPN لا يحذف الثقة. هو فقط ينقلها.',
      en: 'A VPN does not eliminate trust. It relocates it.'
    },
    excerpt: {
      ar: 'شرح مباشر وهادئ لما يفعله نفق الـVPN فعليًا: ما يراه مزود الإنترنت، ما يراه مزود الـVPN، متى تحدث تسريبات DNS، ولماذا لا يعتبر الـVPN بديلاً عن HTTPS أو مانعًا للتتبع.',
      en: 'A clear look at what an encrypted tunnel actually does: what your ISP sees, what the VPN provider can see, how DNS leaks happen, and why a VPN is not a replacement for HTTPS.'
    },
    readingTime: {
      ar: '14 دقيقة قراءة',
      en: '14 min read'
    }
  }
];

export function getPublishedArticles(): ArticleMeta[] {
  return ARTICLES.filter(a => a.status === 'published');
}

export function getFeaturedArticle(): ArticleMeta {
  const featured = ARTICLES.find(a => a.featured && a.status === 'published');
  return featured || ARTICLES[ARTICLES.length - 1];
}

export function getArticleById(id: string): ArticleMeta | undefined {
  return ARTICLES.find(a => a.id === id);
}

export function getRelatedArticle(currentId: string): ArticleMeta | undefined {
  const current = getArticleById(currentId);
  if (!current) return undefined;
  return getArticleById(current.relatedId);
}
