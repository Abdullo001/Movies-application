import { Header } from "../../components/Header/Header";
import { Route,Routes} from "react-router-dom"
import { Home } from "./home/Home";
import { Popular } from "./Popular/Popular";
import {Top} from "./Top/Top"
import {Coming} from "./Coming/Coming"
import {Show} from "./Show/Show"
import { SinglePage } from "./singlePage/SinglePage";
import { TvSinglePage } from "./singlePage/TvSinglePage";
import { SearchPage } from "../search/Search";


export const PrivatePage = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popularMovies" element={<Popular/>}/>
        <Route path="/movie/:id" element={<SinglePage />} />
        <Route path="/tv/:id" element={<TvSinglePage />} />
        <Route path="/movie/:searchQuery" element={<SearchPage />} />
        <Route path="/topratedMovies" element={<Top/>}/>
        <Route path="/upComingMovies" element={<Coming/>}/>
        <Route path="/tvShow" element={<Show/>}/>
      </Routes>
      {/* <h1 className="display-1">Private page</h1> */}
    </>
  );
};
