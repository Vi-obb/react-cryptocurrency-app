import React from "react";

const style = {
  td: `p-4 bg-white text-sm`,
  textFormat: `whitespace-no-wrap`,
};

const Crypto = ({ url, name, price, change, mktcap }) => {
  return (
    <tr>
      <td className={style.td}>
        <div className="flex items-center">
          <div className="ml-1 flex space-x-2 items-center">
            <img className="w-5 h-5" src={url} alt={name} />
            <p className="font-bold font-karla ${style.textFormat}">{name}</p>
          </div>
        </div>
      </td>
      <td className={style.td}>
        <p className="${style.textFormat} font-poppins">
          $ {price.toLocaleString()}
        </p>
      </td>
      <td className={style.td}>
        {change < 0 ? (
          <p className="${style.textFormat} text-red-600 font-poppins">
            {change.toFixed(2)}%
          </p>
        ) : (
          <p className="${style.textFormat} text-green-600 font-poppins">
            {change.toFixed(2)}%
          </p>
        )}
      </td>
      <td className={style.td}>
        <p className="${style.textFormat} font-poppins">
          $ {mktcap.toLocaleString()}
        </p>
      </td>
    </tr>
  );
};

export default Crypto;
