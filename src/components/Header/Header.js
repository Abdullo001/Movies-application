import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
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

          <input type={"search"} placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};
