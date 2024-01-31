 
import react from 'react'
import Image from "next/image";
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';


const FeedCard : react.FunctionComponent = () =>{
    return (
     <div className=''>
    <div className='grid gird-cols-12 '>
        <div className='col-span-1 text-white'>
        <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/44976328?v=4"
              alt="user-image"
              height={50}
              width={50}
            />
        </div>
        <div className='col-span-11'>
            <h5>Priyanshu Gaur</h5>
            <p> random texskdnjasndj dsandjsan dsakjncj scjnscjidk cjdsncidsn cndjncjdncm dnc jidcjd cdsincjsdj cisndcjnscj ds cjdsncijs cijsdncijsnc sincijs cisdncjis dcihdsic sidcnijscsincidsc ij</p>
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      
    </div>
 
    </div>)
}

export default FeedCard