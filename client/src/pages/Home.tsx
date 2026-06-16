/**
 * HOME — Biblioteca Digital
 * Gumercindo Jiménez Branding
 * Mantiene estructura original de Archivo Nocturno
 */

import { useState, useMemo, useCallback } from "react";
import { resources as initialResources, categories, Resource, ResourceType, Category } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import ResourceCard from "@/components/ResourceCard";
import AddResourceModal from "@/components/AddResourceModal";
import { BookOpen, Headphones, Monitor, Youtube, Grid3X3, List } from "lucide-react";
import { nanoid } from "nanoid";

const typeIcons: Record<ResourceType, React.ReactNode> = {
  libro: <BookOpen size={16} />,
  podcast: <Headphones size={16} />,
  plataforma: <Monitor size={16} />,
  youtube: <Youtube size={16} />,
};

export default function Home() {
  const [allResources, setAllResources] = useState<Resource[]>(initialResources);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedType, setSelectedType] = useState<ResourceType | "todos">("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filtrado de recursos
  const filteredResources = useMemo(() => {
    return allResources.filter((r) => {
      const matchCat = selectedCategory === "todos" || r.category === selectedCategory;
      const matchType = selectedType === "todos" || r.type === selectedType;
      const matchSearch =
        !searchQuery ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.author?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (r.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (r.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ?? false);
      return matchCat && matchType && matchSearch;
    });
  }, [allResources, selectedCategory, selectedType, searchQuery]);

  // Categoría activa
  const activeCat: Category | undefined = categories.find((c) => c.id === selectedCategory);

  // Conteo por tipo en la vista actual
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { libro: 0, podcast: 0, plataforma: 0, youtube: 0 };
    filteredResources.forEach((r) => { 
      if (counts[r.type] !== undefined) {
        counts[r.type]++;
      }
    });
    return counts;
  }, [filteredResources]);

  const handleAddResource = useCallback(
    (data: Omit<Resource, "id">) => {
      setAllResources((prev) => [...prev, { ...data, id: nanoid() }]);
    },
    []
  );

  return (
    <div className="flex min-h-screen bg-gj-petrol font-body">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onSearchChange={setSearchQuery}
        totalCount={allResources.length}
        onAddResource={() => setIsModalOpen(true)}
      />

      {/* Área principal */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Header de sección */}
        <div
          className="relative px-10 pt-12 pb-10 bg-gj-petrol-dark border-b border-gj-teal/10"
        >
          <div className="relative z-10">
            {/* Numeral de categoría */}
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gj-teal">
              {activeCat?.numeral || "∞"} — Estante
            </p>

            {/* Título de categoría */}
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight mb-4">
              {activeCat?.name || "Todos"}
            </h2>

            {/* Línea decorativa */}
            <div className="h-1 bg-gj-teal w-20 mb-6" />

            {/* Contadores por tipo */}
            <div className="flex flex-wrap gap-6">
              {(Object.entries(typeCounts) as [ResourceType, number][])
                .filter(([, count]) => count > 0)
                .map(([type, count]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="text-gj-teal">{typeIcons[type]}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gj-mint/40">
                      {count} {type === "libro" ? "libros" : type === "podcast" ? "podcasts" : type === "plataforma" ? "plataformas" : "canales"}
                    </span>
                  </div>
                ))}
              {filteredResources.length === 0 && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-gj-mint/20">
                  Sin resultados
                </span>
              )}
            </div>
          </div>

          {/* Controles de vista */}
          <div className="absolute right-10 bottom-10 flex items-center gap-3">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors ${viewMode === "grid" ? "text-gj-teal bg-gj-teal/10" : "text-gj-mint/20 hover:text-white"}`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 transition-colors ${viewMode === "list" ? "text-gj-teal bg-gj-teal/10" : "text-gj-mint/20 hover:text-white"}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Contenido: Grid de tarjetas */}
        <div className="flex-1 p-10 overflow-y-auto">
          {filteredResources.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-6"
                  : "flex flex-col gap-4"
              }
              style={
                viewMode === "grid"
                  ? { gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }
                  : {}
              }
            >
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="flex flex-col items-center justify-center py-32 border border-dashed border-gj-teal/10">
              <div className="w-20 h-20 bg-gj-petrol-dark flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-gj-teal/20" />
              </div>
              <p className="text-lg font-bold text-white uppercase tracking-widest mb-2">
                Este estante está vacío
              </p>
              <p className="text-xs text-gj-mint/40 uppercase tracking-widest">
                Agregá tu primer recurso a esta categoría
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="gj-btn mt-8"
              >
                Agregar recurso
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal para agregar recursos */}
      <AddResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddResource}
      />
    </div>
  );
}
