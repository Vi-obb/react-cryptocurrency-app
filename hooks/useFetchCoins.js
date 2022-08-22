/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/08/2022 - 16:51:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCoins = () => {
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

  return {
    data,
  };
};

export default useFetchCoins;
