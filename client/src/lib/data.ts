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
  timestamp?: number;
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
  isFavorite?: boolean;
};

export const statusColors: Record<Status, string> = {
  "leyendo": "#0A8769",
  "en-cola": "#A8C2C0",
  "completado": "#E6F2F1"
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
  { id: "idiomas", name: "Idiomas", numeral: "VIII", color: "#0A8769" },
  { id: "flyfree", name: "Flyfree", numeral: "IX", color: "#0A8769" },
  { id: "flyfree-adulto", name: "Flyfree Adulto", numeral: "X", color: "#0A8769" },
  { id: "comunidad-nm", name: "Comunidad NM", numeral: "XI", color: "#0A8769" },
];

export const resources: Resource[] = [
  // ─── LIBROS (20) ───────────────────────────────────────────
  { id: "influencia", title: "Influencia", author: "Robert Cialdini", description: "Los principios psicológicos de la persuasión y cómo aplicarlos en ventas y marketing.", type: "libro", category: "ventas", status: "en-cola", tags: ["persuasión", "psicología", "ventas"] },
  { id: "fiesta-cocteles", title: "La fiesta de cócteles de dos horas", author: "Nico Gray", description: "Cómo construir relaciones valiosas y expandir tu red de contactos de forma auténtica.", type: "libro", category: "negocios", status: "en-cola", tags: ["networking", "relaciones", "social"] },
  { id: "disena-tu-vida", title: "Diseña tu vida", author: "Dave Evans y Bill Burnett", description: "Aplica el pensamiento de diseño para construir una vida significativa y satisfactoria.", type: "libro", category: "desarrollo-personal", status: "en-cola", tags: ["diseño", "propósito", "vida"] },
  { id: "montana-eres-tu", title: "La montaña eres tú", author: "Brianna Wiest", description: "Cómo superar el autosabotaje y transformar los obstáculos internos en fortaleza.", type: "libro", category: "psicologia", status: "en-cola", tags: ["autosabotaje", "crecimiento", "mentalidad"] },
  { id: "poder-conciencia", title: "El poder de la conciencia", author: "Neville Goddard", description: "Cómo usar la imaginación y la conciencia para manifestar la realidad deseada.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["manifestación", "conciencia", "ley de atracción"] },
  { id: "kybalion", title: "El Kybalion", author: "Tres Iniciados", description: "Los siete principios herméticos que gobiernan el universo y la mente humana.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["hermetismo", "filosofía", "principios"] },
  { id: "poder-mente-subconsciente", title: "El poder de tu mente subconsciente", author: "Joseph Murphy", description: "Técnicas para reprogramar el subconsciente y alcanzar el éxito y la prosperidad.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["subconsciente", "programación mental", "éxito"] },
  { id: "hombre-simbolos", title: "El hombre y sus símbolos", author: "Carl Jung", description: "Una exploración profunda del inconsciente y el lenguaje simbólico de los sueños.", type: "libro", category: "psicologia", status: "en-cola", tags: ["inconsciente", "sueños", "arquetipos"] },
  { id: "cabala-mistica", title: "La Cábala Mística", author: "Dion Fortune", description: "Estudio profundo del árbol de la vida y la tradición cabalística occidental.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["cábala", "misticismo", "árbol de la vida"] },
  { id: "corpus-hermeticum", title: "Corpus Hermeticum", author: "Hermes Trismegisto", description: "Textos fundacionales de la tradición hermética y la filosofía esotérica occidental.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["hermetismo", "filosofía antigua", "esotérico"] },
  { id: "fe-es-tu-fortuna", title: "Tu fe es tu fortuna", author: "Neville Goddard", description: "Cómo la fe y la imaginación son las fuerzas creadoras de nuestra realidad.", type: "libro", category: "espiritualidad", status: "en-cola", tags: ["fe", "manifestación", "imaginación"] },
  { id: "oversubscribed", title: "Oversubscribed", author: "Daniel Priestley", description: "Cómo construir un negocio tan demandado que los clientes hagan fila para comprarte.", type: "libro", category: "marketing", status: "en-cola", tags: ["demanda", "marketing", "posicionamiento"] },
  { id: "hiperdexconexion", title: "Hiperdexconexión", author: "Marta Romo", description: "Estrategias para conectar profundamente con tu audiencia en la era digital.", type: "libro", category: "marketing", status: "en-cola", tags: ["conexión", "audiencia", "digital"] },
  { id: "estrategia-conflicto", title: "La estrategia del conflicto", author: "Thomas Schelling", description: "Análisis estratégico de diseño de conflictos y negociaciones en economía y política.", type: "libro", category: "negocios", status: "en-cola", tags: ["estrategia", "conflicto", "negociación"] },
  { id: "generacion-dopamina", title: "Generación dopamina", author: "Anna Lembke", description: "Cómo el exceso de estimulación digital está afectando nuestra salud mental y bienestar.", type: "libro", category: "psicologia", status: "en-cola", tags: ["dopamina", "bienestar", "digital"] },
  { id: "12-reglas-vida", title: "12 Reglas para la vida", author: "Jordan Peterson", description: "Principios prácticos para vivir una vida significativa y responsable.", type: "libro", category: "desarrollo-personal", status: "en-cola", tags: ["responsabilidad", "significado", "vida"] },
  { id: "mindset", title: "Mindset", author: "Carol Dweck", description: "La mentalidad de crecimiento: cómo el pensamiento fijo limita y el flexible transforma.", type: "libro", category: "psicologia", status: "en-cola", tags: ["mentalidad", "crecimiento", "aprendizaje"] },
  { id: "quien-no-como", title: "Quién no cómo", author: "Dan Sullivan", description: "Cómo identificar y eliminar las personas que sabotean tu éxito y crecimiento.", type: "libro", category: "negocios", status: "en-cola", tags: ["relaciones", "éxito", "límites"] },
  { id: "negociar-cualquier-cosa", title: "Puedes negociar cualquier cosa", author: "Herb Cohen", description: "Técnicas prácticas y probadas para negociar efectivamente en cualquier situación.", type: "libro", category: "negocios", status: "en-cola", tags: ["negociación", "ventas", "comunicación"] },
  { id: "10-es-mas-facil-2", title: "10. Es más fácil que 2", author: "Dan Sullivan", description: "Por qué es más fácil lograr objetivos 10 veces mayores que objetivos apenas mejores.", type: "libro", category: "negocios", status: "en-cola", tags: ["objetivos", "crecimiento", "mentalidad"] },

  // ─── PODCASTS (18) ──────────────────────────────────────────
  { id: "podcast-1", title: "7 Things You Should Avoid If You Want to Be Rich", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=KMbFjoHUYbA" },
  { id: "podcast-2", title: "I Wish I Knew This Before Starting A Business", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=A54VFBYfF9U" },
  { id: "podcast-3", title: "If I Started From Scratch Again, I'd Do This", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=6IiEoSHw9gY" },
  { id: "podcast-4", title: "7 Signs You'll Become a Millionaire Soon", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=JqJ2l4frTrU" },
  { id: "podcast-5", title: "The Only Print On Demand Guide You Need in 2026", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=9tKeNT-k4kk" },
  { id: "podcast-6", title: "Do This EVERY Time You Get Paid", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=sPm9pynCS0k" },
  { id: "podcast-7", title: "Smartest Route To $10,000/Month In 2026", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=mwYsapR6cYk" },
  { id: "podcast-8", title: "The Smartest Path to Financial Freedom in 2026", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=C_UeYBBogPA" },
  { id: "podcast-9", title: "I Tried AI Dropshipping For a Week", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=rhuYy9LP72M" },
  { id: "podcast-10", title: "Do THIS to Make $10,000 as a Student", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=XyZ_X9-k8q8" },
  { id: "podcast-11", title: "I Spent 24 Hours with the Richest YouTube Entrepreneur", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=cLdMjVvP7kE" },
  { id: "podcast-12", title: "Do THIS to Make $10,000 as a Student (Part 2)", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=BvDAUqLQ-uc" },
  { id: "podcast-13", title: "7 Signs You'll Become Rich", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=JqJ2l4frTrU" },
  { id: "podcast-14", title: "Best AI Business to Start in 2026", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=mwYsapR6cYk" },
  { id: "podcast-15", title: "How to Get Financial Freedom Fast", type: "podcast", category: "finanzas", url: "https://www.youtube.com/watch?v=C_UeYBBogPA" },
  { id: "podcast-16", title: "Is Dropshipping Dead in 2026?", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=rhuYy9LP72M" },
  { id: "podcast-17", title: "Passive Income with AI (Step by Step)", type: "podcast", category: "negocios", url: "https://www.youtube.com/watch?v=9tKeNT-k4kk" },
  { id: "podcast-18", title: "The Secrets of the Richest YouTube Entrepreneurs", type: "podcast", category: "marketing", url: "https://www.youtube.com/watch?v=cLdMjVvP7kE" },

  // ─── PLATAFORMAS (11) ───────────────────────────────────────
  { id: "plat-1", title: "12 Recordatorios — 12 Libros", type: "plataforma", category: "desarrollo-personal" },
  { id: "plat-2", title: "ClickUp", type: "plataforma", category: "negocios" },
  { id: "plat-3", title: "Notion", type: "plataforma", category: "negocios" },
  { id: "plat-4", title: "ChatGPT Plus", type: "plataforma", category: "negocios" },
  { id: "plat-5", title: "Canva Pro", type: "plataforma", category: "marketing" },
  { id: "plat-6", title: "Shopify", type: "plataforma", category: "negocios" },
  { id: "plat-7", title: "Meta Ads Manager", type: "plataforma", category: "marketing" },
  { id: "plat-8", title: "Stripe", type: "plataforma", category: "finanzas" },
  { id: "plat-9", title: "Beehiiv", type: "plataforma", category: "marketing" },
  { id: "plat-10", title: "Skool", type: "plataforma", category: "negocios" },
  { id: "plat-11", title: "Calendly", type: "plataforma", category: "negocios" },

  // ─── CANALES YOUTUBE (16) ───────────────────────────────────
  { id: "yt-1", title: "The Diary of a CEO", type: "youtube", category: "negocios", url: "https://www.youtube.com/@TheDiaryOfACEO" },
  { id: "yt-2", title: "Lewis Howes Español", type: "youtube", category: "desarrollo-personal", url: "https://www.youtube.com/@LewisHowesEspañol" },
  { id: "yt-3", title: "Dan Martell", type: "youtube", category: "negocios", url: "https://www.youtube.com/@danmartell" },
  { id: "yt-4", title: "Grant Cardone", type: "youtube", category: "ventas", url: "https://www.youtube.com/@GrantCardone" },
  { id: "yt-5", title: "Kale Anders", type: "youtube", category: "marketing", url: "https://www.youtube.com/@KaleAnders" },
  { id: "yt-6", title: "Alex Hormozi", type: "youtube", category: "negocios", url: "https://www.youtube.com/@AlexHormozi" },
  { id: "yt-7", title: "Daniel Chapan", type: "youtube", category: "psicologia", url: "https://www.youtube.com/@DanielChapan" },
  { id: "yt-8", title: "Simon Squibb", type: "youtube", category: "negocios", url: "https://www.youtube.com/@SimonSquibb" },
  { id: "yt-9", title: "Sadhguru Español", type: "youtube", category: "espiritualidad", url: "https://www.youtube.com/@SadhguruEspañol" },
  { id: "yt-10", title: "Manuel Trejove", type: "youtube", category: "marketing", url: "https://www.youtube.com/@manueltrejove" },
  { id: "yt-11", title: "Tony Robbins Live", type: "youtube", category: "desarrollo-personal", url: "https://www.youtube.com/@TonyRobbinsLive" },
  { id: "yt-12", title: "Borja Vilaseca", type: "youtube", category: "espiritualidad", url: "https://www.youtube.com/@borjavilaseca" },
  { id: "yt-13", title: "Financial Mentors TV", type: "youtube", category: "finanzas", url: "https://www.youtube.com/@FinancialMentorsTVEspañol" },
  { id: "yt-14", title: "Shark Tank Latam", type: "youtube", category: "negocios", url: "https://www.youtube.com/@SharkTankLatam" },
  { id: "yt-15", title: "Tengo un Plan", type: "youtube", category: "negocios", url: "https://www.youtube.com/@tengounplanpodcast" },
  { id: "yt-16", title: "Mark Tilbury", type: "youtube", category: "finanzas", url: "https://www.youtube.com/@marktilbury" },

  // ─── SUSCRIPCIONES ──────────────────────────────────────────
  { id: "ff-1", title: "Flyfree Masterclass", type: "youtube", category: "flyfree", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "ffa-1", title: "Mentalidad Adulta", type: "youtube", category: "flyfree-adulto", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "cnm-1", title: "Comunidad NM Estrategia", type: "youtube", category: "comunidad-nm", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export const resourceTypeLabels: Record<ResourceType, string> = {
  libro: "Libro",
  podcast: "Podcast",
  plataforma: "Plataforma",
  youtube: "YouTube",
};

export const statusLabels: Record<Status, string> = {
  leyendo: "Leyendo",
  "en-cola": "En cola",
  completado: "Completado",
};
