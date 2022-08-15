import { Header } from "../../components/Header/Header";
import { Route,Routes} from "react-router-dom"
import { Home } from "./home/Home";
import { Popular } from "./Popular/Popular";
import {Top} from "./Top/Top"
import {Coming} from "./Coming/Coming"
import {Show} from "./Show/Show"

export const PrivatePage = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popularMovies/*" element={<Popular/>}/>
        <Route path="/topratedMovies" element={<Top/>}/>
        <Route path="/upComingMovies" element={<Coming/>}/>
        <Route path="/tvShow" element={<Show/>}/>
      </Routes>
      {/* <h1 className="display-1">Private page</h1> */}
    </>
  );
};
