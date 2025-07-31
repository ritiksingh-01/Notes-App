import { Fragment } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { useNotes } from "../../Context/notes-context";
import { NotesCard } from "../../Components/NotesCard";
export const Bin = () => {
  const { bin, archive } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex  flex-col align-center">
          <div className="flex flex-wrap gap-6 w-screen mt-7">
            {bin?.length > 0 &&
              bin.map(({ id, title, text }) => (
                <NotesCard
                  keys={id}
                  id={id}
                  title={title}
                  text={text}
                  bin={bin}
                  archive={archive}
                />
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
