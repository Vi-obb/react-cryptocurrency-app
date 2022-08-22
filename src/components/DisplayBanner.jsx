import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const style = {
  wrapper: `bg-gradient w-full flex flex-wrap text-sm justify-between items-center p-8`,
  menu: `text-white text-2xl`,
  menuDiv: `flex justify-end w-full mb-3`,
  priceDiv: `text-white`,
};

const DisplayBanner = ({ active, ongoing, markets }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.menuDiv}>
        <HiMenuAlt1 className={style.menu} />
      </div>
      <div className={style.priceDiv}>
        <p className="font-bold tracking-wider text-lg">{markets} markets</p>
        <p className="font-bold tracking-wider text-sm mb-3">
          {" "}
          ICOs: {ongoing}
        </p>
        <p className="tracking-wide text-xs text-gray-100">
          {active} Cryptocurrencies
        </p>
      </div>
    </div>
  );
};

export default DisplayBanner;
