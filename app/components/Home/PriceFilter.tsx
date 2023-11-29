import React from 'react'
import { ChangeEvent } from "react";
type PropsType={
    setFilterPrice:(value:string)=>void
  }

function PriceFilter({setFilterPrice}:PropsType) {
    const handleChangePrice =(e:ChangeEvent<HTMLSelectElement>)=>{  
        setFilterPrice(e.target.value)
      }
  return (
    <div>
    <select className="select select-bordered w-[100px] border-[1px] rounded-xl p-2" 
      defaultValue={'Price'}
    onChange={handleChangePrice}>
      <option disabled >
        Price
      </option>
      <option value="All">All</option>
      <option value="-1">From min price to max</option>
      <option value="1">From max price to min</option>
    </select>
    </div>
  )
}

export default PriceFilter