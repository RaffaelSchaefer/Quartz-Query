import type {NextPage} from 'next'
import Searchbar from "../components/Searchbar";

const Home: NextPage = () => {
    return (
        <div className="absolute top-0 left-0 flex flex-col md:flex-row w-full h-full bg-slate-50">
            <div className="w-full md:w-1/2 md:hover:w-4/5 h-1/2 md:h-full bg-slate-50 md:ease-in-out md:duration-700">
                <Searchbar/>
            </div>
            <div
                className="w-full md:w-1/2 md:hover:w-4/5 h-1/2 md:h-full bg-slate-200 rounded-t-lg md:rounded-l-lg p-2 md:shadow-xl md:hover:shadow-2xl md:shadow-slate-600 md:hover:shadow-slate-800 md:ease-in-out md:duration-700">Result
            </div>
        </div>
    )
}

export default Home
