import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {

  const [inputVal,setInputVal]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    if(inputVal.trim().length){
      navigate('/search/'+inputVal)
    }else{
      navigate("/")
    }
  },[inputVal])

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="header-navbar">
            <ol className="header-list">
              <li className="header-item">
                <Link className="header-link" to={"/"}>Home</Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to={"/popularMovies"}>Popular Movies</Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to={"/topratedMovies"}>Top-rated Movies</Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to={"/upComingMovies"}>Up Coming Movies</Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to={"/tvShow"}>Tv-Show</Link>
              </li>
            </ol>
          </nav>

          <input  type={"search"} onKeyUp={(evt)=>{setInputVal(evt.target.value)}} placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};
