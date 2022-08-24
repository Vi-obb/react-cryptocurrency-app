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

<<<<<<< HEAD
import React from "react";
import DisplayBanner from "./DisplayBanner";
import News from "./News";
import useFetchMktData from "../../hooks/useFetchMktData";
import useFetchNews from "../../hooks/useFetchNews";

const RightHandSide = () => {
  const { data } = useFetchMktData();
  const { news } = useFetchNews();
  return (
    <>
      {/* map data for banner */}
      <DisplayBanner
        active={data.active_cryptocurrencies}
        ongoing={data.ongoing_icos}
        markets={data.markets}
      />
      {/* map data for news */}
      {news.map((item, i) => (
        <News key={i} title={item.title} url={item.url} source={item.source} />
      ))}
=======
import React, { useEffect, useState } from "react";
import DataLoader from "./DataLoader";
import DisplayBanner from "./DisplayBanner";
import News from "./News";

const RightHandSide = () => {
  return (
    <>
      <DataLoader>
        <DisplayBanner />
      </DataLoader>
      <News />
>>>>>>> 9b9926d81551a4489c6cf2f52acee8a0451a8ae2
    </>
  );
};

export default RightHandSide;
