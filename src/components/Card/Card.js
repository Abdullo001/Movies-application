import "./Card.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = ({ film }) => {
  return (
    <Link to={`/movie/${film.id}`} className="card">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.original_title}
      />

      <div className="card-info">
        <h3 className="card-title">{film.original_title}</h3>
        <span className="card-data">{film.release_date}</span>

        
      </div>
    </Link>
  );
};

// const coverage = styled.div``;

// const popularity = styled.span``;

// const vote_average = styled.span``;
