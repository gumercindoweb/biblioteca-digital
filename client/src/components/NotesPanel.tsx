import React, { useState } from "react";
import { X, Plus, Trash2, Clock, PlayCircle } from "lucide-react";
import { useNotes } from "@/contexts/NotesContext";
import { Note, NoteType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from "nanoid";
import ReactPlayer from "react-player";

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
  const { 
    selectedResource, 
    setSelectedResource, 
    getResourceNotes, 
    addNote, 
    deleteNote,
    playerRef,
    currentTime,
    setCurrentTime,
    seekTo
  } = useNotes();
  
  const [activeTab, setActiveTab] = useState<NoteType>("aprendizaje");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [capturedTimestamp, setCapturedTimestamp] = useState<number | null>(null);

  if (!selectedResource) return null;

  const notes = getResourceNotes(selectedResource.id);
  const tabNotes = notes.filter((n) => n.type === activeTab);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  const handleCaptureTimestamp = () => {
    setCapturedTimestamp(currentTime);
  };

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      const newNote: Note = {
        id: nanoid(),
        type: activeTab,
        content: newNoteContent,
        createdAt: new Date().toISOString(),
        timestamp: capturedTimestamp || undefined
      };
      addNote(selectedResource.id, newNote);
      setNewNoteContent("");
      setIsAddingNote(false);
      setCapturedTimestamp(null);
    }
  };

  const isVideo = selectedResource.type === "podcast" || selectedResource.type === "youtube";

  return (
    <div className="fixed right-0 top-0 h-screen w-[450px] bg-gj-petrol-dark border-l border-gj-teal/10 shadow-2xl z-40 flex flex-col overflow-hidden font-body">
      {/* Header */}
      <div className="p-6 border-b border-gj-teal/10 flex items-start justify-between">
        <div className="flex-1 pr-4">
          <h2 className="text-lg font-bold text-white mb-1 line-clamp-2 uppercase tracking-tight">
            {selectedResource.title}
          </h2>
          {selectedResource.author && (
            <p className="text-xs text-gj-teal italic">{selectedResource.author}</p>
          )}
        </div>
        <button
          onClick={() => setSelectedResource(null)}
          className="text-gj-mint/40 hover:text-white transition-colors flex-shrink-0"
        >
          <X size={20} />
        </button>
      </div>

      {/* Video Player Section */}
      {isVideo && selectedResource.url && (
        <div className="w-full aspect-video bg-black border-b border-gj-teal/10 relative group">
          <ReactPlayer
            ref={playerRef}
            url={selectedResource.url}
            width="100%"
            height="100%"
            controls
            onProgress={(state: any) => setCurrentTime(state.playedSeconds)}
          />
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-gj-teal/10 px-4 pt-3 gap-1">
        {(["aprendizaje", "semilla", "conexion"] as NoteType[]).map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`pb-3 px-3 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${
              activeTab === type
                ? "text-white border-gj-teal"
                : "text-gj-mint/20 border-transparent hover:text-gj-mint/60"
            }`}
          >
            {noteTypeConfig[type].label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {tabNotes.length === 0 && !isAddingNote && (
          <div className="text-center py-12 text-gj-mint/20">
            <p className="text-xs uppercase tracking-widest">
              No hay {noteTypeConfig[activeTab].label.toLowerCase()}s aún
            </p>
            <p className="text-[10px] mt-2 opacity-60">Hacé clic en "Agregar" para empezar</p>
          </div>
        )}

        {tabNotes.map((note) => (
          <div
            key={note.id}
            className="p-4 border border-gj-teal/5 hover:border-gj-teal/20 transition-all group"
            style={{ backgroundColor: noteTypeConfig[note.type].bgColor, borderRadius: '0px' }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                {note.timestamp !== undefined && (
                  <button 
                    onClick={() => seekTo(note.timestamp!)}
                    className="flex items-center gap-1 mb-2 text-gj-teal hover:text-white transition-colors"
                  >
                    <PlayCircle size={12} />
                    <span className="text-[10px] font-mono font-bold">{formatTime(note.timestamp)}</span>
                  </button>
                )}
                <p className="text-xs text-gj-mint/80 leading-relaxed whitespace-pre-wrap">
                  {note.content}
                </p>
                <p className="text-[9px] text-gj-mint/20 mt-3 font-mono uppercase tracking-widest">
                  {new Date(note.createdAt).toLocaleDateString("es-AR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <button
                onClick={() => deleteNote(selectedResource.id, note.id)}
                className="text-gj-mint/10 hover:text-red-400 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}

        {isAddingNote && (
          <div className="p-4 border border-gj-teal/20 space-y-3 bg-gj-petrol" style={{ borderRadius: '0px' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gj-teal">
                Nueva {noteTypeConfig[activeTab].label}
              </span>
              {isVideo && (
                <button 
                  onClick={handleCaptureTimestamp}
                  className={`flex items-center gap-1.5 px-2 py-1 border transition-all ${
                    capturedTimestamp !== null 
                      ? "bg-gj-teal text-white border-gj-teal" 
                      : "text-gj-teal border-gj-teal/30 hover:bg-gj-teal/10"
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <Clock size={10} />
                  <span className="text-[9px] font-bold uppercase">
                    {capturedTimestamp !== null ? formatTime(capturedTimestamp) : "Capturar Minuto"}
                  </span>
                </button>
              )}
            </div>
            <Textarea
              placeholder={`Escribí tu ${noteTypeConfig[activeTab].label.toLowerCase()}...`}
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              className="min-h-24 resize-none text-xs bg-gj-petrol-dark border-gj-teal/10 text-white focus:border-gj-teal transition-all"
              style={{ borderRadius: '0px' }}
              autoFocus
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddNote}
                className="flex-1 text-white text-[10px] font-bold uppercase tracking-widest"
                style={{ backgroundColor: noteTypeConfig[activeTab].color, borderRadius: '0px' }}
              >
                Guardar
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsAddingNote(false);
                  setNewNoteContent("");
                  setCapturedTimestamp(null);
                }}
                className="flex-1 border-gj-teal/10 text-gj-mint/40 hover:text-white text-[10px] font-bold uppercase tracking-widest"
                style={{ borderRadius: '0px' }}
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Add Note Button */}
      {!isAddingNote && (
        <div className="p-6 border-t border-gj-teal/10">
          <Button
            onClick={() => setIsAddingNote(true)}
            className="w-full text-white text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: noteTypeConfig[activeTab].color, borderRadius: '0px' }}
          >
            <Plus size={14} className="mr-2" />
            Agregar {noteTypeConfig[activeTab].label.toLowerCase()}
          </Button>
        </div>
      )}
    </div>
  );
}
