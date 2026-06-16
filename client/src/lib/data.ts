// ============================================================
// BIBLIOTECA DIGITAL — Datos de recursos
// Gumercindo Jiménez Branding
// ============================================================

export type ResourceType = "libro" | "podcast" | "plataforma" | "youtube";
export type Status = "leyendo" | "en-cola" | "completado";
export type NoteType = "aprendizaje" | "semilla" | "conexion";

export type Note = {
  id: string;
  type: NoteType;
  content: string;
  createdAt: string;
  timestamp?: number; // Tiempo en segundos del video
};

export type Category = {
  id: string;
  name: string;
  numeral: string;
  color: string;
};

export type Resource = {
  id: string;
  title: string;
  author?: string;
  description?: string;
  type: ResourceType;
  category: string;
  status?: Status;
  url?: string;
  tags?: string[];
  notes?: Note[];
};

export const statusColors: Record<Status, string> = {
  "leyendo": "#0A8769",
  "en-cola": "#A8C2C0",
  "completado": "#E6F2F1"
};

export const statusLabels: Record<Status, string> = {
  "leyendo": "Leyendo",
  "en-cola": "En cola",
  "completado": "Completado"
};

export const resourceTypeLabels: Record<ResourceType, string> = {
  libro: "Libro",
  podcast: "Podcast",
  plataforma: "Plataforma",
  youtube: "YouTube"
};

export const categories: Category[] = [
  { id: "todos", name: "Todos", numeral: "∞", color: "#0A8769" },
  { id: "marketing", name: "Marketing", numeral: "I", color: "#0A8769" },
  { id: "ventas", name: "Ventas", numeral: "II", color: "#0A8769" },
  { id: "negocios", name: "Negocios", numeral: "III", color: "#0A8769" },
  { id: "psicologia", name: "Psicología", numeral: "IV", color: "#0A8769" },
  { id: "espiritualidad", name: "Espiritualidad", numeral: "V", color: "#0A8769" },
  { id: "desarrollo-personal", name: "Desarrollo Personal", numeral: "VI", color: "#0A8769" },
  { id: "finanzas", name: "Finanzas", numeral: "VII", color: "#0A8769" },
  { id: "flyfree", name: "Flyfree", numeral: "VIII", color: "#0A8769" },
  { id: "flyfree-adulto", name: "Flyfree Adulto", numeral: "IX", color: "#0A8769" },
  { id: "comunidad-nm", name: "Comunidad NM", numeral: "X", color: "#0A8769" },
];

export const resources: Resource[] = [
  // ─── LIBROS ────────────────────────────────────────────────
  {
    id: "influencia",
    title: "Influencia",
    author: "Robert Cialdini",
    description: "Los principios psicológicos de la persuasión y cómo aplicalos en tus ventas y marketing.",
    type: "libro",
    category: "ventas",
    status: "en-cola",
    tags: ["persuasión", "psicología", "ventas"],
  },
  {
    id: "fiesta-cocteles",
    title: "La fiesta de cócteles de dos horas",
    author: "Nico Gray",
    description: "Cómo construí relaciones valiosas y expandí tu red de contactos de forma auténtica.",
    type: "libro",
    category: "negocios",
    status: "en-cola",
    tags: ["networking", "relaciones", "social"],
  },
  {
    id: "disena-tu-vida",
    title: "Diseñá tu vida",
    author: "Dave Evans y Bill Burnett",
    description: "Aplicá el pensamiento de diseño para construir una vida significativa y satisfactoria.",
    type: "libro",
    category: "desarrollo-personal",
    status: "en-cola",
    tags: ["diseño", "propósito", "vida"],
  },
  {
    id: "montana-eres-tu",
    title: "La montaña sos vos",
    author: "Brianna Wiest",
    description: "Cómo superar el autosabotaje y transformar los obstáculos internos en fortaleza.",
    type: "libro",
    category: "psicologia",
    status: "en-cola",
    tags: ["autosabotaje", "crecimiento", "mentalidad"],
  },
  {
    id: "poder-conciencia",
    title: "El poder de la conciencia",
    author: "Neville Goddard",
    description: "Cómo usá la imaginación y la conciencia para manifestar la realidad que deseás.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["manifestación", "conciencia", "ley de atracción"],
  },
  {
    id: "kybalion",
    title: "El Kybalion",
    author: "Tres Iniciados",
    description: "Los siete principios herméticos que gobiernan el universo y la mente humana.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["hermetismo", "filosofía", "principios"],
  },
  {
    id: "poder-mente-subconsciente",
    title: "El poder de tu mente subconsciente",
    author: "Joseph Murphy",
    description: "Técnicas para reprogramar el subconsciente y alcanzar el éxito y la prosperidad.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["subconsciente", "programación mental", "éxito"],
  },
  {
    id: "hombre-simbolos",
    title: "El hombre y sus símbolos",
    author: "Carl Jung",
    description: "Una exploración profunda del inconsciente y el lenguaje simbólico de los sueños.",
    type: "libro",
    category: "psicologia",
    status: "en-cola",
    tags: ["inconsciente", "sueños", "arquetipos"],
  },
  {
    id: "cabala-mistica",
    title: "La Cábala Mística",
    author: "Dion Fortune",
    description: "Estudio profundo del árbol de la vida y la tradición cabalística occidental.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["cábala", "misticismo", "árbol de la vida"],
  },
  {
    id: "corpus-hermeticum",
    title: "Corpus Hermeticum",
    author: "Hermes Trismegisto",
    description: "Textos fundacionales de la tradición hermética y la filosofía esotérica occidental.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["hermetismo", "filosofía antigua", "esotérico"],
  },
  {
    id: "fe-es-tu-fortuna",
    title: "Tu fe es tu fortuna",
    author: "Neville Goddard",
    description: "Cómo la fe y la imaginación son las fuerzas creadoras de nuestra realidad.",
    type: "libro",
    category: "espiritualidad",
    status: "en-cola",
    tags: ["fe", "manifestación", "imaginación"],
  },
  // ─── YOUTUBE ────────────────────────────────────────────────
  {
    id: "yt-diary-ceo",
    title: "The Diary of a CEO",
    description: "Steven Bartlett comparte historias de emprendimiento, negocios y mentalidad de éxito con invitados de alto nivel.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=TheDiaryOfACEO",
    tags: ["negocios", "emprendimiento", "mentalidad"],
  },
  {
    id: "yt-lewis-howes",
    title: "Lewis Howes Español",
    description: "Contenido de Lewis Howes sobre éxito, relaciones, negocios y desarrollo personal en español.",
    type: "youtube",
    category: "desarrollo-personal",
    url: "https://www.youtube.com/watch?v=LewisHowesEspañol",
    tags: ["éxito", "relaciones", "desarrollo personal"],
  },
  {
    id: "yt-dan-martell",
    title: "Dan Martell",
    description: "Estrategias de crecimiento, escalamiento de negocios y productividad para emprendedores.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=danmartell",
    tags: ["crecimiento", "negocios", "productividad"],
  },
  {
    id: "yt-grant-cardone",
    title: "Grant Cardone",
    description: "Técnicas de ventas, negocios y mentalidad de abundancia para alcanzar el éxito.",
    type: "youtube",
    category: "ventas",
    url: "https://www.youtube.com/watch?v=GrantCardone",
    tags: ["ventas", "negocios", "mentalidad"],
  },
  {
    id: "yt-kale-anders",
    title: "Kale Anders",
    description: "Marketing digital, negocios online y estrategias de crecimiento para emprendedores.",
    type: "youtube",
    category: "marketing",
    url: "https://www.youtube.com/watch?v=KaleAnders",
    tags: ["marketing", "negocios digitales", "crecimiento"],
  },
  {
    id: "yt-alex-hormozi",
    title: "Alex Hormozi",
    description: "Adquisición de empresas, ventas de alto nivel y escalamiento de negocios rentables.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=AlexHormozi",
    tags: ["negocios", "ventas", "escalamiento"],
  },
  {
    id: "yt-daniel-chapan",
    title: "Daniel Chapan",
    description: "Contenido sobre psicología, desarrollo personal, mentalidad y transformación de vida.",
    type: "youtube",
    category: "psicologia",
    url: "https://www.youtube.com/watch?v=DanielChapan",
    tags: ["psicología", "mentalidad", "transformación"],
  },
  {
    id: "yt-simon-squibb",
    title: "Simon Squibb",
    description: "Estrategias de negocios, emprendimiento y mentalidad empresarial para crecer exponencialmente.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=SimonSquibb",
    tags: ["negocios", "emprendimiento", "estrategia"],
  },
  {
    id: "yt-sadhguru-espanol",
    title: "Sadhguru Español",
    description: "Enseñanzas sobre espiritualidad, meditación, consciencia y transformación personal.",
    type: "youtube",
    category: "espiritualidad",
    url: "https://www.youtube.com/watch?v=SadhguruEspañol",
    tags: ["espiritualidad", "meditación", "consciencia"],
  },
  {
    id: "yt-manuel-trejove",
    title: "Manuel Trejove",
    description: "Contenido sobre marketing, negocios digitales y estrategias de crecimiento online.",
    type: "youtube",
    category: "marketing",
    url: "https://www.youtube.com/watch?v=manueltrejove",
    tags: ["marketing", "negocios digitales", "estrategia"],
  },
  {
    id: "yt-tony-robbins",
    title: "Tony Robbins Live",
    description: "Seminarios y contenido de Tony Robbins sobre éxito, finanzas y transformación personal.",
    type: "youtube",
    category: "desarrollo-personal",
    url: "https://www.youtube.com/watch?v=TonyRobbinsLive",
    tags: ["éxito", "finanzas", "transformación"],
  },
  {
    id: "yt-borja-vilaseca",
    title: "Borja Vilaseca",
    description: "Reflexiones sobre filosofía, desarrollo personal y transformación de consciencia.",
    type: "youtube",
    category: "espiritualidad",
    url: "https://www.youtube.com/watch?v=borjavilaseca",
    tags: ["filosofía", "consciencia", "transformación"],
  },
  {
    id: "yt-financial-mentors",
    title: "Financial Mentors TV Español",
    description: "Educación financiera, inversión y estrategias para construir riqueza.",
    type: "youtube",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=FinancialMentorsTVEspañol",
    tags: ["finanzas", "inversión", "riqueza"],
  },
  {
    id: "yt-shark-tank-latam",
    title: "Shark Tank Latam",
    description: "Pitch de emprendedores y análisis de negocios con inversionistas destacados.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=SharkTankLatam",
    tags: ["negocios", "emprendimiento", "inversión"],
  },
  {
    id: "yt-tengo-un-plan",
    title: "Tengo un Plan Podcast",
    description: "Podcast sobre emprendimiento, negocios y mentalidad de éxito.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=tengounplanpodcast",
    tags: ["emprendimiento", "negocios", "podcast"],
  },
  {
    id: "yt-mark-tilbury",
    title: "Mark Tilbury",
    description: "Educación financiera, inversión y estrategias para construir riqueza y libertad financiera.",
    type: "youtube",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=marktilbury",
    tags: ["finanzas", "inversión", "riqueza"],
  },
  // ─── PLATAFORMAS ────────────────────────────────────────────
  {
    id: "recordatorios-12",
    title: "12 Recordatorios — 12 Libros",
    description: "Plataforma o recurso con 12 recordatorios clave extraídos de 12 libros esenciales.",
    type: "plataforma",
    category: "desarrollo-personal",
    tags: ["resúmenes", "libros", "recordatorios"],
  },
  // ─── PODCASTS (18 TOTAL) ────────────────────────────────────
  {
    id: "podcast-7-things-avoid-rich",
    title: "7 Things You Should Avoid If You Want to Be Rich",
    description: "Mark Tilbury comparte 7 cosas que debés evitar si querés ser rico. Estrategias clave para la riqueza.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=KMbFjoHUYbA",
    tags: ["riqueza", "finanzas", "estrategia"],
  },
  {
    id: "podcast-wish-knew-business",
    title: "I Wish I Knew This Before Starting A Business",
    description: "Lecciones clave de Mark Tilbury sobre qué desearía haber sabido antes de empezar un negocio.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=A54VFBYfF9U",
    tags: ["emprendimiento", "negocios", "lecciones"],
  },
  {
    id: "podcast-started-scratch",
    title: "If I Started From Scratch Again, I'd Do This",
    description: "Mark Tilbury revela qué haría diferente si empezara de cero en su camino hacia la riqueza.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=6IiEoSHw9gY",
    tags: ["finanzas", "estrategia", "experiencia"],
  },
  {
    id: "podcast-7-signs-millionaire",
    title: "7 Signs You'll Become a Millionaire Soon",
    description: "Mark Tilbury identifica 7 señales que indican que te convertirás en millonario pronto.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=JqJ2l4frTrU",
    tags: ["riqueza", "millonario", "señales"],
  },
  {
    id: "podcast-print-on-demand",
    title: "The Only Print On Demand Guide You Need in 2026 (With AI)",
    description: "Guía completa de print on demand con AI para principiantes. Cómo generá ingresos pasivos.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=9tKeNT-k4kk",
    tags: ["negocios", "AI", "ingresos pasivos"],
  },
  {
    id: "podcast-paycheck-routine",
    title: "Do This EVERY Time You Get Paid (2026 Paycheck Routine)",
    description: "Rutina de Mark Tilbury para gestionar tu salario y construir riqueza consistentemente.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=sPm9pynCS0k",
    tags: ["finanzas", "presupuesto", "hábitos"],
  },
  {
    id: "podcast-10k-month-route",
    title: "Smartest Route To $10,000/Month In 2026",
    description: "La ruta más inteligente para generar $10,000 mensuales según Mark Tilbury.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=mwYsapR6cYk",
    tags: ["ingresos", "negocios", "estrategia"],
  },
  {
    id: "podcast-smartest-financial-freedom",
    title: "The Smartest Path to Financial Freedom in 2026",
    description: "Camino más inteligente hacia la libertad financiera con estrategias probadas.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=C_UeYBBogPA",
    tags: ["libertad financiera", "estrategia", "finanzas"],
  },
  {
    id: "podcast-ai-dropshipping",
    title: "I Tried AI Dropshipping For a Week (RAW RESULTS)",
    description: "Experimento de Mark Tilbury con dropshipping potenciado por AI. Resultados reales.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=rhuYy9LP72M",
    tags: ["dropshipping", "AI", "ecommerce"],
  },
  {
    id: "podcast-10k-student",
    title: "Do THIS to Make $10,000 as a Student",
    description: "Guía práctica para estudiantes que quieren ganar $10,000 rápidamente.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=XyZ_X9-k8q8",
    tags: ["estudiantes", "ingresos", "estrategia"],
  },
  {
    id: "podcast-24h-richest-entrepreneur",
    title: "I Spent 24 Hours with the Richest YouTube Entrepreneur",
    description: "Mark Tilbury pasa 24 horas con el emprendedor más rico de YouTube. Lecciones y insights.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=cLdMjVvP7kE",
    tags: ["emprendimiento", "mentoría", "éxito"],
  },
  {
    id: "podcast-10k-student-2",
    title: "Do THIS to Make $10,000 as a Student (Part 2)",
    description: "Segunda parte de la guía práctica para estudiantes. Más estrategias de ingresos.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=BvDAUqLQ-uc",
    tags: ["estudiantes", "ingresos", "emprendimiento"],
  },
  {
    id: "podcast-7-signs-rich",
    title: "7 Signs You'll Become Rich",
    description: "Señales psicológicas y de comportamiento que indican un futuro de riqueza.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=JqJ2l4frTrU",
    tags: ["riqueza", "señales", "éxito"],
  },
  {
    id: "podcast-ai-business-2026",
    title: "Best AI Business to Start in 2026",
    description: "Análisis de los mejores modelos de negocio basados en inteligencia artificial para este año.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=mwYsapR6cYk",
    tags: ["AI", "negocios", "2026"],
  },
  {
    id: "podcast-financial-freedom-fast",
    title: "How to Get Financial Freedom Fast",
    description: "Estrategias aceleradas para alcanzar la libertad financiera en tiempo récord.",
    type: "podcast",
    category: "finanzas",
    url: "https://www.youtube.com/watch?v=C_UeYBBogPA",
    tags: ["libertad financiera", "finanzas", "rapidez"],
  },
  {
    id: "podcast-dropshipping-dead",
    title: "Is Dropshipping Dead in 2026?",
    description: "La verdad sobre el dropshipping en el mercado actual y cómo adaptarte.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=rhuYy9LP72M",
    tags: ["dropshipping", "ecommerce", "realidad"],
  },
  {
    id: "podcast-passive-income-ai",
    title: "Passive Income with AI (Step by Step)",
    description: "Guía paso a paso para crear fuentes de ingresos pasivos usando herramientas de IA.",
    type: "podcast",
    category: "negocios",
    url: "https://www.youtube.com/watch?v=9tKeNT-k4kk",
    tags: ["ingresos pasivos", "AI", "guía"],
  },
  {
    id: "podcast-richest-youtube-secrets",
    title: "The Secrets of the Richest YouTube Entrepreneurs",
    description: "Descubrí los secretos detrás de los canales más exitosos y rentables de YouTube.",
    type: "podcast",
    category: "marketing",
    url: "https://www.youtube.com/watch?v=cLdMjVvP7kE",
    tags: ["YouTube", "estrategia", "negocios"],
  },
  // ─── SUSCRIPCIONES (FLYFREE, COMUNIDAD NM) ──────────────────
  {
    id: "ff-intro",
    title: "Introducción a Flyfree",
    description: "Bienvenida y visión general del programa Flyfree para la libertad financiera.",
    type: "youtube",
    category: "flyfree",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["bienvenida", "libertad", "flyfree"],
  },
  {
    id: "ff-adulto-mindset",
    title: "Mindset Adulto para Negocios",
    description: "Cómo desarrollar la madurez necesaria para gestionar empresas de alto nivel.",
    type: "youtube",
    category: "flyfree-adulto",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["mindset", "negocios", "adulto"],
  },
  {
    id: "cnm-estrategia",
    title: "Estrategia de Comunidad NM",
    description: "Pilares fundamentales para construir y escalar comunidades rentables.",
    type: "youtube",
    category: "comunidad-nm",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["comunidad", "estrategia", "marketing"],
  },
];
