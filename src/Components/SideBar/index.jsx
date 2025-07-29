import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {

    const getStyle = ({isActive}) =>{
        const style = 'flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
        return isActive ? `bg-indigo-800 text-slate-50 ${style}` : `hover:bg-indigo-800 hover:text-slate-50 ${style}`
    }

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-100  w-45 h-screen px-2 py-10">
      <NavLink to="/" className={getStyle}>
        <span class="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to='/archive' className={getStyle} >
        <span class="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to='/important' className={getStyle}>
        <span class="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to='/bin' className={getStyle}>
        <span class="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};

export default SideBar;
