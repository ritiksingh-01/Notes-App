import { useNotes } from "../../Context/notes-context";

export const NotesCard = ({ id, title, text , isPinned }) => {

  const {notesDispatch} = useNotes();

    const onPinClick = (id)=> {
      !isPinned && notesDispatch({
        type : 'PIN',
        payload : {id}
      })
    }
  return (
    <div className="w-60 border border-nautral-800 p-2 rounded-md" key={id}>
      <div className="flex justify-between border-b border-b-gray-300">
        <p>{title}</p>
        <button className="cursor-pointer" onClick={onPinClick}>
          <span className={`${isPinned ? 'material-symbols-filled' : 'material-symbols-outlined '  }`}>keep</span>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button className="cursor-pointer">
            <span className={`material-symbols-outlined`}>archive</span>
          </button>
          <button className="cursor-pointer">
            <span className={`material-symbols-outlined`}>delete</span>
          </button>  
        </div>
      </div>
    </div>
  );
};
