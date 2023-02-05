import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from "../../../components/Card/Card";
// import "./Popular.scss";
import { PaginitionComponent } from "../../../components/Paginition/Paginition";
import { TvCard } from "../../../components/Card/TvCard";

export const Show = () => {
  const [films, setFilms] = useState({
    isComplate: true,
    isError: false,
    data: [],
    total_pages: 0,
  });

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?`,{
          params:{
            api_key:"3a6e18fcdc951cb11feea5ceb4cc6b37",
            page:activePage,
          }
        }
      )
      .then(function (response) {
        setFilms({
          isComplate: false,
          isError: false,
          data: response.data.results,
          total_pages: response.data.total_pages>500?500:response.data.total_pages,
        });
        console.log(activePage);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [activePage]);



  return (
    <div className="container">
      <div className="inner">
        <h2 className="display-2 mb-5 text-center ">Top Rated Tv  Page</h2>
        <ul className="popular-list">
          {films.data.map((film) => {
            return (
              <li key={film.id} className="popular-item">
                <TvCard film={film} />
              </li>
            );
          })}
        </ul>
        
        <PaginitionComponent total={films.total_pages} setActivePage={setActivePage} />
      </div>
    </div>
  );
};
