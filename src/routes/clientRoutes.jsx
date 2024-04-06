import Home from "../pages/home/Home";
import BanglaMovie from "../pages/movies/bangla/BanglaMovie";
import EnglishMovies from "../pages/movies/english/EnglishMovies";
import FilterList from "../pages/movies/filter-list/FilterList";
import HindiMovies from "../pages/movies/hindi/HindiMovies";
import MovieDetails from "../pages/movies/movie-details/MovieDetails";
import Movies from "../pages/movies/movies/Movies";
import SearchList from "../pages/movies/search-list/SearchList";
import NotFound from "../pages/not-found/NotFound";
import TvShow from "../pages/tv-show/TvShow";
import TvShowDetails from "../pages/tv-show/TvShowDetails";

export const clientRoutes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/movies/page/:id",
    element: <Movies />,
  },

  {
    path: "/bangla/page/:id",
    element: <BanglaMovie />,
  },

  {
    path: "/hindi/page/:id",
    element: <HindiMovies />,
  },

  {
    path: "/english/page/:id",
    element: <EnglishMovies />,
  },

  {
    path: "/tv-show/page/:id",
    element: <TvShow />,
  },

  {
    path: "/movie/:id/:title",
    element: <MovieDetails />,
  },

  {
    path: "/series/:id/:title",
    element: <TvShowDetails />,
  },

  {
    path: "/search-list/:string",
    element: <SearchList />,
  },
  
  {
    path: "/terms/:string/page/:id",
    element: <FilterList />,
  },

  {
    path: "/not-found",
    element: <NotFound />,
  },
];
