import axios from "axios";
import React, { useEffect, useState } from "react";
import Crypto from "./Crypto";

const style = {
  wrapper: `w-full flex flex-wrap text-sm justify-between items-center p-8`,
  tableHeader: `px-5 py-3 bg-white text-black border-b border-gray-200 text-left text-sm font-bold font-poppins`,
  td: `p-4 bg-white text-sm`,
  textFormat: `text-gray-900 whitespace-no-wrap`,
};

function Content() {
  // fetch data from api
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              change={item.price_change_24h}
              mktcap={item.market_cap}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
