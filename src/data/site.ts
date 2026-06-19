// ============================================================
// SITE DATA — edit this file to configure a new client's web
// ============================================================
// All components read from here. Changing this file is 90% of
// the work when starting a new project from this template.

export const site = {
  // ── Basic identity ────────────────────────────────────────
  name: 'Reformas García',
  tagline: 'Tu hogar, renovado con garantía',
  sector: 'reformas',       // e.g. clinica | abogados | restaurante | academia
  city: 'Madrid',
  foundedYear: 2008,

  // ── Descriptions ─────────────────────────────────────────
  descriptionShort:
    'Empresa de reformas integrales en Madrid con más de 15 años de experiencia.',
  descriptionLong:
    'Reformas García es una empresa familiar especializada en reformas integrales, ' +
    'baños, cocinas y pintura en Madrid y alrededores. Trabajamos con materiales de ' +
    'primera calidad y contamos con un equipo de profesionales certificados. ' +
    'Cada proyecto es único; por eso ofrecemos presupuesto gratuito y seguimiento ' +
    'personalizado desde el primer día hasta la entrega final.',

  // ── Contact ───────────────────────────────────────────────
  phone: '+34 600 123 456',
  phoneFormatted: '600 123 456',
  email: 'info@reformasgarcia.es',
  whatsapp: '+34600123456',           // no spaces, used for wa.me link
  whatsappMessage: 'Hola, me gustaría solicitar un presupuesto.',

  address: {
    street: 'Calle Gran Vía, 28',
    zip: '28013',
    city: 'Madrid',
    province: 'Madrid',
    country: 'España',
    mapsUrl: 'https://maps.google.com/?q=Gran+Via+28+Madrid',
  },

  schedule: {
    weekdays: 'Lunes a Viernes: 8:00 – 19:00',
    saturday: 'Sábados: 9:00 – 14:00',
    sunday: 'Domingos: Cerrado',
  },

  // ── Social media ──────────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/reformasgarcia',
    instagram: 'https://instagram.com/reformasgarcia',
    linkedin: '',
    twitter: '',
    youtube: '',
    tiktok: '',
  },

  // ── SEO defaults (overridable per page) ───────────────────
  seo: {
    titleTemplate: '%s | Reformas García Madrid',
    defaultTitle: 'Reformas García Madrid — Reformas Integrales con Garantía',
    defaultDescription:
      'Empresa de reformas integrales en Madrid. Baños, cocinas, pintura y más. +15 años de experiencia. Presupuesto gratuito.',
    defaultImage: '/images/og-default.svg',   // Replace with 1200×630 JPG for production
    locale: 'es_ES',
    twitterHandle: '',
  },

  // ── Images ────────────────────────────────────────────────
  images: {
    hero: '/images/hero.svg',
    heroAlt: 'Reformas integrales en Madrid — Reformas García',
    og: '/images/og-default.svg',
  },

  // ── Contact form ──────────────────────────────────────────
  // mode: 'demo' | 'formspree' | 'endpoint'
  // formspree: set formspreeId from https://formspree.io
  // endpoint: set customEndpoint to your API URL
  form: {
    mode: 'demo' as 'demo' | 'formspree' | 'endpoint',
    formspreeId: '',
    customEndpoint: '',
    subject: 'Nueva solicitud desde la web',
  },

  // ── Visual config ─────────────────────────────────────────
  // Reflected as CSS custom properties in global.css.
  // Values here act as the source of truth; global.css reads them at build time
  // via a simple mapping. For dynamic theming keep it here; for static theming
  // you can also just edit :root in global.css directly.
  colors: {
    primary: '#1a56db',       // main brand color (buttons, links, accents)
    primaryDark: '#1e429f',   // hover / darker variant
    primaryLight: '#ebf5ff',  // tinted backgrounds
    accent: '#f97316',        // contrast CTA color
    accentDark: '#c2410c',
    neutral: '#374151',       // body text
    neutralLight: '#6b7280',  // secondary text
    surface: '#ffffff',       // card / section backgrounds
    bg: '#f9fafb',            // page background
    border: '#e5e7eb',
  },

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      slug: 'reformas-integrales',
      title: 'Reformas Integrales',
      summary: 'Transformamos cualquier espacio de tu hogar o local comercial de principio a fin.',
      description:
        'Gestionamos toda la reforma: albañilería, fontanería, electricidad, revestimientos y acabados. Un único interlocutor para todo el proyecto.',
      icon: '🏠',
      featured: true,
    },
    {
      slug: 'reformas-banos',
      title: 'Reforma de Baños',
      summary: 'Renovamos tu baño con calidad y en el plazo acordado.',
      description:
        'Cambio completo de sanitarios, alicatado, suelo, muebles y fontanería. Baños modernos, funcionales y con garantía.',
      icon: '🚿',
      featured: true,
    },
    {
      slug: 'reformas-cocinas',
      title: 'Reforma de Cocinas',
      summary: 'Cocinas a medida adaptadas a tu espacio y presupuesto.',
      description:
        'Instalación de muebles de cocina, encimeras, electrodomésticos, fontanería y revestimientos. Diseño incluido.',
      icon: '🍳',
      featured: true,
    },
    {
      slug: 'pintura',
      title: 'Pintura y Acabados',
      summary: 'Pintura interior y exterior con materiales de primera.',
      description:
        'Pintamos pisos, locales y fachadas. Usamos pinturas antihumedad, térmicas y decorativas. Preparación de superficies incluida.',
      icon: '🖌️',
      featured: false,
    },
    {
      slug: 'suelos',
      title: 'Suelos y Pavimentos',
      summary: 'Instalación de todo tipo de suelos: tarima, porcelánico, microcemento.',
      description:
        'Colocación y pulido de suelos de madera, gres, porcelánico, microcemento y vinílico. Presupuesto sin compromiso.',
      icon: '🪵',
      featured: false,
    },
    {
      slug: 'obras-menores',
      title: 'Obras Menores',
      summary: 'Pequeñas reparaciones, tabiques, pladur y más.',
      description:
        'Demoliciones parciales, tabiques de pladur, arreglos de goteras, impermeabilización, arreglos varios. Rápidos y económicos.',
      icon: '🔧',
      featured: false,
    },
  ],

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      name: 'Carmen López',
      location: 'Vallecas, Madrid',
      rating: 5,
      text: 'Reformaron mi cocina completa en solo 10 días. El equipo fue muy limpio y puntual. El resultado es increíble, totalmente recomendable.',
      service: 'Reforma de cocina',
    },
    {
      name: 'Javier Moreno',
      location: 'Getafe, Madrid',
      rating: 5,
      text: 'Llevaban años aplazando la reforma del baño. García y su equipo lo hicieron en una semana. Precio justo y sin sorpresas.',
      service: 'Reforma de baño',
    },
    {
      name: 'Lucía Fernández',
      location: 'Alcobendas, Madrid',
      rating: 5,
      text: 'Reforma integral del piso. Muy profesionales, cumplieron plazos y presupuesto. El piso quedó como nuevo. Muy contentos.',
      service: 'Reforma integral',
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      question: '¿Dáis presupuesto gratuito?',
      answer:
        'Sí. Visitamos la obra sin compromiso y entregamos presupuesto detallado en 48 horas.',
    },
    {
      question: '¿Cuánto tarda una reforma de baño?',
      answer:
        'Un baño estándar se reforma en 5–8 días laborables. Los plazos exactos dependen del estado previo y los materiales elegidos.',
    },
    {
      question: '¿Trabajáis en toda la Comunidad de Madrid?',
      answer:
        'Sí. Cubrimos Madrid capital y toda la Comunidad. Para proyectos fuera de Madrid, consúltanos.',
    },
    {
      question: '¿Qué garantía tienen las obras?',
      answer:
        'Ofrecemos 2 años de garantía en mano de obra y trasladamos la garantía de los materiales del fabricante.',
    },
    {
      question: '¿Puedo ver trabajos realizados?',
      answer:
        'Claro. Tenemos portfolio en nuestra web e Instagram. También podemos organizar visitas a obras anteriores si el cliente lo permite.',
    },
    {
      question: '¿Hacéis factura?',
      answer:
        'Siempre. Somos empresa registrada y todas nuestras obras llevan factura con IVA.',
    },
  ],

  // ── CTAs ──────────────────────────────────────────────────
  cta: {
    primary: {
      text: 'Pedir presupuesto gratuito',
      href: '/contacto',
    },
    secondary: {
      text: 'Ver nuestros servicios',
      href: '/servicios',
    },
    whatsapp: {
      text: 'Escríbenos por WhatsApp',
    },
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    headline: '15 años reformando hogares en Madrid',
    body: [
      'Reformas García nació en 2008 como un pequeño taller familiar. Hoy somos un equipo de 12 profesionales especializados en distintas áreas: albañilería, fontanería, electricidad y diseño de interiores.',
      'Nuestro compromiso es simple: cumplir plazos, respetar el presupuesto y entregar cada obra con el nivel de calidad que merece tu hogar.',
      'Contamos con seguro de responsabilidad civil, todos nuestros trabajadores están dados de alta y usamos materiales con certificación europea.',
    ],
    stats: [
      { value: '+500', label: 'Reformas completadas' },
      { value: '15', label: 'Años de experiencia' },
      { value: '12', label: 'Profesionales en plantilla' },
      { value: '4.9★', label: 'Valoración media' },
    ],
  },

  // ── Legal ─────────────────────────────────────────────────
  legal: {
    companyName: 'Reformas García S.L.',
    cif: 'B-12345678',
    registeredAddress: 'Calle Gran Vía, 28, 28013 Madrid',
    registryInfo: 'Inscrita en el Registro Mercantil de Madrid, Tomo 12345, Folio 67, Hoja M-123456.',
  },
} as const;

export type SiteData = typeof site;
