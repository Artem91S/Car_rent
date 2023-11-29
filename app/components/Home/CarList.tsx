"use client";
import { Suspense, useEffect, useState } from "react";
import CarItem from "./CarItem";
import CarListHeader from "./CarListHeader";
import CarModal from "./CarModal";
import { getCarList } from "@/services";
import LoadingImg from "../ui/LoadingImg";
import Realistic from "../RentCar/Confetti";
import { useSpring, animated, config } from "@react-spring/web";

const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

type PropsType = {
  id: number;
  title: string;
  price: string;
  img: {
    url: string;
  };

  wheel: string;
  gas: string;
  seat: string;
  type: string;
};

function CarList() {
  const [data, setData] = useState<PropsType[]>([]);
  const [carType, setCarType] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [selectCar, setSelectCar] = useState<PropsType>({
    id: 0,
    title: "",
    price: "",
    img: { url: "" },
    wheel: "",
    gas: "",
    seat: "",
    type: "",
  });
  const [isLoaded, setIsLoaded] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const [effect, setEffect] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config,
  }));
  useEffect(() => {
    if(data.length > 0){
      setIsLoaded(false);
    }

  }, [data]);
 
  useEffect(() => {
    geCarListInPage();
   
  }, []);

  const geCarListInPage = async () => {
    const result: any = await getCarList();
    setData(result.carLists);
  };

  const filterData =
    carType === "All"
      ? data
      : data?.filter((item: PropsType) => item.type === carType);

  return (
  
    <div className="p-4 overflow-hidden">
      <CarListHeader setCarType={setCarType} setFilterPrice={setFilterPrice} />
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        {isLoaded ? [1, 2, 3].map((item) => <LoadingImg key={item} />) :
       (filterPrice === "All"
            ? filterData
            : filterData.sort((a: PropsType, b: PropsType) =>
                filterPrice === "-1"
                  ? Number(a.price) - Number(b.price)
                  : Number(b.price) - Number(a.price)
              )
          )?.map((item: any) => (
            <animated.div
              key={item.id}
              className="rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between h-[350px] hover:border-[1px] cursor-pointer "
              onMouseMove={({ clientX, clientY }) =>
                setEffect({ xys: calc(clientX, clientY) })
              }
              onMouseLeave={() => setEffect({ xys: [0, 0, 1] })}
              style={{
                transform: effect.xys.to(trans),
              }}
              onClick={() => {
                (document.getElementById("my_modal_4") as any).showModal();
                setSelectCar(item);
              }}
            >
              <CarItem {...item} />
            </animated.div>
          ))}
       
        <CarModal selectCar={selectCar} setShowSuccess={setShowSuccess} />
        {showSuccess && <Realistic />}
      </div>
      
    </div>
  );
}

export default CarList;
