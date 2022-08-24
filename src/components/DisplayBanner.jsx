/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 24/08/2022 - 13:54:21
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const style = {
  wrapper: `bg-gradient w-full flex flex-wrap text-sm justify-between items-center p-5 mt-10`,
  menu: `text-white text-2xl`,
  menuDiv: `flex justify-end w-full mb-3`,
  priceDiv: `font-semibold tracking-wider font-poppins text-lg`,
};

const DisplayBanner = ({ data }) => {
  const { active_cryptocurrencies, ongoing_icos, markets } = data || {};
  return (
    <div className={style.wrapper}>
      <div className="text-white">
        <p className={style.priceDiv}>{markets} markets</p>
        <p className={style.priceDiv}> {ongoing_icos} ICOs</p>
        <p className={style.priceDiv}>
          {active_cryptocurrencies} Cryptocurrencies
        </p>
      </div>
    </div>
  );
};

export default DisplayBanner;
