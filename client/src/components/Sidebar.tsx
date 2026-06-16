/**
 * SIDEBAR — Biblioteca Digital
 * Gumercindo Jiménez Branding
 * Mantiene estructura original pero con colores GJ y Logo
 */

import { useState } from "react";
import { categories, ResourceType } from "@/lib/data";
import { BookOpen, Headphones, Monitor, Youtube, Library, Search, X, Plus } from "lucide-react";

const typeIcons: Record<ResourceType, React.ReactNode> = {
  libro: <BookOpen size={14} />,
  podcast: <Headphones size={14} />,
  plataforma: <Monitor size={14} />,
  youtube: <Youtube size={14} />,
};

interface SidebarProps {
  selectedCategory: string;
  selectedType: ResourceType | "todos";
  searchQuery: string;
  onCategoryChange: (cat: string) => void;
  onTypeChange: (type: ResourceType | "todos") => void;
  onSearchChange: (q: string) => void;
  totalCount: number;
  onAddResource?: () => void;
}

export default function Sidebar({
  selectedCategory,
  selectedType,
  searchQuery,
  onCategoryChange,
  onTypeChange,
  onSearchChange,
  totalCount,
  onAddResource,
}: SidebarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  const allTypes: Array<{ id: ResourceType | "todos"; label: string }> = [
    { id: "todos", label: "Todos los tipos" },
    { id: "libro", label: "Libros" },
    { id: "podcast", label: "Podcasts" },
    { id: "plataforma", label: "Plataformas" },
    { id: "youtube", label: "YouTube" },
  ];

  return (
    <aside
      className="w-[240px] min-w-[240px] h-screen sticky top-0 flex flex-col overflow-y-auto bg-gj-petrol-dark border-r border-gj-teal/10 font-body"
    >
      {/* Logo + Nombre */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex flex-col gap-4 mb-2">
          <img
            src="/assets/logo-gj.webp"
            alt="Gumercindo Jiménez Logo"
            className="w-full max-w-[140px] object-contain"
          />
          <div>
            <h1 className="text-sm font-bold text-white uppercase tracking-[0.2em] leading-tight">
              Biblioteca <br/> Digital
            </h1>
          </div>
        </div>
        <div className="h-px bg-gj-teal/20 mt-4" />
      </div>

      {/* Buscador */}
      <div className="px-4 pb-6">
        <div
          className={`flex items-center gap-2 px-3 py-2 bg-gj-petrol border transition-all ${
            searchFocused ? "border-gj-teal" : "border-gj-teal/10"
          }`}
          style={{ borderRadius: '0px' }}
        >
          <Search size={14} className="text-gj-teal" />
          <input
            type="text"
            placeholder="Buscá..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 bg-transparent outline-none text-white text-xs placeholder:text-gj-mint/20"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")}>
              <X size={14} className="text-gj-mint/20 hover:text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Categorías */}
      <nav className="flex-1 px-3">
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gj-teal/60">
          Estantes
        </p>

        <ul className="space-y-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <li key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-all ${
                    isActive 
                      ? "bg-gj-teal/10 text-white border-l-2 border-gj-teal" 
                      : "text-gj-mint/40 hover:text-gj-mint hover:bg-gj-teal/5 border-l-2 border-transparent"
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className={`font-mono text-[10px] font-bold min-w-[20px] ${isActive ? "text-gj-teal" : "text-gj-mint/20"}`}>
                    {cat.numeral}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest truncate">{cat.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Separador */}
        <div className="h-px bg-gj-teal/10 my-6 mx-3" />

        {/* Filtro por tipo */}
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gj-teal/60">
          Tipo
        </p>

        <ul className="space-y-1">
          {allTypes.map((t) => {
            const isActive = selectedType === t.id;
            return (
              <li key={t.id}>
                <button
                  onClick={() => onTypeChange(t.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-all ${
                    isActive 
                      ? "bg-gj-teal/10 text-white border-l-2 border-gj-teal" 
                      : "text-gj-mint/40 hover:text-gj-mint hover:bg-gj-teal/5 border-l-2 border-transparent"
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className={isActive ? "text-gj-teal" : "text-gj-mint/20"}>
                    {t.id !== "todos" ? typeIcons[t.id as ResourceType] : <Library size={14} />}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest">{t.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-6 mt-auto">
        <div className="h-px bg-gj-teal/10 mb-6" />
        <button
          onClick={onAddResource}
          className="gj-btn w-full flex items-center justify-center gap-2 py-2.5 text-xs"
          style={{ borderRadius: '0px' }}
        >
          <Plus size={14} />
          Agregar recurso
        </button>
        <p className="text-center mt-4 font-mono text-[9px] uppercase tracking-widest text-gj-mint/20">
          {totalCount} recursos en tu estante
        </p>
      </div>
    </aside>
  );
}
