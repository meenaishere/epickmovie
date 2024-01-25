import { RiMovieLine } from "react-icons/ri";
import AreaChart from "../../components/charts/AreaChart";
import PiChart from "../../components/charts/PiChart";
import { useMovieListQuery } from "../../redux/features/movies/movieApi";
import { useTvShowListQuery } from "../../redux/features/tv-show/tvShowApi";
import { Link } from "react-router-dom";
import { useWebsiteLinkQuery } from "../../redux/features/settings/settingApi";

const Dashboard = () => {
  const { data: movieList } = useMovieListQuery();
  const { data: tvshowList } = useTvShowListQuery();
  const { data: websiteLink } = useWebsiteLinkQuery();


  const datas = [
    {
      title: "Total Movies",
      total: movieList?.data?.total,
      icon: <RiMovieLine />,
      color: "bg-blue-300",
    },

    {
      title: "Total TvShow",
      total: tvshowList?.data?.total,
      icon: <RiMovieLine />,
      color: "bg-green-300",
    },

    {
      title: "Total Movies",
      total: 5000,
      icon: <RiMovieLine />,
      color: "bg-orange-300",
    },
    
    {
      title: "Total Movies",
      total: 5000,
      icon: <RiMovieLine />,
      color: "bg-red-300",
    },
  ];

  return (
    <div className="w-full h-full p-6">
      <div className="bg-slate-50 p-4">

        <div className="w-full mb-2 pr-2 flex items-center justify-between">
          <p className="underline text-[20px] font-[500] text-slate-900"> Dashboard </p>
          <Link to={websiteLink?.data} target="_blank" className="font-medium text-sm text-blue-600 border transition-all duration-200 border-blue-600 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white">Live Website</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 rounded-lg">
          {datas?.map((item, i) => (
            <div
              key={i}
              className={`border h-[120px] rounded-lg ${item.color} p-4`}
            >
              <p className="font-medium text-white text-[18px] flex items-center gap-1">
                <span className="text-[25px]">{item?.icon}</span> {item?.title}
              </p>
              <p className="text-center text-[25px] m-1 font-medium text-white">
                {item?.total}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:flex items-center gap-2 bg-white p-2">
          <AreaChart />
          <PiChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
