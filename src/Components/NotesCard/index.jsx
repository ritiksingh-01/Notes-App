import { useNotes } from "../../Context/notes-context";

export const NotesCard = ({
  id,
  title,
  text,
  archive,
  bin,
  isPinned,
  isImportant = false,
}) => {
  const { notesDispatch } = useNotes();

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    if (isNotesInBin) {
      notesDispatch({
        type: "DELETE_PERMANENTLY",
        payload: { id },
      });
    } else if (isNotesInArchive) {
      notesDispatch({
        type: "UNARCHIVE",
        payload: { id },
      });
    } else {
      notesDispatch({
        type: "ARCHIVE",
        payload: { id },
      });
    }
  };

  const findNotesInArchive = (archive = [], id) => {
    return archive.some((note) => note.id === id);
  };
  const isNotesInArchive = findNotesInArchive(archive, id);

  const onBinClick = (id) => {
    if (isNotesInBin) {
      notesDispatch({
        type: "UNBIN",
        payload: { id },
      });
    } else {
      if (isNotesInArchive) {
        notesDispatch({
          type: "ARCHIVE_TO_BIN",
          payload: { id },
        });
      } else {
        notesDispatch({
          type: "BIN",
          payload: { id },
        });
      }
    }
  };

  const findNotesInBin = (bin = [], id) => {
    return bin.some((note) => note.id === id);
  };
  const isNotesInBin = findNotesInBin(bin, id);

  const onImportantClick = (id) => {
    if (!isImportant) {
      notesDispatch({
        type: "IMPORTANT",
        payload: { id },
      });
    } else {
      notesDispatch({
        type: "UNIMPORTANT",
        payload: { id },
      });
    }
  };

  return (
    <div
      className="border border-nautral-800 p-2 rounded-md w-[300px]" key={id}>
      <div className="flex justify-between border-b border-b-gray-300">
        <p>{title}</p>
        <button className="cursor-pointer" onClick={() => onPinClick(id)}>
          <span className={isPinned ? "material-icons" : "material-icons-outlined"}>{" "} push_pin{" "} </span>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button className="cursor-pointer" onClick={() => onArchiveClick(id)}>
            <span
              className={
                !isNotesInArchive ? "material-icons-outlined" : "material-icons"
              }
            >
              {isNotesInBin ? "delete_forever" : "archive"}
            </span>
          </button>
          <button className="cursor-pointer"onClick={() => onImportantClick(id)}>
            <span className={isImportant ? "material-icons" : "material-icons-outlined"}>book</span>
          </button>
          <button className="cursor-pointer" onClick={() => onBinClick(id)}>
            <span className={!isNotesInBin ? "material-icons-outlined" : "material-icons"}>delete </span>
          </button>
        </div>
      </div>
    </div>
  );
};