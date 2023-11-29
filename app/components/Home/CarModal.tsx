import Form from "../RentCar/Form";
import CarItem from "./CarItem";

type Props ={
    selectCar:{
        id:number,
        title:string,
        price:string,
        img:{
          url:string
        },
        wheel:string,
        gas:string,
        seat:string
    };
    setShowSuccess:(value:boolean)=>void
}

function CarModal({selectCar,setShowSuccess}:Props) {
  return (
    <>
  <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-full max-w-[500px] sm:max-w-[700px] p-3">
    <h3 className="font-bold text-3xl border-b-[2px] text-gray-400 text-center ">Rent A Car Now!</h3>
    <div className="modal-action">
      <form method="dialog" className='grid grid-cols-1 sm:grid-cols-2 sm:gap-3 pt-2'>
        <div className='flex justify-center items-center'>
        <CarItem {...selectCar}  />
        </div>
        <div >
        <Form selectCar={selectCar} setShowSuccess={setShowSuccess}/>
        </div>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
}

export default CarModal;
