/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/08/2022 - 18:24:20
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/08/2022
 * - Author          : Michael
 * - Modification    :
 **/

import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayBanner from "./DisplayBanner";
import News from "./News";

const RightHandSide = () => {
  // fetch data for banner
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = {
      method: "GET",
      url: "https://coingecko.p.rapidapi.com/global",
      headers: {
        "X-RapidAPI-Key": "e23fcb3be8msh1c0ed783cf62ab4p1003a0jsn6f142ec40a21",
        "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
      },
    };

    axios
      .request(results)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);
  return (
    <>
      {/* map data for banner */}
        <DisplayBanner
          active={data.active_cryptocurrencies}
          ongoing={data.ongoing_icos}
          markets={data.markets}
        />
      <News />
    </>
  );
};

export default RightHandSide;
