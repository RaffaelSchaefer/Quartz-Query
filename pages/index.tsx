import type { NextPage } from "next";
import Searchbar from "../app/components/Searchbar";
import Result from "../app/components/Result";

/**
 * Main page of the site
 * @constructor
 * @author Raffael Elias Schäfer
 */
const Home: NextPage = () => {
  return (
    <div
      className="z-1 absolute top-0 left-0 flex flex-col-reverse md:flex-row w-full h-full overflow-hidden bg-slate-50">
      <div className="w-full md:w-1/2 md:hover:w-4/5 h-2/3 md:h-full bg-slate-50 md:ease-in-out md:duration-700">
        <Searchbar />
        <Result input={"Gold"} />
      </div>
      <div
        className="z-auto w-full md:w-1/2 md:hover:w-4/5 h-1/3 md:h-full bg-slate-200 rounded-b-lg md:rounded-l-lg p-2 shadow md:shadow-xl md:hover:shadow-2xl shadow-slate-500 md:shadow-slate-600 md:hover:shadow-slate-800 md:ease-in-out md:duration-700">
      </div>
    </div>
  );
};

export default Home;
