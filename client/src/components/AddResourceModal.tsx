/**
 * ADD RESOURCE MODAL — Biblioteca Digital
 * Gumercindo Jiménez Branding
 */

import { useState } from "react";
import { categories, ResourceType, Status } from "@/lib/data";
import { X, BookOpen, Headphones, Monitor, Youtube } from "lucide-react";

interface AddResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (resource: {
    title: string;
    author?: string;
    description?: string;
    type: ResourceType;
    category: string;
    status?: Status;
    url?: string;
    tags?: string[];
  }) => void;
}

export default function AddResourceModal({ isOpen, onClose, onAdd }: AddResourceModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<ResourceType>("libro");
  const [category, setCategory] = useState("marketing");
  const [status, setStatus] = useState<Status>("en-cola");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      author: author.trim() || undefined,
      description: description.trim() || undefined,
      type,
      category,
      status: type === "libro" ? status : undefined,
      url: url.trim() || undefined,
      tags: tags.trim() ? tags.split(",").map((t) => t.trim()).filter(Boolean) : undefined,
    });
    setTitle(""); setAuthor(""); setDescription(""); setUrl(""); setTags("");
    setType("libro"); setCategory("marketing"); setStatus("en-cola");
    onClose();
  };

  const inputClass = "w-full px-4 py-3 bg-gj-petrol border border-gj-teal/10 font-body text-sm text-white placeholder:text-gj-mint/20 outline-none focus:border-gj-teal transition-all";
  const labelClass = "text-[10px] font-bold uppercase tracking-[0.2em] text-gj-teal/60 mb-2 block";

  const typeOptions: Array<{ id: ResourceType; label: string; icon: React.ReactNode }> = [
    { id: "libro", label: "Libro", icon: <BookOpen size={16} /> },
    { id: "podcast", label: "Podcast", icon: <Headphones size={16} /> },
    { id: "plataforma", label: "Plataforma", icon: <Monitor size={16} /> },
    { id: "youtube", label: "YouTube", icon: <Youtube size={16} /> },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-lg bg-gj-petrol-dark border border-gj-teal/20 animate-fade-slide-up shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gj-teal/10">
          <h2 className="text-xl font-bold text-white uppercase tracking-tight">
            Agregar a la biblioteca
          </h2>
          <button onClick={onClose} className="p-1 text-gj-mint/20 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          {/* Tipo de recurso */}
          <div>
            <label className={labelClass}>Tipo de recurso</label>
            <div className="grid grid-cols-4 gap-2">
              {typeOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id)}
                  className={`flex flex-col items-center gap-2 py-3 border transition-all ${
                    type === t.id 
                      ? "bg-gj-teal/20 border-gj-teal text-white" 
                      : "bg-gj-petrol border-gj-teal/5 text-gj-mint/20 hover:text-gj-mint/40"
                  }`}
                >
                  {t.icon}
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Título */}
          <div>
            <label className={labelClass}>Título *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nombre del recurso"
              className={inputClass}
              required
            />
          </div>

          {/* Autor (solo para libros) */}
          {type === "libro" && (
            <div>
              <label className={labelClass}>Autor</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Nombre del autor"
                className={inputClass}
              />
            </div>
          )}

          {/* Categoría + Estado en fila */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Categoría</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              >
                {categories.filter(c => c.id !== "todos").map((cat) => (
                  <option key={cat.id} value={cat.id} className="bg-gj-petrol-dark">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Estado</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as Status)}
                className={inputClass}
              >
                <option value="en-cola" className="bg-gj-petrol-dark">En cola</option>
                <option value="leyendo" className="bg-gj-petrol-dark">Leyendo</option>
                <option value="completado" className="bg-gj-petrol-dark">Completado</option>
              </select>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className={labelClass}>Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Breve descripción del recurso..."
              rows={2}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* URL */}
          <div>
            <label className={labelClass}>URL (opcional)</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>

          {/* Tags */}
          <div>
            <label className={labelClass}>Tags (separados por coma)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="ventas, persuasión, mindset"
              className={inputClass}
            />
          </div>

          {/* Botones */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-gj-teal/10 text-gj-mint/40 font-bold uppercase tracking-widest text-xs hover:bg-gj-teal/5 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="gj-btn flex-1 text-xs"
            >
              Agregar al estante
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
