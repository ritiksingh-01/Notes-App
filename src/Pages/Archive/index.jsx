import { Fragment } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { useNotes } from "../../Context/notes-context";
import { NotesCard } from "../../Components/NotesCard";
export const Archive = () => {
    const {archive} = useNotes();
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex  flex-col align-center">
          <div className="flex flex-wrap gap-6 w-screen mt-7">
            {archive?.length > 0 &&
              archive.map(({ id, title, text}) => (
                <NotesCard
                  keys={id}
                  id={id}
                  title={title}
                  text={text}
                />
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
