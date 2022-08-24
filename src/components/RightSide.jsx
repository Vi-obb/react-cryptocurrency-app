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
    </>
  );
};

export default RightHandSide;
