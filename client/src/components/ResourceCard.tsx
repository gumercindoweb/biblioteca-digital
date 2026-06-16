// ============================================================
// RESOURCE CARD — Biblioteca Digital
// Gumercindo Jiménez Branding
// Mantiene estructura de Archivo Nocturno pero con colores GJ
// ============================================================

import { Resource, ResourceType, statusColors, statusLabels } from "@/lib/data";
import { BookOpen, Headphones, Monitor, Youtube, ExternalLink, Tag, FileText } from "lucide-react";
import { useNotes } from "@/contexts/NotesContext";

const typeIcons: Record<ResourceType, React.ReactNode> = {
  libro: <BookOpen size={13} />,
  podcast: <Headphones size={13} />,
  plataforma: <Monitor size={13} />,
  youtube: <Youtube size={13} />,
};

const typeColors: Record<ResourceType, string> = {
  libro: "#0A8769",
  podcast: "#A8C2C0",
  plataforma: "#E6F2F1",
  youtube: "#0A8769",
};

const typeBg: Record<ResourceType, string> = {
  libro: "rgba(10, 135, 105, 0.12)",
  podcast: "rgba(168, 194, 192, 0.12)",
  plataforma: "rgba(230, 242, 241, 0.12)",
  youtube: "rgba(10, 135, 105, 0.12)",
};

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  const { setSelectedResource, getResourceNotes } = useNotes();
  const notes = getResourceNotes(resource.id);
  const hasNotes = notes.length > 0;
  const color = typeColors[resource.type];
  const bg = typeBg[resource.type];

  return (
    <div
      className="gj-card p-4 animate-fade-slide-up cursor-pointer transition-all hover:shadow-lg hover:border-gj-teal/50"
      style={{ 
        animationDelay: `${index * 40}ms`,
        borderRadius: '0px'
      }}
      onClick={() => setSelectedResource(resource)}
    >
      {/* Indicador de notas */}
      {hasNotes && (
        <div className="flex items-center gap-1 mb-2 text-gj-teal">
          <FileText size={13} />
          <span className="text-xs font-medium">{notes.length} nota{notes.length > 1 ? "s" : ""}</span>
        </div>
      )}

      {/* Header de la tarjeta */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Badge de tipo */}
          <span
            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border"
            style={{
              color,
              borderColor: `${color}40`,
              background: bg,
              borderRadius: '0px'
            }}
          >
            {typeIcons[resource.type]}
            {resource.type === "libro"
              ? "Libro"
              : resource.type === "podcast"
              ? "Podcast"
              : resource.type === "plataforma"
              ? "Plataforma"
              : "YouTube"}
          </span>

          {/* Badge de estado */}
          {resource.status && (
            <span
              className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border"
              style={{
                color: statusColors[resource.status],
                borderColor: `${statusColors[resource.status]}40`,
                background: `${statusColors[resource.status]}12`,
                borderRadius: '0px'
              }}
            >
              {statusLabels[resource.status]}
            </span>
          )}
        </div>

        {/* Enlace externo */}
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1 transition-colors"
            style={{ color: "#A8C2C0" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0A8769")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8C2C0")}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {/* Título */}
      <h3
        className="mb-1 leading-snug"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#FFFFFF",
          lineHeight: 1.3,
        }}
      >
        {resource.title}
      </h3>

      {/* Autor */}
      {resource.author && (
        <p
          className="mb-2"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.75rem",
            color: "#0A8769",
            fontStyle: "italic",
          }}
        >
          {resource.author}
        </p>
      )}

      {/* Descripción */}
      {resource.description && (
        <p
          className="mb-3 leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.78rem",
            color: "#A8C2C0",
            lineHeight: 1.55,
          }}
        >
          {resource.description}
        </p>
      )}

      {/* Tags */}
      {resource.tags && resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2" style={{ borderTop: "1px solid rgba(10, 135, 105, 0.1)" }}>
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.58rem",
                color: "rgba(168, 194, 192, 0.6)",
                letterSpacing: "0.04em",
              }}
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
