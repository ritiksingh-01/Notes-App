import { useNotes } from "../../Context/notes-context";

export const NotesCard = ({ id, title, text, archive, isPinned }) => {

  const {notesDispatch} = useNotes();

    const onPinClick = (id)=> {
      !isPinned ? notesDispatch({
        type : 'PIN',
        payload : {id}
      }) : notesDispatch({
        type : 'UNPIN',
        payload : {id}
      })
    }
    
    const onArchiveClick = (id) => {
      notesDispatch ({
        type : 'ARCHIVE',
        payload: {id}
      })
    }

    const findNotesInArchive = (archive = [], id) => {
      return archive.some(note => note.id === id);
    };

    const isNotesInArchive = findNotesInArchive(archive, id);
    
  return (
    <div className="border border-nautral-800 p-2 rounded-md w-[300px]" key={id}>
      <div className="flex justify-between border-b border-b-gray-300">
        <p>{title}</p>
        <button className="cursor-pointer" onClick={() => onPinClick(id)}>
          <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}> push_pin </span>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button className="cursor-pointer" onClick={() => onArchiveClick(id)}>
            <span className={!isNotesInArchive ? 'material-icons-outlined' : 'material-icons'}>archive</span>
          </button>
          <button className="cursor-pointer">
            <span className="material-icons-outlined">delete</span>
          </button>  
        </div>
      </div>
    </div>
  );
};