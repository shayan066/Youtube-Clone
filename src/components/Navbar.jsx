import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrYoutube } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)

  const handleSearch = () => {
    if(location.pathname !== '/search') navigate("/search");
    else{
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  }

  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <GrYoutube className="text-3xl text-red-600" />
          <span className="text-2xl font-medium">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96  bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className=" h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <IoSearchOutline className="text-xl " />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full ">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-2xl ">
        <BiVideoPlus />
        <div className="relative">
          <GoBell />
          <span className="absolute bottom-2 left-2 text-xl bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile logo"
          className="w-9 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
