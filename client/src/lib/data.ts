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
    id: "yt-diary-ceo",
    title: "The Diary of a CEO",
    description: "Steven Bartlett comparte historias de emprendimiento, negocios y mentalidad de éxito con invitados de alto nivel.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/@TheDiaryOfACEO",
    tags: ["negocios", "emprendimiento", "mentalidad"],
  },
  {
    id: "yt-lewis-howes",
    title: "Lewis Howes Español",
    description: "Contenido de Lewis Howes sobre éxito, relaciones, negocios y desarrollo personal en español.",
    type: "youtube",
    category: "desarrollo-personal",
    url: "https://www.youtube.com/@LewisHowesEspañol",
    tags: ["éxito", "relaciones", "desarrollo personal"],
  },
  {
    id: "yt-alex-hormozi",
    title: "Alex Hormozi",
    description: "Adquisición de empresas, ventas de alto nivel y escalamiento de negocios rentables.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/@AlexHormozi",
    tags: ["negocios", "ventas", "escalamiento"],
  },
  {
    id: "yt-tony-robbins",
    title: "Tony Robbins Live",
    description: "Seminarios y contenido de Tony Robbins sobre éxito, finanzas y transformación personal.",
    type: "youtube",
    category: "desarrollo-personal",
    url: "https://www.youtube.com/@TonyRobbinsLive",
    tags: ["éxito", "finanzas", "transformación"],
  },
  {
    id: "yt-borja-vilaseca",
    title: "Borja Vilaseca",
    description: "Reflexiones sobre filosofía, desarrollo personal y transformación de consciencia.",
    type: "youtube",
    category: "espiritualidad",
    url: "https://www.youtube.com/@borjavilaseca",
    tags: ["filosofía", "consciencia", "transformación"],
  },
  {
    id: "yt-tengo-un-plan",
    title: "Tengo un Plan Podcast",
    description: "Podcast sobre emprendimiento, negocios y mentalidad de éxito.",
    type: "youtube",
    category: "negocios",
    url: "https://www.youtube.com/@tengounplanpodcast",
    tags: ["emprendimiento", "negocios", "podcast"],
  }
];
