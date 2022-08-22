import React from "react";

const style = {
  wrapper: `bg-gradient w-full flex flex-wrap text-sm justify-between items-center p-5 mt-10`,
  menu: `text-white text-2xl`,
  menuDiv: `flex justify-end w-full mb-3`,
  priceDiv: `font-semibold tracking-wider font-poppins text-lg`,
};

const DisplayBanner = ({ active, ongoing, markets }) => {
  return (
    <div className={style.wrapper}>
      <div className="text-white">
        <p className={style.priceDiv}>{markets} markets</p>
        <p className={style.priceDiv}>
          {" "}
          {ongoing} ICOs
        </p>
        <p className={style.priceDiv}>
          {active} Cryptocurrencies
        </p>
      </div>
    </div>
  );
};

export default DisplayBanner;
