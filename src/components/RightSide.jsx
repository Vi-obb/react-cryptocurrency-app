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

import React from "react";
import DisplayBanner from "./DisplayBanner";
import News from "./News";
import useFetchNews from "../../hooks/useFetchNews";
import DataLoader from "./DataLoader";

const RightHandSide = () => {
  const { news } = useFetchNews();
  return (
    <>
      {/* map data for banner */}
      <DataLoader>
        <DisplayBanner />
      </DataLoader>
      {/* map data for news */}
      {news.map((item, i) => (
        <News key={i} title={item.title} url={item.url} source={item.source} />
      ))}
    </>
  )
};

export default RightHandSide;
