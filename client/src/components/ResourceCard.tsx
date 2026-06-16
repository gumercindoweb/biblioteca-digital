/**
 * RESOURCE CARD — Biblioteca Digital
 * Gumercindo Jiménez Branding
 */

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
  libro: "#0A8769", // Teal
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
      className="gj-card p-5 animate-fade-slide-up cursor-pointer transition-all hover:border-gj-teal/40 group"
      style={{ animationDelay: `${index * 40}ms` }}
      onClick={() => setSelectedResource(resource)}
    >
      {/* Indicador de notas */}
      {hasNotes && (
        <div className="flex items-center gap-1 mb-3 text-gj-teal">
          <FileText size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{notes.length} nota{notes.length > 1 ? "s" : ""}</span>
        </div>
      )}

      {/* Header de la tarjeta */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Badge de tipo */}
          <span
            className="flex items-center gap-1.5 px-2 py-0.5 border text-[9px] font-bold uppercase tracking-widest"
            style={{
              color,
              borderColor: `${color}40`,
              background: bg,
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
              className="px-2 py-0.5 border text-[9px] font-bold uppercase tracking-widest"
              style={{
                color: statusColors[resource.status],
                borderColor: `${statusColors[resource.status]}40`,
                background: `${statusColors[resource.status]}12`,
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
            className="shrink-0 p-1 text-gj-mint/20 hover:text-gj-teal transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Título */}
      <h3 className="mb-2 font-bold text-white text-base uppercase tracking-tight leading-tight group-hover:text-gj-teal transition-colors">
        {resource.title}
      </h3>

      {/* Autor */}
      {resource.author && (
        <p className="mb-3 text-[10px] font-bold text-gj-teal uppercase tracking-widest">
          {resource.author}
        </p>
      )}

      {/* Descripción */}
      {resource.description && (
        <p className="mb-4 text-xs text-gj-mint-light/60 leading-relaxed line-clamp-3">
          {resource.description}
        </p>
      )}

      {/* Tags */}
      {resource.tags && resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gj-teal/10">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gj-mint/20"
            >
              <Tag size={10} className="text-gj-teal/40" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
