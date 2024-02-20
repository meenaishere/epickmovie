import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Title from "../../utils/Title";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import TvPagination from "./TvPagination";
import { useLocation } from "react-router-dom";
import { useAllConfigQuery } from "../../redux/features/settings/settingApi";
import SiteNews from "../../components/SiteNews/SiteNews";


const TvShow = () => {
  const {data: allConfig} = useAllConfigQuery();
  const storedPage = JSON.parse(localStorage.getItem("tvCurrentPage")) || 1;

  const [currentPage, setCurrentPage] = useState(storedPage);
  const { data: perPgaeMovie, isLoading } = usePerPgaeTvShowQuery(currentPage);

  const getSiteName = allConfig?.data?.find( (config) => config.name === "site_name");
  const siteName = getSiteName ? getSiteName.value : null;

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    localStorage.setItem("tvCurrentPage", JSON.stringify(currentPage));
    return () => {
      if (currentRoute === "/tv-show") {
        localStorage.removeItem("MovieCurrentPage");
        localStorage.removeItem("banglaPagination");
        localStorage.removeItem("filterPagination");
      }
    };
  }, [currentPage, currentRoute]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Helmet>
        <title>{siteName}</title>
        <meta
          name="description"
          content="Unlimited Tv Shows and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <SiteNews allConfig={allConfig} />

      <div className="w-full flex justify-start mt-[22px] ml-20 lg:ml-0">
        <Title>TV Series</Title>
      </div>

      {/* ==================>> TV Shows <<==================*/}
      {isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] md:gap-auto my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard
              key={item?.id}
              item={item}
              redirect={`/series/${item?.id}`}
            ></MovieCard>
          ))}
        </div>
      )}

      <TvPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default TvShow;
