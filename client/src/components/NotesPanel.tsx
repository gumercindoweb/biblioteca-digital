import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { useNotes } from "@/contexts/NotesContext";
import { Note, NoteType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from "nanoid";

const noteTypeConfig: Record<NoteType, { label: string; color: string; bgColor: string }> = {
  aprendizaje: {
    label: "Aprendizaje",
    color: "#0A8769",
    bgColor: "rgba(10, 135, 105, 0.08)",
  },
  semilla: {
    label: "Semilla",
    color: "#A8C2C0",
    bgColor: "rgba(168, 194, 192, 0.08)",
  },
  conexion: {
    label: "Conexión",
    color: "#E6F2F1",
    bgColor: "rgba(230, 242, 241, 0.08)",
  },
};

export function NotesPanel() {
  const { selectedResource, setSelectedResource, getResourceNotes, addNote, deleteNote } =
    useNotes();
  const [activeTab, setActiveTab] = useState<NoteType>("aprendizaje");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  if (!selectedResource) return null;

  const notes = getResourceNotes(selectedResource.id);
  const tabNotes = notes.filter((n) => n.type === activeTab);

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      const newNote: Note = {
        id: nanoid(),
        type: activeTab,
        content: newNoteContent,
        createdAt: new Date().toISOString(),
      };
      addNote(selectedResource.id, newNote);
      setNewNoteContent("");
      setIsAddingNote(false);
    }
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-gj-petrol-dark border-l border-gj-teal/10 shadow-2xl z-40 flex flex-col overflow-hidden font-body">
      {/* Header */}
      <div className="p-8 border-b border-gj-teal/10 flex items-start justify-between bg-gj-petrol-dark">
        <div className="flex-1 pr-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-tight mb-2 line-clamp-2">
            {selectedResource.title}
          </h2>
          {selectedResource.author && (
            <p className="text-[10px] font-bold text-gj-teal uppercase tracking-widest">{selectedResource.author}</p>
          )}
        </div>
        <button
          onClick={() => setSelectedResource(null)}
          className="text-gj-mint/20 hover:text-white transition-colors flex-shrink-0"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gj-teal/10 px-6 pt-4 gap-2">
        {(["aprendizaje", "semilla", "conexion"] as NoteType[]).map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`pb-4 px-3 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${
              activeTab === type
                ? "text-white border-gj-teal"
                : "text-gj-mint/20 border-transparent hover:text-gj-mint/40"
            }`}
          >
            {noteTypeConfig[type].label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {tabNotes.length === 0 && !isAddingNote && (
          <div className="text-center py-20 border border-dashed border-gj-teal/10">
            <p className="text-xs font-bold uppercase tracking-widest text-gj-mint/20">
              No hay {noteTypeConfig[activeTab].label.toLowerCase()}s aún
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gj-mint/10 mt-2">Hacé click abajo para empezar</p>
          </div>
        )}

        {tabNotes.map((note) => (
          <div
            key={note.id}
            className="p-5 border border-gj-teal/10 hover:border-gj-teal/30 transition-all bg-gj-petrol"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gj-mint-light leading-relaxed whitespace-pre-wrap">
                  {note.content}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gj-mint/20 mt-4">
                  {new Date(note.createdAt).toLocaleDateString("es-AR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <button
                onClick={() => deleteNote(selectedResource.id, note.id)}
                className="text-gj-mint/10 hover:text-destructive transition-colors flex-shrink-0"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

        {isAddingNote && (
          <div className="p-6 border border-gj-teal/20 bg-gj-petrol space-y-4">
            <Textarea
              placeholder={`Escribí tu ${noteTypeConfig[activeTab].label.toLowerCase()}...`}
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              className="min-h-32 bg-gj-petrol-dark border-gj-teal/10 text-white text-sm placeholder:text-gj-mint/20 resize-none"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleAddNote}
                className="gj-btn flex-1 text-xs py-2"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setIsAddingNote(false);
                  setNewNoteContent("");
                }}
                className="flex-1 border border-gj-teal/10 text-gj-mint/20 font-bold uppercase tracking-widest text-[10px] hover:bg-gj-teal/5 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Add Note Button */}
      {!isAddingNote && (
        <div className="p-8 border-t border-gj-teal/10 bg-gj-petrol-dark">
          <button
            onClick={() => setIsAddingNote(true)}
            className="gj-btn w-full text-xs"
          >
            <Plus size={16} className="mr-2 inline-block" />
            Agregar {noteTypeConfig[activeTab].label.toLowerCase()}
          </button>
        </div>
      )}
    </div>
  );
}
