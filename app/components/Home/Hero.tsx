import Image from "next/image";

function Hero() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center  p-3 ">
      <div className="text-black  flex flex-col">
        <h1 className="text-3xl font-extrabold lg:text-5xl">
          Premium Car <span className="text-blue-600">Rental</span> in Your Area
        </h1>
        <p className="w-[300px] md:w-[230px] text-gray-300 font-semibold lg:text-2xl lg:w-[400px]">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </p>
      </div>
      <div className="md:col-span-2 flex items-center justify-center md:justify-end ">
        <Image
          src="/hero.png"
          alt="Main picture of car"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default Hero;
