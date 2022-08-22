/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/08/2022 - 16:46:00
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetchCoins from "../../../hooks/useFetchCoins";
import Crypto from "./Crypto";

const style = {
  wrapper: `w-full flex flex-wrap text-sm justify-between items-center p-8`,
  tableHeader: `px-5 py-3 bg-white text-black border-b border-gray-200 text-left text-sm font-bold font-poppins`,
  td: `p-4 bg-white text-sm`,
  textFormat: `text-gray-900 whitespace-no-wrap`,
};

function Content() {

  // importing the data from the useFetchCoins.js file
  const { data } = useFetchCoins();

  return (
    <div className={style.wrapper}>
      <table className="min-w-full leading-normal shadow-lg">
        <thead>
          <tr>
            <th scope="col" className={style.tableHeader}>
              Asset
            </th>
            <th scope="col" className={style.tableHeader}>
              Price
            </th>
            <th scope="col" className={style.tableHeader}>
              24h Change
            </th>
            <th scope="col" className={style.tableHeader}>
              Mkt Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {/* map data */}
          {data.map((item) => (
            <Crypto
              key={item.id}
              url={item.image}
              name={item.name}
              price={item.current_price}
              change={item.price_change_percentage_24h}
              mktcap={item.market_cap}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
