import { AiOutlineDoubleRight } from "react-icons/ai";
import calender from "../../../assets/calender.svg";
import jawan from "../../../assets/jawan.png";
import telegraqm from "../../../assets/telegram.svg";
import joinTelegran from "../../../assets/join telegram.png";
import ads from "../../../assets/ads.png";
import DownloadButton from "../../../utils/DownloadButton";
import { useMovieDetailsQuery } from "../../../redux/features/movies/movieApi";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const MovieDetails = () => {
  const { id } = useParams();

  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details);

  const sanitizedHtml = DOMPurify.sanitize(details?.post_content);

  return (
    <div className="bg-[#27272A]">
      <div className="hidden  bg-[#18181a] text-[#727171] lg:flex items-center font-inter pt-[15px] pb-[20px] gap-[8px] font-[500] uppercase">
        Home <AiOutlineDoubleRight /> Movies <AiOutlineDoubleRight /> Bllywood
      </div>

      <section className=" p-2 lg:p-5 flex justify-between">
        <div className="w-full  lg:w-[70%]">
          <div>
            <h4 className=" text-[20px] lg:text-[24px] text-white font-aclonica max-w-[748px]">
              {details?.post_title}
            </h4>

            {/* Left */}
            <div className=" flex items-center gap-2 mt-2">
              <img src={calender} alt="" className="w-[12px] h-[12px]" />
              <p className="text-[13px] text-white font-roboto">2 Days Ago</p>
            </div>

            {/* Post Content */}
            <div className="mt-[11px] lg:mt-[48px] max-w-[745px]">
              <p
                className="text-[13px] lg:text-[15px]  text-white font-roboto"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              ></p>
            </div>

            {/* Left */}
            <div className="mt-[11px] lg:mt-[19px] max-w-[745px]">
              <p className="text-[13px] lg:text-[15px]  text-white font-roboto">
                <span className="font-[700]"> EpickMovies</span> Provide You
                With Super Quality Of Movies and
                <span className="font-[700]">WEB Series.</span> We Provide
                Google Drive Direct Download Links For Fast And Secure
                <span className="font-[700]">Download.</span> You Can Join us on
                Telegram For the Latest Updates.
              </p>
            </div>

            <div className="my-[11px] lg:my-[15px]">
              <p className="text-[18px] lg:text-[24px] text-[#217703] font-[600] font-roboto">
                Movie Details :
              </p>
            </div>

            {/* ===============>> Poster Card <<=============== */}
            <div className=" lg:w-[715px] lg:min-h-[272px] lg:max-h-[100%] rounded-[20px] bg-[#1B1E21] p-[14px] flex flex-col lg:flex-row gap-[18px] lg:gap-[26px]">
              <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] w-[182px] h-[244px] p-[1.5px] rounded-[6px]">
                <img
                  src={details?.poster_image_url}
                  alt=""
                  className="w-full h-full rounded-[3px]"
                />
              </div>

              {/* Left */}
              <div className="font-roboto">
                <h3 className="text-[20px] text-[#FFA113]">
                  {details?.post_name}
                </h3>
                <p className="text-[10px] text-white">
                  {/* | September 7, 2023 (United States) */}
                  {details?.post_date} {/*which date have to used here*/}
                </p>

                <p className="text-[13px] text-[#AEABAB] mt-[10px] flex items-start gap-1">
                  Director:
                  <span className=" flex gap-2">
                    {details?.additional_data?.dtdirector?.map((item, i) => (
                      <a href="" key={i} className="text-[#FFA113] underline">
                        {item.name}
                      </a>
                    ))}
                  </span>
                </p>

  
                {/* which one will add here for summery */}
                <p className="text-[13px] text-[#AEABAB] font-[700] max-w-[455px]">
                  Summary:
                  <a href="" className="text-white font-[400]">
                    A high-octane action thriller which outlines the emotional
                    journey of a man who is set to rectify the wrongs in the
                    society.
                  </a>
                </p>

                {/* Missing */}
                <p className="text-[11px] text-[#AEABAB] mt-[22px]">
                  Countries: <span className="text-white ">India</span>
                </p>

                {/* Missing */}
                <p className="text-[11px] text-[#AEABAB]">
                  Source:
                  <a href="" className="text-[#FFA113] font-[700]">
                    imdb.com
                  </a>
                </p>
                {/* Missing */}
                <p className="text-[11px] text-[#AEABAB]">
                  IMBDb RATING:
                  <a href="" className="text-[#FFA113] font-[700]">
                    7.4
                  </a>
                </p>
              </div>

              
            </div>

            <div className="max-w-[715px] mt-[13px]">
              <h3 className="text-[18px] lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center">
                <a href={details?.guid}> {details?.post_title} ~ BollyFlix </a>
              </h3>
            </div>

            {/* Missing */}
            <div className="max-w-[715px] mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[18px] lg:text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[16px] lg:text-[20px] mt-4">
                A high-octane action thriller which outlines the emotional
                journey of a man who is set to rectify the wrongs in the
                society.
              </p>
            </div>

            <div className="mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[18px] lg:text-[24px] font-[600] text-[#217703] text-center lg:text-left">
                Screenshots:
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-3">
            {details?.screenshots?.map((item, i) => (
              <img
                key={i}
                src={item}
                alt=""
                className="w-full h-[156px] lg:h-[400px] object-cover"
              />
            ))}
          </div>

          <div className="max-w-[745px] my-[28px]">
            <p className="text-[16px] lg:text-[20px] text-white font-roboto font-[700] text-center">
              {details?.post_title}
            </p>
          </div>

          <div className=" max-w-[276px] lg:max-w-[399px] flex flex-col gap-3 mx-auto">
            {details?.download_links?.map((item, i) => (
              <DownloadButton key={i} url={item?.download_url}>
                {item?.label} {item?.file_size}
              </DownloadButton>
            ))}
          </div>

          {/* Missing */}
          <div className="flex justify-center mt-[21px] lg:mt-[36px]">
            <button className="flex justify-center items-center gap-2 border w-[211px] h-[43px] bg-[#FCD8FF] rounded-[9px]">
              <img src={telegraqm} alt="" className="w-[22px] h-[22px]" />
              <p className="text-[15px] text-black font-[700] font-roboto">
                Join Our Telegram
              </p>
            </button>
          </div>
        </div>

        {/* Static Data */}
        <div className="hidden lg:block  w-[30%] bg-[#1F1F22] p-4">
          <div className="w-[299px] h-[193px] bg-[#27272A] flex flex-col">
            <p className="text-white font-inter font-[500] mt-[39px] ml-[34px]">
              Join Our Telegram
            </p>
            <hr className="w-full bg-[#494949] opacity-[.4]" />
            <img
              src={joinTelegran}
              alt=""
              className="mt-[10px] w-[268px] h-[104px] mx-auto"
            />
          </div>

          <div className="w-[299px] h-[275px]  bg-[#27272A] mt-[27px]">
            <p className="pl-[30px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
              Movies
            </p>

            <hr className="w-full bg-[#494949] opacity-[.4]" />

            <div className="px-4 py-2 grid grid-cols-4 gap-[8px]">
              {Array.from({ length: 32 }).map((item, i) => (
                <button className="w-[53px] h-[20px] rounded-[4px] bg-[#f4f4f4c9] text-[10px] text-[#27272A] font-inter">
                  Bengali
                </button>
              ))}
            </div>
          </div>

          <div className="w-[299px] h-[271px] bg-[#27272A] mt-[25px]">
            <p className="px-[34px] pt-[15px] font-[500] text-[#F4F4F4C9] opacity-[.79] m-0">
              Ads
            </p>
            <img src={ads} alt="" />
          </div>
        </div>
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <section className="mt-[33px] p-5">
        <h3 className="text-[18px] lg:text-[22px] text-[#AEABAB] font-[700] font-roboto">
          RELATED POSTS
        </h3>

        <div className="mt-[23px] grid grid-cols-2 lg:grid-cols-4 items-center gap-[18px]">
          {Array.from({ length: 4 }).map((item, i) => (
            <div
              key={i}
              className="w-[180px] lg:w-[205px] h-[390px] bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none lg:h-[420px] flex flex-col items-center text-center rounded-[10px] p-[1.5px]"
            >
              <img
                src={jawan}
                alt=""
                className="w-full h-[267px] lg:h-[322px] rounded-tl-[10px] rounded-tr-[10px] bg-[#27272A]"
              />

              <p className="text-[14px] text-white font-[700] pt-[9px] bg-[#27272A] h-full rounded-b-[10px]">
                Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p |
                1080p | 2160p WEB-DL ESub
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
