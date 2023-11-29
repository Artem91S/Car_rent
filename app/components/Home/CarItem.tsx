import Image from "next/image";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdLocalGasStation } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

type PropsType = {

    title: string;
    price: string;
    img: {
      url: string;
    };
    wheel: string;
    gas: string;
    seat: string;
  
};


function CarItem({title,price,img,wheel,gas,seat}: PropsType) {
  return (
    <div className="rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between h-[350px]  cursor-pointer ">

      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{title ? title : "Name of car"} </h3>
        <p className="text-sm">
          $<span className="text-xl font-bold"> {price ? price : "price of car"}</span> /day
        </p>
      </div>
      <div>
        <Image
          src={img?.url || '/lambo.png'}
          alt={title! || "img"}
          width={300}
          height={300}
        />
      </div>
      <div className="flex justify-center w-[200px] gap-5">
        <div className="flex flex-col items-center">
          <PiSteeringWheelFill className="text-gray-400 text-2xl" />
          <p className="text-xs text-gray-400">{wheel}</p>
        </div>
        <div className="flex flex-col items-center">
          <MdLocalGasStation className="text-gray-400 text-2xl" />
          <p className="text-xs text-gray-400">{gas}</p>
        </div>
        <div className="flex flex-col items-center">
          <IoPeople className="text-gray-400 text-2xl" />
          <p className="text-xs text-gray-400">{seat}</p>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
