import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import MovieGallery from "./MovieGallery";
import { useSelector } from "react-redux";

const DiscoverMovies = ({ filteredData }) => {
  
  const date = new Date();
  const year = date.getFullYear();

  const { searchMovieSeries } = useSelector((state) => state.search);

  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const [movies, setMovies] = useState([]);

  const genreLink = selectedGenreId?.length > 0 ? `${key}&with_genres=${selectedGenreId}` : `${key}&with_genres=""`;

  const sortAscDesc = selectedSort?.length > 0 ? `${key}&sort_by=${selectedSort}` : `${key}&sort_by=popularity.desc`;

  const yearFilt = selectedYear?.length > 0 ? `${key}&primary_release_year=${selectedYear}` : `${key}&primary_release_year=${year}`;

  const sortByPage = selectedPage?.length > 0 ? `${key}&page=${selectedPage}` : `${key}&page=1`;

  const URL = `${base_url}/movie?${sortAscDesc}&${yearFilt}&${genreLink}&${sortByPage}`;

  const searchMovie = `https://api.themoviedb.org/3/search/movie?include_adult=true&${key}&query=${searchMovieSeries}`;

  const currentURL = searchMovieSeries === null || searchMovieSeries === "" ? URL : searchMovie;

  useEffect(() => {
    fetch(currentURL)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [currentURL, searchMovieSeries]);

  return (
    <div>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default DiscoverMovies;
