import React from 'react';
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen bg-slate-200 hover:w-3/4 ease-in-out duration-700">
        <Searchbar/>
      </div>
      <div className="w-1/2 h-screen bg-slate-50 shadow-2xl hover:w-3/4 hover:shadow-3xl ease-in-out duration-700">
      </div>
    </div>
  );
}

export default App;
