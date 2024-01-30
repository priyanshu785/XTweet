  
 import React from 'react'
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi';
 import {BsBell, BsBookmark, BsTwitter} from 'react-icons/bs'

 const SidebarMenuItems : TwitterSideBarButton[]=[
  {
    title:'Home',
    icon : <BiHomeCircle/>
  },
  {
    title:'Explore',
    icon : <BiHash></BiHash>
  },
  {
    title:'Noitifications',
    icon: <BsBell></BsBell>
  },
  {
    title:'Bookmark',
    icon : <BsBookmark></BsBookmark>
  },
  {
    title:'Profile',
    icon:<BiUser></BiUser>
  }
 ]
 interface TwitterSideBarButton{
  title :string;
  icon :React.ReactNode
 }
export default function Home() {
  return (
    <div>
       <div className="grid grid-cols-12 h-screen w-screen px-40">
        <div className=" col-span-3  px-4 pt-8 ">
          <div className='text-4xl h-fit w-fit hover:bg-gray-600 p-3 rounded-full cursor-pointer transition-all'>
          <BsTwitter ></BsTwitter>
          </div>
          <div className='mt-4 font-semibold text-2xl pr-5'>
            <ul>
            {SidebarMenuItems.map(item => <li className="  flex justify-start items-center gap-4 px-4 py-2 w-fit hover:bg-gray-600 rounded-full pd"key={item.title}><span>{item.icon} </span><span>{item.title}</span></li>)}
            </ul>
            <div className='mt-5 px-5'>
             
            <button className="bg-[#1d9bf0]  rounded-full w-full p-2  text-lg ">Tweet</button>
            </div>
          </div>
        </div>
         
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-grey"></div>
        <div className="col-span-3"></div> 
       </div>
    </div>
  );
}
