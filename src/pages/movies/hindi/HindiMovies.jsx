import { useLocation } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import UpCommingTheme1 from "../../../components/theme1-contents/UpCommingTheme1";
import { usePerPageHindiMovieListQuery } from "../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const HindiMovies = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP = Number(currentRoute?.slice(12)) === 0 ? 1 : Number(currentRoute?.slice(12));
  const { data: perPageHindiMovies, isLoading } = usePerPageHindiMovieListQuery(currentP);

  return (
    <div>
      <SiteNews />

      <div className="mt-5">
        <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[18px] font-bold flex justify-center items-center gap-x-4">
          <span>Hindi Movies</span>
        </button>

        {isLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {perPageHindiMovies?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </div>

      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPageHindiMovies}
        type="hindi"
      />

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default HindiMovies;
