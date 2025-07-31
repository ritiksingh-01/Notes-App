import { React, Fragment, useState, useReducer } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { NotesCard } from "../../Components/NotesCard";
import { useNotes } from "../../Context/notes-context";

const Home = () => {
  const { title, text, notes, archive, bin, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex  flex-col align-center w-screen mt-7">
          <div className="flex flex-col w-[350px] h-[150px] border-red-400 relative self-center">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 focus:outline-none border-b-0 p-1 rounded-t-md h-1/2"
              placeholder="Enter text"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-neutral-800 focus:outline-none border-t-0 p-1 rounded-b-md h-full"
              placeholder="Enter text"
            />
            <button
              disabled={title.length === 0 && text.length === 0}
              onClick={onAddClick}
              className="w-7 h-7 absolute bottom-0 right-0 cursor-pointer border bg-indigo-800 text-slate-50 rounded-full"
            >
              <span class="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="flex flex-col mt-14 gap-4 ml-10">
            {pinnedNotes?.length > 0 && (
              <div>
                <h3>Pinned Notes</h3>
                <div className="flex flex-wrap gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(
                      ({ id, title, text, isPinned, isImportant }) => (
                        <NotesCard
                          keys={id}
                          id={id}
                          title={title}
                          text={text}
                          isPinned={isPinned}
                          isImportant={isImportant}
                          archive={archive}
                          bin={bin}
                        />
                      )
                    )}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes?.length > 0 && <h3>Other Notes</h3>}
              <div className="flex flex-wrap gap-6">
                {otherNotes?.length > 0 &&
                  otherNotes.map(
                    ({ id, title, text, isPinned, isImportant }) => (
                      <NotesCard
                        keys={id}
                        id={id}
                        title={title}
                        text={text}
                        isPinned={isPinned}
                        isImportant={isImportant}
                        archive={archive}
                        bin={bin}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
