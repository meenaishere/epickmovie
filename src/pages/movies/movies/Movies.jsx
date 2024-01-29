import { useEffect, useState } from "react";
import DomainList from "../../../components/domain-list/DomainList";
import MovieCard from "../../../components/movie-card/MovieCard";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import { useSiteNameUSerQuery } from "../../../redux/features/settings/settingApi";
import MoviePagination from "./MoviePagination";

const Movies = () => {
  const storedPage = JSON.parse(localStorage.getItem("MovieCurrentPage")) || 1;
  const [currentPage, setCurrentPage] = useState(storedPage || 1);

  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentPage);
  const { data: siteName } = useSiteNameUSerQuery();

  console.log(perPgaeMovie);

  useEffect(() => {
    localStorage.setItem("MovieCurrentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName?.data}</title>
        <meta
          name="description"
          content="Unlimited Movies and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <div className="w-full flex justify-start mt-[22px] mb-[20px] lg:mb-0 ml-20 lg:ml-0">
        <Title>Movies</Title>
      </div>

      {/* ==================>> Movies <<==================*/}
      {isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] md:gap-auto my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard
              key={item?.id}
              item={item}
              redirect={`/movie/${item?.id}`}
            ></MovieCard>
          ))}
        </div>
      )}

      <MoviePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default Movies;
