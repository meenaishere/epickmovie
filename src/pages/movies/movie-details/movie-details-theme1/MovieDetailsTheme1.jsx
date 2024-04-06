import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import SEOContentsTheme1 from "../../../../components/theme1-contents/SEOContentsTheme1";
import TagsList from "../../../../components/seo-related-content/TagsList";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import Theme1Card from "../../../../components/movie-card/theme1-card/Theme1Card";
import LazyLoadingTheme1 from "../../../../components/lazy-loading/LazyLoadingTheme1";
import SectionTitle from "../../../../utils/theme1-contents/section-title/SectionTitle";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";
import {
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import LatestMovieTvShow from "../../../../components/theme1-contents/LatestMovieTvShow";
import DownloadButton from "../../../../utils/DownloadButton";
import DownloadBtnTheme1 from "../../../../utils/theme1-contents/DownloadBtnTheme1";

const MovieDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();

  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details);

  const { data: perPageMovie, isLoading: movieLoading } =
    usePerPgaeMovieQuery(1);
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#18181a]">
      <Helmet>
        <title>
          {`${siteName} || ${details?.post_title ? details?.post_title : ""} `}
        </title>
        <meta
          name={details?.post_title ? details?.post_title : ""}
          content={details?.post_content}
        />
        <meta name="keywords" content="movies" />
      </Helmet>

      <SiteNews />

      {/* ===========> Latest Movies <===========*/}
      <LatestMovieTvShow loading={movieLoading} perPageData={perPageMovie} />

      <section className=" w-[1300px] mx-auto font-encode">
        <Breadcum
          children1="movies"
          children2={details?.post_title}
          redirect="movies/page/1"
        />

        <div className="bg-[#262626]">
          {/*Info Card */}
          <div className="flex gap-x-5 w-full p-5 border-b">
            <img
              src={details?.poster_image_url}
              alt=""
              className="w-[150px] h-[230px]"
            />

            <div className="w-full">
              <h2 className="text-[22px] font-bold text-[#CDCDCD]">
                {details?.post_title}
              </h2>

              <div className="mt-5 flex gap-x-5">
                <div className="w-[65%] flex flex-col gap-y-1">
                  {/* Genres */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Genre:</span>
                    <span>
                      {details?.additional_data?.genres?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name},
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Director:</span>
                    <span>
                      {details?.additional_data?.dtdirector?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Actors:</span>
                    <span>
                      {details?.additional_data?.dtcast?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Country */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Country:</span>
                    {details?.country ? (
                      <span className="text-[#FFA113] underline mx-1">
                        {details?.country}
                      </span>
                    ) : (
                      <span className="text-slate-400">N/A</span>
                    )}
                  </p>
                </div>

                <div className="w-[35%]  flex flex-col gap-y-1">
                  {/* Release Year */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Release Year:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {details?.release_date?.slice(0, 4)}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Runtime:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {details?.runtime} min
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Quality:</span>
                    <span>
                      {details?.additional_data?.prquality?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>
                </div>
              </div>

              {/* Story Line */}
              <p className="mt-1 text-base flex gap-x-1">
                <span className="text-white font-bold">Storyline:</span>
                <span className="text-[#FFA113] mx-1">
                  {details?.post_content}
                </span>
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <SEOContentsTheme1 details={details} />

          {/* Download Section */}
          <div>
            <h2 className="text-[28px] text-[#1FCD0F] font-bold text-center px-8">
              {details?.post_title}:
            </h2>

            <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[24px] font-bold text-center">
              Download Links:
            </div>

            <div className="mt-7 mx-auto flex justify-center items-center">
              <div className="flex flex-col gap-y-4">
                {details?.download_links.length ? (
                  <>
                    {details?.download_links?.map((item, i) => (
                      <DownloadBtnTheme1 key={i} url={item?.download_url}>
                        {item?.label} {item?.px_quality} {item?.file_size}
                      </DownloadBtnTheme1>
                    ))}
                  </>
                ) : (
                  <p className="text-[18px] font-medium text-slate-500 text-center">
                    No Download Link
                  </p>
                )}
              </div>

              {/* <div className="max-w-[80%] lg:max-w-[550px] flex flex-col gap-5 lg:gap-3 mx-auto">
                {details?.download_links.length > 0 ? (
                  details?.download_links?.map((item, i) => (
                    <DownloadButton key={i} url={item?.download_url}>
                      {item?.label} {item?.px_quality} {item?.file_size}
                    </DownloadButton>
                  ))
                ) : (
                  <p className="text-[18px] font-medium text-slate-500 text-center">
                    No Download Link
                  </p>
                )}
              </div> */}
            </div>

            <div className="mt-5">
              <p className="text-[#FFA113] text-[35px] text-center font-bold">
                [ How To Download ]
              </p>
            </div>

            {/* ===========>> JOIN TELEGRAM <<=========== */}
            <JoinTelegramBtn />
          </div>

          {/* Tag List */}
          <TagsList details={details} title="Movie" />

          {/* ===========> Latest Movies <===========*/}
          <div className="flex flex-col justify-center items-center p-5">
            <SectionTitle> Related Movies </SectionTitle>
            {suggessionsLoading ? (
              <div className="w-full">
                <LazyLoadingTheme1 lazyLength={5} />
              </div>
            ) : (
              <div className="w-full mt-5 flex justify-between">
                {suggessions?.data?.slice(0, 5)?.map((item, i) => (
                  <Theme1Card key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsTheme1;
