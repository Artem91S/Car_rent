import CarFilterBrand from "./CarFilterBrand";
import PriceFilter from "./PriceFilter";

type PropsType={
  setCarType:(value:string)=>void
  setFilterPrice:(value:string)=>void
}


function CarListHeader({setCarType,setFilterPrice}:PropsType) {
  return (
    <div className='p-2 grid grid-cols-1 justify-between sm:grid-cols-2'>
      <div >
        <h2 className='text-3xl font-extrabold'>Cars Catalog</h2>
        <p className=' text-gray-300 font-semibold pb-3'>Explore our cars you might likes</p>
      </div>
      <div className='flex justify-between sm:justify-end sm:gap-3 sm:col-span-1'>
        <CarFilterBrand setCarType={setCarType}/>
        <PriceFilter setFilterPrice={setFilterPrice}/>
      </div>
    </div>
  );
}

export default CarListHeader;
