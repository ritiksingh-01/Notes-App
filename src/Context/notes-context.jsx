import { createContext, useReducer, useContext } from "react";
import { notesReducer } from "../reducer/NotesReducer";

const NotesContext = createContext();
const NotesProvider = ({children}) =>{
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };
  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );
    return (
        <NotesContext.Provider value={{title, text, notes , notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);
export {NotesProvider , useNotes};