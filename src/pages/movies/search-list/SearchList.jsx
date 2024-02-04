import { useSelector } from "react-redux";
import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";

const SearchList = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const { data: searchResults, isLoading } = useSerachResultsQuery(searchTerm);

  console.log(searchResults)

  return (
    <section className="min-h-screen px-[50px] py-[20px] lg:px-0 lg:py-5">
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[28px] lg:text-[32px] font-[700] font-roboto text-white">
          Search Results for: {searchTerm}
        </h1>
      </div>

      {/* ===========>> Searched Results <<===========*/}
      {searchResults?.data?.length <= 0 && (
        <h1 className="text-[28px] font-medium text-slate-600">
          No Data Found !!
        </h1>
      )}

      
        {isLoading ? (
          <div className="px-6 py-10 mx-auto animate-pulse">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
            {Array.from({ length: 20 })?.map((item, i) => (
            <div
              key={i}
              className="w-[401px] h-[635px] lg:w-[205px] lg:h-[460px] p-[1.5px] lg:p-[2px] rounded-[10px]"
            >
              <div className=" bg-slate-600 rounded-lg h-[90%] w-full"></div>
              <h1 className="w-full h-[20px] mt-4 bg-slate-600 rounded-lg "></h1>
            </div>
          ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
            {searchResults?.data?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                redirect={
                  item?.post_type === "tvshows"
                    ? `/series/${item?.id}`
                    : `/movie/${item?.id}`
                }
              ></MovieCard>
            ))}
          </div>
        )}
 
    </section>
  );
};

export default SearchList;
