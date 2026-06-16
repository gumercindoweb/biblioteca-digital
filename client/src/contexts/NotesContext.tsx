import React, { createContext, useContext, useState, useRef } from "react";
import { Resource, Note } from "@/lib/data";
import ReactPlayer from "react-player";

interface NotesContextType {
  selectedResource: Resource | null;
  setSelectedResource: (resource: Resource | null) => void;
  updateNotes: (resourceId: string, notes: Note[]) => void;
  getResourceNotes: (resourceId: string) => Note[];
  addNote: (resourceId: string, note: Note) => void;
  deleteNote: (resourceId: string, noteId: string) => void;
  // Video Player Support
  playerRef: React.MutableRefObject<any>;
  currentTime: number;
  setCurrentTime: (time: number) => void;
  seekTo: (seconds: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [notesMap, setNotesMap] = useState<Record<string, Note[]>>({});
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<any>(null);

  const updateNotes = (resourceId: string, notes: Note[]) => {
    setNotesMap((prev) => ({ ...prev, [resourceId]: notes }));
  };

  const getResourceNotes = (resourceId: string) => {
    return notesMap[resourceId] || [];
  };

  const addNote = (resourceId: string, note: Note) => {
    setNotesMap((prev) => ({
      ...prev,
      [resourceId]: [...(prev[resourceId] || []), note],
    }));
  };

  const deleteNote = (resourceId: string, noteId: string) => {
    setNotesMap((prev) => ({
      ...prev,
      [resourceId]: prev[resourceId]?.filter((n) => n.id !== noteId) || [],
    }));
  };

  const seekTo = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, "seconds");
    }
  };

  return (
    <NotesContext.Provider
      value={{
        selectedResource,
        setSelectedResource,
        updateNotes,
        getResourceNotes,
        addNote,
        deleteNote,
        playerRef,
        currentTime,
        setCurrentTime,
        seekTo,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes debe usarse dentro de NotesProvider");
  }
  return context;
}
