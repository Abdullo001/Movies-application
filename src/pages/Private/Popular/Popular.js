import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from "../../../components/Card/Card";
import "./Popular.scss";


export const Popular = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3a6e18fcdc951cb11feea5ceb4cc6b37"
      )
      .then(function (response) {
        setFilms(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <h2 className="display-2 mb-5 text-center ">Popular Movies Page</h2>
        <ul className="popular-list">
          {films.map((film) => {
            return (
              <li key={film.id} className="popular-item">
                <Card film={film} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
