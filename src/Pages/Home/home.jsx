import { React, Fragment, useState, useReducer } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { NotesCard } from "../../Components/NotesCard";
import { useNotes } from "../../Context/notes-context";

const Home = () => {

  const {title , text , notes , notesDispatch} = useNotes();


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
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="flex flex-col w-[300px] relative mt-5 px-1">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 focus:outline-none border-b-0 p-1 rounded-t-md"
              placeholder="Enter text"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-neutral-800 focus:outline-none border-t-0 p-1 rounded-b-md"
              placeholder="Enter text"
            />
            <button
              disabled={title.length === 0 && text.length === 0}
              onClick={onAddClick}
              className="w-7 h-7 absolute bottom-0 right-0 cursor-pointer border bg-indigo-800 text-slate-50 rounded-full"
            >
              <span class="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            {notes?.length > 0 &&
              notes.map(({ id, title, text, isPinned }) => (
                <NotesCard keys = {id} id = {id} title = {title} text = {text} isPinned = {isPinned} />
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
