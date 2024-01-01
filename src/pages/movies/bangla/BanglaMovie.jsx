import { useState } from "react";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";
import { usePerPageBengaliMovieListQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";

const BanglaMovie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie } = usePerPageBengaliMovieListQuery(currentPage);
  console.log(perPgaeMovie)

  return (
    <div className="min-h-screen">
      {/* ==================>> MOVIES <<==================*/}
      <div className="m-2">
        <Title>Bengali</Title>
      </div>

      {perPgaeMovie?.status === false ? (
        <div className="w-full flex justify-center my-5">
          <p className="text-[35px] text-white font-medium">No Data Found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard
              key={item?.id}
              item={item}
              redirect={`/movie/${item?.id}`}
            ></MovieCard>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      ></Pagination>
      
    </div>
  );
};

export default BanglaMovie;
