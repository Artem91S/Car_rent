import { ChangeEvent } from "react";

type PropsType = { setCarType: (value: string) => void };

const fields = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "Honda",
  },
  {
    id: 3,
    text: "Toyota",
  },
  {
    id: 4,
    text: "BMW",
  },
  {
    id: 5,
    text: "Lexus",
  },
  {
    id: 6,
    text: "Audi",
  },
  {
    id: 7,
    text: "Tesla",
  },
  {
    id: 8,
    text: "Volvo",
  },
];

function CarFilterBrand({ setCarType }: PropsType) {
  const handleChangeCar = (e: ChangeEvent<HTMLSelectElement>) => {
    setCarType(e.target.value);
  };

  return (
    <div>
      <select
        className="select select-bordered  w-[100px] border-[1px]  rounded-xl p-2"
        defaultValue={"Car"}
        onChange={handleChangeCar}
      >
        <option disabled>Car</option>
        {fields.map(({ id, text }) => (
          <option key={id} value={text}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CarFilterBrand;
