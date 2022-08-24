/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 24/08/2022 - 13:47:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";
const DataLoader = ({ children }) => {
  const [data, setData] = useState({});

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
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { data });
        }

        return child;
      })}
    </>
  );
};

export default DataLoader;
