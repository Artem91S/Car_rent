import { createBocking, getStoreLocations } from "@/services";
import { useEffect, useState } from "react";

type PropsType = {
  selectCar: {
    id: number;
    title: string;
    price: string;
    img: {
      url: string;
    };
    wheel: string;
    gas: string;
    seat: string;
  };
  setShowSuccess:(value:boolean)=>void
};

export default function Form({ selectCar,setShowSuccess }: PropsType) {
  const [location, setLocation] = useState<any>();

  const [formValue, setFormValue] = useState({
    carId: "",
    dropOffDate: "",
    dropOffTime: "",
    location: "",
    pickUpDate: "",
    pickUpTime: "",
    contactNumber: "",
    carName: "",
    userName:""
  });

  useEffect(() => {
    if (selectCar) {
      setFormValue({
        ...formValue,
        carId: selectCar.id.toString(),
        carName: selectCar.title,
      });
    }
  }, [selectCar]);

  useEffect(() => {
    getLocations();
  }, []);

  const handleChange = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const response = await createBocking(formValue);
    if (response) {
      setShowSuccess(true);
    }
  };
  const getLocations = async () => {
    const result: any = await getStoreLocations();
    setLocation(result?.locations);
  };
  return (
    <>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400 pt-5">PickUp Location</label>
        <select
          className="select 
    select-bordered w-full max-w-lg border-[1px] rounded-xl p-2 sm:p-1"
          name="location"
          onChange={handleChange}
          defaultValue={"PickUp Location?"}
        >
          <option disabled value={"PickUp Location?"}>
            PickUp Location?
          </option>

          {location &&
            location?.map((loc: any) => (
              <option key={loc.id}>{loc?.location}</option>
            ))}
        </select>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:justify-between sm:gap-2 md:gap-5 mb-5">
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg border-[1px] rounded-xl p-2 sm:p-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg  border-[1px] rounded-xl p-2 sm:p-1"
          />
        </div>
      </div>
      <div className="flex gap-5 sm:justify-between md:gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg border-[1px] rounded-xl p-2 sm:p-1"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg border-[1px] rounded-xl p-2 sm:p-1"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg border-b-[1px] p-2 sm:p-1 outline-none"
        />
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          required
          type="text"
          placeholder="Your name"
          onChange={handleChange}
          name="userName"
          className="input input-bordered w-full max-w-lg border-b-[1px] p-2 sm:p-1 outline-none"
        />
      </div>
      <div className="modal-action flex gap-6 justify-center">
        <button className="btn  bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 ">
          Close
        </button>
        <button
          className="btn bg-blue-500 text-white hover:bg-blue-800 rounded-md p-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
}
