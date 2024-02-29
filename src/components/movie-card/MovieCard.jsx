/* eslint-disable react/prop-types */
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";
import "./MovieCard.css";
import { FaPlay } from "react-icons/fa";
import CachedImage from "../../utils/cache-img/CachedImage";
import {
  useCleanedTitle,
  useMaskLink,
  useRedirect,
} from "../../utils/configHooks/ConfigHooks";

const MovieCard = ({ item }) => {
  const maskLink = useMaskLink();
  console.log(maskLink);

  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] w-[401px] lg:w-full min-h-[635px] h-full lg:min-h-[460px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont">
      <button
        onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative cursor-pointer`}
      >
        <CachedImage
          src={item?.poster_image_url}
          imgStyle="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg"
        />

        <p className="text-center  text-white font-[700] text-[33px] lg:text-[16px] p-4 lg:p-2 font-alef">
          {item?.post_title?.length <= 80
            ? item?.post_title
            : item?.post_title?.slice(0, 80)}
        </p>

        <div className="playBtn">
          <FaPlay className="text-[50px] text-white" />
        </div>
      </button>

      {item?.stickerLabel?.length > 0 && (
        <div className="absolute left-2 top-4">
          <FeatureSticker item={item} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
