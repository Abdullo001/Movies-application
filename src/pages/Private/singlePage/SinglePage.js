import "./SinglePage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const SinglePage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3a6e18fcdc951cb11feea5ceb4cc6b37`
      )
      .then(function (response) {
        setFilm(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [id]);

  return (
    <div className="container">
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
            <h2 className="h1 mb-0">
              {film.title}
              <small class="text-muted d-block text-black-50">{film.tagline}</small>
            </h2>
          </SingleInfo>
        </SingleInfoWrapper>
      </div>
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
