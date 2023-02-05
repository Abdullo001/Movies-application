import "./SinglePage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const TvSinglePage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3//tv/${id}?`, {
        params: {
          api_key: "3a6e18fcdc951cb11feea5ceb4cc6b37",
        },
      })
      .then(function (response) {
        setFilm(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [id]);

  console.log(film);

  return (
    <div className="container">
      {film.name && (
        <div className="single-inner">
          <BackImgBox>
            <BackImg
              src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
              alt={film.title}
            />
          </BackImgBox>

          <SingleInfoWrapper>
            <SinglePoster
              src={`https://image.tmdb.org/t/p/w400${film.poster_path}`}
            />
            <SingleInfo>
              <h2 className="h1 fs-1 mb-3">
                <a
                  href={`${film.homepage}`}
                  className="homepage"
                  target={"_blank"}
                >
                  {film.original_name}
                </a>
                <small className="text-muted d-block  secondary">
                  {film.tagline}
                </small>
              </h2>

              <div className="rating-box">
                <span className="rating">
                  <AiFillStar className="star" />
                  {film.vote_average.toFixed(1)}
                </span>
                <span className="adult">{film?.adult ? "18+" : "12+"}</span>
              </div>

              <span className="year">
                {" "}
                Year: <span>{film.first_air_date}</span>
              </span>
              <span className="country">
                Country:{" "}
                <span>{film?.production_countries[0]?.iso_3166_1}</span>
              </span>

              <span className="budget">
                Budget:
                {film.budget ? (
                  <span>{`${film?.budget / 1000000} million $`}</span>
                ) : (
                  <span> not identified</span>
                )}
              </span>

              <span className="season">
                Seasons:
                <span>{film.number_of_seasons}</span>
              </span>

              <span className="episodes">
                Episodes:
                <span>{film.number_of_episodes}</span>
              </span>

              <span className="time">
                Time:{" "}
                <span>
                  {film.episode_run_time < 60
                    ? ` ${
                        film.episode_run_time -
                        Math.floor(film.episode_run_time / 60) * 60
                      } minutes`
                    : ` ${Math.floor(film.episode_run_time / 60)} hour
                        ${
                          film.episode_run_time -
                          Math.floor(film.episode_run_time / 60) * 60
                        } minutes`}
                </span>
              </span>

              <span className="languages">
                Spoken languages:{" "}
                {film.spoken_languages.map((e) => {
                  return (
                    <span key={e.iso_639_1}>{` ${e.english_name}  `}</span>
                  );
                })}
              </span>

              <span className="ganres">
                Ganres:{" "}
                {film.genres.map((e) => {
                  return <span key={e.id}>{` ${e.name}  `}</span>;
                })}
              </span>

              <p className="overview">{film.overview}</p>

              {film.title &&
                film.production_companies.map((e) => {
                  <div className="company">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${e.logo__path}`}
                    />
                    <h3 className="h2">{e.name}</h3>
                  </div>;
                })}
            </SingleInfo>
          </SingleInfoWrapper>
        </div>
      )}
    </div>
  );
};

const BackImgBox = styled.div``;

const BackImg = styled.img`
  position: absolute;
  top: calc(0% + 50px);
  left: calc(0%);
  z-index: -2;
  width: 100%;
  height: 70vh;
  vertical-align: middle;
  object-fit: cover;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  border-radius: 15px;
`;

const SinglePoster = styled.img`
  margin-right: 40px;
  border: 2px solid #ffffff90;
  border-radius: 8px;
`;

const SingleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  border-radius: 8px;
  background-color: #33333370;
`;

const SingleInfo = styled.div`
  color: #fff;
`;
