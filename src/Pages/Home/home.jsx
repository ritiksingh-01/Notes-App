import { React, Fragment, useState, useReducer } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { notesReducer } from "../../reducer/NotesReducer";

const Home = () => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };
  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

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
              notes.map(({ id, title, text }) => (
                <div
                  className="w-60 border border-nautral-800 p-2 rounded-md"
                  key={id}
                >
                  <div className="flex justify-between border-b border-b-gray-300">
                    <p>{title}</p>
                    <button>
                      <span class="material-symbols-outlined">keep</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p>{text}</p>
                    <div className="ml-auto">
                      <button>
                        <span class="material-symbols-outlined">archive</span>
                      </button>
                      <button>
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
