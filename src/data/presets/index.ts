// ============================================================
// SECTOR PRESETS
// Usage: copy the desired preset into site.ts and fill in
//        client-specific data (name, phone, email, etc.)
// ============================================================

export type Preset = {
  sector: string;
  tagline: string;
  whatsappMessage: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
    whatsapp: { text: string };
  };
  services: Array<{
    slug: string;
    title: string;
    summary: string;
    description: string;
    icon: string;
    featured: boolean;
  }>;
  faq: Array<{ question: string; answer: string }>;
  about: {
    headline: string;
    body: string[];
    stats: Array<{ value: string; label: string }>;
  };
};

// ── Clínica ────────────────────────────────────────────────
export const clinica: Preset = {
  sector: 'clinica',
  tagline: 'Tu salud, en manos expertas',
  whatsappMessage: 'Hola, me gustaría pedir cita.',
  cta: {
    primary: { text: 'Pedir cita online', href: '/contacto' },
    secondary: { text: 'Ver especialidades', href: '/servicios' },
    whatsapp: { text: 'Pedir cita por WhatsApp' },
  },
  services: [
    { slug: 'medicina-general', title: 'Medicina General', summary: 'Atención primaria y seguimiento personalizado.', description: 'Consultas, revisiones, diagnóstico y derivación a especialistas. Horario ampliado para mayor comodidad.', icon: '🩺', featured: true },
    { slug: 'fisioterapia', title: 'Fisioterapia', summary: 'Recuperación y prevención de lesiones.', description: 'Tratamiento de lesiones musculoesqueléticas, rehabilitación postoperatoria y deportiva.', icon: '💪', featured: true },
    { slug: 'nutricion', title: 'Nutrición y Dietética', summary: 'Planes nutricionales personalizados.', description: 'Dietas adaptadas a tus objetivos y patologías. Seguimiento mensual.', icon: '🥗', featured: true },
    { slug: 'psicologia', title: 'Psicología', summary: 'Apoyo psicológico profesional y confidencial.', description: 'Terapia individual, de pareja y familiar. Primera consulta gratuita.', icon: '🧠', featured: false },
    { slug: 'podologia', title: 'Podología', summary: 'Cuidado integral del pie.', description: 'Tratamiento de patologías del pie, plantillas ortopédicas y cirugía menor.', icon: '🦶', featured: false },
  ],
  faq: [
    { question: '¿Necesito cita previa?', answer: 'Sí. Puedes pedir cita por WhatsApp, teléfono o formulario web. Intentamos darte hueco en menos de 48 horas.' },
    { question: '¿Aceptáis seguro médico?', answer: 'Trabajamos con los principales seguros (Adeslas, Sanitas, Asisa, Mapfre). Consúltanos el tuyo.' },
    { question: '¿Hay parking?', answer: 'Sí, disponemos de aparcamiento gratuito para pacientes.' },
    { question: '¿Hacéis visita a domicilio?', answer: 'Para algunos casos sí. Consúltanos disponibilidad y cobertura geográfica.' },
    { question: '¿Atienden urgencias?', answer: 'Contamos con servicio de urgencias en horario de apertura. Llama antes de venir.' },
  ],
  about: {
    headline: 'Más de 20 años cuidando tu salud',
    body: [
      'Somos un centro médico multidisciplinar fundado con el objetivo de ofrecer una atención sanitaria de calidad, cercana y accesible.',
      'Nuestro equipo está formado por profesionales colegiados con amplia experiencia en sus especialidades.',
      'Disponemos de las últimas tecnologías diagnósticas para ofrecer el mejor servicio en el menor tiempo posible.',
    ],
    stats: [
      { value: '+5.000', label: 'Pacientes activos' },
      { value: '20', label: 'Años de experiencia' },
      { value: '8', label: 'Especialidades' },
      { value: '4.9★', label: 'Valoración media' },
    ],
  },
};

// ── Abogados ───────────────────────────────────────────────
export const abogados: Preset = {
  sector: 'abogados',
  tagline: 'Defendemos tus derechos con rigor y eficacia',
  whatsappMessage: 'Hola, necesito asesoramiento jurídico.',
  cta: {
    primary: { text: 'Consulta gratuita', href: '/contacto' },
    secondary: { text: 'Áreas de práctica', href: '/servicios' },
    whatsapp: { text: 'Consulta por WhatsApp' },
  },
  services: [
    { slug: 'derecho-civil', title: 'Derecho Civil', summary: 'Contratos, herencias, reclamaciones y más.', description: 'Asesoramiento en contratos, herencias, sucesiones, arrendamientos y responsabilidad civil.', icon: '⚖️', featured: true },
    { slug: 'derecho-laboral', title: 'Derecho Laboral', summary: 'Despidos, accidentes laborales y EREs.', description: 'Representación en despidos improcedentes, reclamaciones de cantidad, incapacidades y negociación colectiva.', icon: '👔', featured: true },
    { slug: 'derecho-familia', title: 'Derecho de Familia', summary: 'Divorcios, custodias y pensiones alimenticias.', description: 'Divorcios contenciosos y de mutuo acuerdo, custodias, régimen de visitas y modificación de medidas.', icon: '👨‍👩‍👧', featured: true },
    { slug: 'derecho-penal', title: 'Derecho Penal', summary: 'Defensa penal y acusación particular.', description: 'Defensa en procedimientos penales, recursos y representación ante juzgados y audiencias.', icon: '🔒', featured: false },
    { slug: 'derecho-inmobiliario', title: 'Derecho Inmobiliario', summary: 'Compraventas, hipotecas y comunidades.', description: 'Revisión de contratos, reclamaciones hipotecarias, desahucios y gestión de comunidades de propietarios.', icon: '🏠', featured: false },
  ],
  faq: [
    { question: '¿La primera consulta es gratuita?', answer: 'Sí. Ofrecemos una primera consulta gratuita de 30 minutos para evaluar tu caso sin compromiso.' },
    { question: '¿Cuánto cobráis?', answer: 'Trabajamos con presupuesto cerrado por asunto o tarifa horaria según el tipo de caso. Te informamos antes de comenzar.' },
    { question: '¿Atendéis fuera de la ciudad?', answer: 'Sí. Podemos atender por videoconferencia y desplazarnos a juzgados de otras provincias.' },
    { question: '¿Tenéis guardia de urgencias?', answer: 'Disponemos de un servicio de guardia para detenciones y urgencias penales.' },
  ],
  about: {
    headline: 'Despacho especializado con más de 15 años de experiencia',
    body: [
      'Somos un despacho de abogados multidisciplinar comprometido con la defensa de los derechos de nuestros clientes.',
      'Combinamos rigor jurídico con un trato personal y transparente. Siempre sabrás en qué punto está tu caso.',
      'Colegiados en el Ilustre Colegio de Abogados. Seguro de responsabilidad civil profesional.',
    ],
    stats: [
      { value: '+800', label: 'Casos resueltos' },
      { value: '15', label: 'Años de experiencia' },
      { value: '5', label: 'Abogados especializados' },
      { value: '98%', label: 'Clientes satisfechos' },
    ],
  },
};

// ── Restaurante ────────────────────────────────────────────
export const restaurante: Preset = {
  sector: 'restaurante',
  tagline: 'Sabor auténtico, experiencia memorable',
  whatsappMessage: 'Hola, me gustaría reservar mesa.',
  cta: {
    primary: { text: 'Reservar mesa', href: '/contacto' },
    secondary: { text: 'Ver carta', href: '/servicios' },
    whatsapp: { text: 'Reservar por WhatsApp' },
  },
  services: [
    { slug: 'carta', title: 'Carta', summary: 'Cocina de temporada con productos locales de primera.', description: 'Nuestra carta cambia con las estaciones para aprovechar los mejores productos del mercado. Opciones vegetarianas y sin gluten.', icon: '🍽️', featured: true },
    { slug: 'menu-diario', title: 'Menú Diario', summary: 'Menú completo de lunes a viernes.', description: 'Primer plato, segundo, postre, pan y bebida. Cambia cada día. Disponible de 13:00 a 16:00.', icon: '🥘', featured: true },
    { slug: 'eventos', title: 'Eventos y Celebraciones', summary: 'Comuniones, bautizos, cumpleaños y corporativos.', description: 'Disponemos de sala privada para grupos de hasta 40 personas. Menús personalizados y decoración incluida.', icon: '🎉', featured: true },
    { slug: 'takeaway', title: 'Para Llevar', summary: 'Nuestros platos donde tú quieras.', description: 'Servicio de recogida en local. Empaquetado especial para que llegue perfecto.', icon: '📦', featured: false },
  ],
  faq: [
    { question: '¿Necesito reserva?', answer: 'Recomendamos reservar, especialmente fines de semana. Puedes hacerlo por WhatsApp o teléfono.' },
    { question: '¿Tenéis menú para celíacos?', answer: 'Sí. Disponemos de opciones sin gluten. Indícalo al reservar para prepararlo con antelación.' },
    { question: '¿Hacéis eventos privados?', answer: 'Sí. Disponemos de sala privada para hasta 40 comensales con menú personalizado.' },
    { question: '¿Hay parking cerca?', answer: 'Sí, hay parking público a 2 minutos del restaurante.' },
  ],
  about: {
    headline: 'Cocina de mercado desde 2010',
    body: [
      'Nuestro restaurante nació con una idea sencilla: cocinar bien con producto fresco y de proximidad.',
      'El equipo de cocina lleva más de una década perfeccionando recetas tradicionales con toques modernos.',
      'Cada plato se elabora al momento, sin precocinados, con ingredientes seleccionados cada mañana en el mercado.',
    ],
    stats: [
      { value: '+10.000', label: 'Comensales al año' },
      { value: '14', label: 'Años abiertos' },
      { value: '4.8★', label: 'Valoración en Google' },
      { value: '100%', label: 'Producto fresco' },
    ],
  },
};

// ── Academia ───────────────────────────────────────────────
export const academia: Preset = {
  sector: 'academia',
  tagline: 'Aprende más, consigue más',
  whatsappMessage: 'Hola, me gustaría información sobre los cursos.',
  cta: {
    primary: { text: 'Ver cursos disponibles', href: '/servicios' },
    secondary: { text: 'Contactar', href: '/contacto' },
    whatsapp: { text: 'Pedir información por WhatsApp' },
  },
  services: [
    { slug: 'oposiciones', title: 'Oposiciones', summary: 'Preparación intensiva con los mejores resultados.', description: 'Grupos reducidos, temario actualizado y simulacros semanales. Profesores con plaza en activo.', icon: '📚', featured: true },
    { slug: 'idiomas', title: 'Idiomas', summary: 'Inglés, francés, alemán y más.', description: 'Clases presenciales y online. Preparación oficial Cambridge, DELF y Goethe. Grupos por nivel.', icon: '🌍', featured: true },
    { slug: 'refuerzo-escolar', title: 'Refuerzo Escolar', summary: 'Apoyo en todas las asignaturas, primaria y ESO.', description: 'Seguimiento personalizado, comunicación con familias y metodología adaptada a cada alumno.', icon: '✏️', featured: true },
    { slug: 'informatica', title: 'Informática', summary: 'Ofimática, programación y diseño.', description: 'Cursos de Office, Excel avanzado, diseño gráfico y programación básica. Certificación incluida.', icon: '💻', featured: false },
    { slug: 'universidad', title: 'Preparación Universitaria', summary: 'EVAU, acceso y recuperaciones.', description: 'Preparación EVAU/Selectividad, bachillerato y recuperación de asignaturas pendientes.', icon: '🎓', featured: false },
  ],
  faq: [
    { question: '¿Cuándo empieza el próximo curso?', answer: 'Los grupos nuevos empiezan en septiembre, enero y abril. También admitimos alumnos en cualquier momento del año.' },
    { question: '¿Hay clases online?', answer: 'Sí. Todos nuestros cursos tienen modalidad presencial, online y mixta.' },
    { question: '¿Cuántos alumnos hay por grupo?', answer: 'Máximo 8 alumnos por grupo para garantizar atención personalizada.' },
    { question: '¿Ofrecéis clases particulares?', answer: 'Sí. Disponemos de profesores para clases individuales con horario flexible.' },
    { question: '¿Hay prueba de nivel gratuita?', answer: 'Sí. Realizamos una prueba inicial gratuita para ubicarte en el grupo más adecuado.' },
  ],
  about: {
    headline: 'Más de 10 años formando al éxito',
    body: [
      'Somos una academia fundada por docentes con vocación de enseñar y pasión por los resultados.',
      'Nuestro método combina rigor académico, seguimiento individual y motivación constante.',
      'Más de 300 alumnos pasan por nuestras aulas cada año con una tasa de aprobados superior al 90%.',
    ],
    stats: [
      { value: '+300', label: 'Alumnos al año' },
      { value: '10', label: 'Años de historia' },
      { value: '90%', label: 'Tasa de aprobados' },
      { value: '4.9★', label: 'Valoración media' },
    ],
  },
};

// ── Consultor / Freelancer ─────────────────────────────────
export const consultor: Preset = {
  sector: 'consultor',
  tagline: 'Estrategia y resultados para tu negocio',
  whatsappMessage: 'Hola, me gustaría hablar sobre mi proyecto.',
  cta: {
    primary: { text: 'Hablar con nosotros', href: '/contacto' },
    secondary: { text: 'Ver servicios', href: '/servicios' },
    whatsapp: { text: 'Escríbenos por WhatsApp' },
  },
  services: [
    { slug: 'consultoria-estrategica', title: 'Consultoría Estratégica', summary: 'Definimos el rumbo de tu negocio.', description: 'Análisis de situación, identificación de oportunidades, definición de objetivos y hoja de ruta a 12 meses.', icon: '🎯', featured: true },
    { slug: 'marketing-digital', title: 'Marketing Digital', summary: 'Visibilidad y captación de clientes online.', description: 'SEO, publicidad de pago, redes sociales y email marketing. Estrategia integrada y medición de resultados.', icon: '📱', featured: true },
    { slug: 'gestion-proyectos', title: 'Gestión de Proyectos', summary: 'Coordinamos tu proyecto de principio a fin.', description: 'Metodología ágil, gestión de equipos, control de plazos y entrega con calidad garantizada.', icon: '📋', featured: true },
    { slug: 'formacion', title: 'Formación Empresarial', summary: 'Capacitamos a tu equipo para crecer.', description: 'Talleres in-company, formación online y coaching ejecutivo. Adaptado a las necesidades de tu organización.', icon: '🎓', featured: false },
  ],
  faq: [
    { question: '¿Trabajáis con empresas de cualquier tamaño?', answer: 'Sí. Tenemos experiencia con pymes, startups y autónomos en distintos sectores.' },
    { question: '¿Cómo empezamos?', answer: 'Con una reunión de diagnóstico gratuita de 60 minutos para entender tu situación y objetivos.' },
    { question: '¿Cuánto dura un proyecto típico?', answer: 'Depende del alcance. Los proyectos de consultoría suelen durar entre 3 y 12 meses.' },
    { question: '¿Trabajáis en remoto?', answer: 'Sí. Atendemos clientes en toda España y también internacionalmente.' },
  ],
  about: {
    headline: 'Expertos en hacer crecer negocios',
    body: [
      'Somos un equipo de consultores con más de 15 años de experiencia en estrategia, marketing y operaciones.',
      'Combinamos visión estratégica con ejecución práctica. No solo planificamos: también implementamos.',
      'Hemos trabajado con más de 100 empresas en sectores tan distintos como retail, tecnología, salud y servicios profesionales.',
    ],
    stats: [
      { value: '+100', label: 'Clientes asesorados' },
      { value: '15', label: 'Años de experiencia' },
      { value: '4', label: 'Consultores senior' },
      { value: '95%', label: 'Clientes recurrentes' },
    ],
  },
};

export const presets = { clinica, abogados, restaurante, academia, consultor } as const;
export type PresetKey = keyof typeof presets;
