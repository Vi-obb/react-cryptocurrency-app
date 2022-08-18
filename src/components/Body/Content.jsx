import axios from "axios";
import React, { useEffect, useState } from "react";


const style = {
  wrapper: `w-full flex flex-wrap text-sm justify-between items-center p-8`,
  tableHeader: `px-5 py-3 bg-white text-gray-800 border-b border-gray-200 text-left text-sm font-normal`,
  td: `p-4 bg-white text-sm`,
  textFormat: `text-gray-900 whitespace-no-wrap`,
};

function Content() {
  // fetch data from api
  const [data, setData] = useState({ coins: [] });

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'e23fcb3be8msh1c0ed783cf62ab4p1003a0jsn6f142ec40a21',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    setData(options.data)

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } , [])

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
          <tr>
            <td className={style.td}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="block relative">
                    
                  </a>
                </div>
                <div className="ml-3">
                  <p className={style.textFormat}>Bitcoin</p>
                </div>
              </div>
            </td>
            <td className={style.td}>
              <p className={style.textFormat}>$80,000</p>
            </td>
            <td className={style.td}>
              <p className={style.textFormat}>-0.75</p>
            </td>
            <td className={style.td}>
              <p className={style.textFormat}>$900,000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;
