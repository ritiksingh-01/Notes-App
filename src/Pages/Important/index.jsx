import { Fragment } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { useNotes } from "../../Context/notes-context";
import { NotesCard } from "../../Components/NotesCard";

export const Important = () => {
  const { notes, archive, bin } = useNotes();
  const allImportantNotes = [
    ...notes.filter((note) => note.isImportant),
    ...archive.filter((note) => note.isImportant),
  ];

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col align-center">
          <div className="flex flex-wrap gap-6 w-screen mt-7">
            {allImportantNotes?.length > 0 &&
              allImportantNotes.map(
                ({ id, title, text, isPinned, isImportant }) => (
                  <NotesCard
                    keys={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                    isImportant={isImportant}
                    archive={archive}
                  />
                )
              )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
