import React from "react";

function Searchbar() {
  return (
    <div className="flex flex-col">
      <input className="my-6 mx-20 px-2 font-semibold text-lg text-slate-900 bg-slate-50 rounded-lg shadow focus:shadow-2xl focus:text-2xl ease-in-out duration-700"/>
    </div>
  );
}

export default Searchbar;