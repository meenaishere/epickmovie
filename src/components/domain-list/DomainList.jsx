import Marquee from "react-fast-marquee";

const DomainList = ({allConfig}) => {
const siteNews = allConfig?.data[3]?.value;


  return (
    <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
      <p className="text-[14px] font-[600] flex items-center gap-2 text-white">
        <Marquee>{siteNews}</Marquee>
      </p>
    </div>
  );
};

export default DomainList;
