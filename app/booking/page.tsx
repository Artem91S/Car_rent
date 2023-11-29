"use client";
import React, { useEffect, useState } from "react";
import { Table } from "../components/RentCar/Table";
import { getBookings, getCarList } from "@/services";

const columns = [
  {
    Header: "Car Name",
    accessor: "carName",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Pick Up Time",
    accessor: "pickUpTime",
  },
  {
    Header: "Pick Up Date",
    accessor: "pickUpDate",
  },

  {
    Header: "Drop Off Time",
    accessor: "dropOffTime",
  },

  {
    Header: "Drop Off Date",
    accessor: "dropOffDate",
  },
  {
    Header: "Contact Number",
    accessor: "contactNumber",
  },
];

function Booking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBookingsData();
  }, []);

  const geCarListInPage = async () => {
    const result: any = await getCarList();
    return result?.carLists;
  };
  const getBookingsData = async () => {
    const result: any = await getBookings();
    setData(result.bockings);
  };

  return (
    <div className={"border-b border-gray-200 shadow sm:rounded-lg flex-1"}>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Booking;
