export interface ArticleMeta {
  id: string;
  number: string;
  slug: string;
  filterKey: 'cybersecurity' | 'networking' | 'privacy' | 'mobile' | 'payments';
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
    relatedId: 'what-happens-when-you-install-an-apk',
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
  },
  {
    id: 'what-happens-when-you-install-an-apk',
    number: '04',
    slug: 'what-happens-when-you-install-an-apk',
    filterKey: 'mobile',
    featured: false,
    status: 'published',
    publishedAt: '2026-09-23',
    relatedId: 'how-your-message-reaches-another-phone',
    category: {
      ar: 'الهواتف / أندرويد',
      en: 'MOBILE / ANDROID'
    },
    title: {
      ar: 'ضغطت Install على APK… ماذا حدث داخل Android؟',
      en: 'You Pressed Install on an APK. What Actually Happens Inside Android?'
    },
    subtitle: {
      ar: 'عندما تضغط Install، Android لا يأخذ ملف الـAPK ويشغّله مباشرة.',
      en: 'Pressing Install does not mean Android immediately executes the APK.'
    },
    excerpt: {
      ar: 'ماذا يفعل Android بملف APK قبل أول تشغيل؟ من Manifest والتوقيع إلى UID وSandbox والصلاحيات وART.',
      en: 'What does Android do with an APK before the first launch? From the manifest and signing identity to UID isolation, permissions, the sandbox and ART.'
    },
    readingTime: {
      ar: '15 دقيقة قراءة',
      en: '15 min read'
    }
  },
  {
    id: 'how-your-message-reaches-another-phone',
    number: '05',
    slug: 'how-your-message-reaches-another-phone',
    filterKey: 'networking',
    featured: false,
    status: 'published',
    publishedAt: '2026-09-25',
    relatedId: 'how-contactless-payment-works',
    category: {
      ar: 'الشبكات / المراسلة',
      en: 'NETWORKING / MESSAGING'
    },
    title: {
      ar: 'ضغطت Send… كيف وصلت رسالتك إلى هاتف شخص آخر؟',
      en: 'You Pressed Send. How Did Your Message Reach Another Phone?'
    },
    subtitle: {
      ar: 'الرسالة لا تطير في الهواء مباشرة من هاتفك إلى هاتف صديقك. خلف كل فقاعة محادثة بنية تحتية موزعة، اتصالات مستمرة، طوابير تخزين، شبكات إشعار ومفاتيح تشفير.',
      en: 'A message does not fly directly from your phone to your friend\'s phone. Behind every chat bubble lies distributed routing, persistent connections, store-and-forward queues, push notifications, and cryptographic handshakes.'
    },
    excerpt: {
      ar: 'رحلة الرسالة الفورية خطوة بخطوة: من تشفير الحزمة والاتصال بالخادم، إلى معالجة البوابات وطوابير الانتظار، واستيقاظ الهاتف عبر الإشعارات وفك التشفير محليًا.',
      en: 'The step-by-step journey of an instant message: from serialization and transport security to edge gateways, store-and-forward queues, push notification wakeups, and local decryption.'
    },
    readingTime: {
      ar: '16 دقيقة قراءة',
      en: '16 min read'
    }
  },
  {
    id: 'how-contactless-payment-works',
    number: '06',
    slug: 'how-contactless-payment-works',
    filterKey: 'payments',
    featured: false,
    status: 'published',
    publishedAt: '2026-09-25',
    relatedId: 'session-hijacking',
    category: {
      ar: 'الأجهزة / المدفوعات',
      en: 'HARDWARE / PAYMENTS'
    },
    title: {
      ar: 'قرّبت بطاقتك من جهاز الدفع… كيف تمت العملية في ثوانٍ؟',
      en: 'You Tapped Your Card on a Payment Terminal. How Was the Payment Approved in Seconds?'
    },
    subtitle: {
      ar: 'بين ملامسة البطاقة للجهاز وسماع صوت التأكيد، دارت محادثة كهرومغناطيسية وتشفيرية قطعت آلاف الكيلومترات بين قارئ المتجر، شبكات البطاقات، وخوادم البنك المصدر.',
      en: 'Between the tap and the confirmation beep, an electromagnetic and cryptographic exchange crossed thousands of kilometers across merchant terminals, card switches, and bank authorization engines.'
    },
    excerpt: {
      ar: 'تفكيك شامل لعملية الدفع اللاتلامسي: من الحث الكهرومغناطيسي لـNFC وبروتوكول EMV، إلى توليد التشفير الديناميكي ARQC، ورسائل شبكات الدفع، وقرار البنك المصدر.',
      en: 'A technical teardown of contactless payment: from NFC inductive coupling and the EMV protocol to dynamic ARQC cryptograms, ISO message routing, and issuer bank authorization.'
    },
    readingTime: {
      ar: '15 دقيقة قراءة',
      en: '15 min read'
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
