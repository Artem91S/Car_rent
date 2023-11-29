"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

export default function Header() {
  const params = usePathname();
  return (
    <div className="flex px-3 h-20 justify-between items-center border-b-[2px]">
      <Link href="/">
        <Image src="/logo.png" alt="Main logo" width={100} height={100} />
      </Link>
      <div className="  items-center gap-2 flex">
        {params !== "/booking" ? (
          <Link
            href="/booking"
            className="bg-blue-600 text-[11px] text-white rounded-xl p-2 items-center gap-1 md:flex hidden cursor-pointer hover:bg-blue-900"
          >
            book list
            <CiCircleList className='text-[18px]'/>
          </Link>
        ) : (
          <Link
            href="/"
            className="bg-blue-600 text-[11px] text-white rounded-xl flex p-2 items-center gap-1 cursor-pointer hover:bg-blue-900"
          >
            back to home <FaHome />
          </Link>
        )}
        <UserButton />
      </div>
    </div>
  );
}
