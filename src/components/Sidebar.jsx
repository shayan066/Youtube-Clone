import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";


const mainLinks = [
  {
      icon: <MdHomeFilled />,
      name: "Home"
  },
  {
      icon: <SiYoutubeshorts />,
      name: "Shorts"
  },
  {
    icon: <MdOutlineSubscriptions />,
    name: "Subscription"
  }];

  const Otherlinks = [
    {
    icon: <BiLibrary />,
    name: "Library"
  },
  {
    icon: <GoHistory />,
    name: "History"
  },
  {
    icon: <MdOutlineWatchLater />,
    name: "Watch Later"     
  },
  {
    icon: <LuThumbsUp />,
    name: "Liked Videos" 
  }];

const Sidebar = () => {
  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-600'>
        {
          mainLinks.map(({icon,name}) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === 'Home'? "bg-slate-600" : " "} rounded-xl`}>
                <a href="#" className='flex items-center gap-5 text-xl'>{icon}
                  <span className='text-sm tracking-wider '>{name}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className='flex flex-col border-b-1 border-gray-600'>
        {
          Otherlinks.map(({icon,name}) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === 'Home'? "bg-slate-600" : " "} rounded-xl`}>
                <a href="#" className='flex items-center gap-5 text-xl'>{icon}
                  <span className='text-sm tracking-wider '>{name}</span>
                </a>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Sidebar