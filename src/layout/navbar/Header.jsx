import logo from "../../assets/logo.png";
import search from "../../assets//Search Icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";

const Header = () => {

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    dispatch(collectSearchItem(searchTerm))
  };

  return (
    <div className="w-full lg:h-[130px] flex flex-col lg:flex-row items-center justify-between py-2 lg:py-0 px-4 ">
      <Link to="/" className=" w-[173px] h-[60px] lg:w-[200px] lg:h-[75px]">
        <img src={logo} alt="" className="w-full h-full object-fit" />
      </Link>

      <form
        onSubmit={handleSubmit}
        className=" w-[320px] lg:w-[453px] h-[42px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] bg-[#18181B]"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
          className="w-full h-full bg-transparent border-0 focus:outline-none text-[12px] text-white px-5"
        />
        <button type="submit">
          <img src={search} alt="" className="h-full cursor-pointer" />
        </button>
      </form>

      <div></div>
    </div>
  );
};

export default Header;
