import axios from "axios";
import React, { useEffect, useState } from "react";
import { SiBitcoinsv } from "react-icons/si";

const style = {
  wrapper: `w-full flex flex-wrap text-sm justify-between items-center p-8`,
  tableHeader: `px-5 py-3 bg-white text-gray-800 border-b border-gray-200 text-left text-sm font-normal`,
  td: `p-4 bg-white text-sm`,
  textFormat: `text-gray-900 whitespace-no-wrap`,
};

function Content() {
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
                  <a href="#" class="block relative">
                    <img
                      alt="profil"
                      src="/images/person/8.jpg"
                      className="mx-auto h-10 w-10 "
                    />
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
