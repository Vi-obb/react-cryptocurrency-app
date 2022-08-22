/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/08/2022 - 17:27:09
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMktData = () => {
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
  return {
    data,
  };
};

export default useFetchMktData;
