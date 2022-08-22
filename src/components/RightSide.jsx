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

import React, { useEffect, useState } from "react";
import DisplayBanner from "./DisplayBanner";
import News from "./News";
import useFetchMktData from "../../hooks/useFetchMktData";

const RightHandSide = () => {
  const { data } = useFetchMktData();
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
