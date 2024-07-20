import { FC } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Header: FC = () => {
  return (
    <header className="m-auto flex flex-col bg-white">
      <div className="px-10 py-3">
        <ul className="flex justify-end gap-5 text-xs font-normal">
          <li>Help</li>
          <li>Orders & Returns</li>
          <li>Hi, User</li>
        </ul>
        <div className="flex items-center justify-between pt-3">
          <h2 className="flex text-3xl font-bold">ECOMMERCE</h2>
          <ul className="flex gap-6 text-base font-semibold">
            <li>Categories</li>
            <li>Sale</li>
            <li>Clearance</li>
            <li>New Stock</li>
            <li>Trending</li>
          </ul>
          <div className="flex gap-8 pl-20 text-[#333333]">
            <CiSearch className="h-8 w-8 p-1" />
            <CiShoppingCart className="h-8 w-8 p-1" />
          </div>
        </div>
      </div>
      <div className="flex h-9 items-center justify-center gap-5 bg-[#F4F4F4] text-sm font-medium">
        <IoIosArrowBack />
        <p>Get 10% off on business sign up</p>
        <IoIosArrowForward />
      </div>
    </header>
  );
};

export default Header;
