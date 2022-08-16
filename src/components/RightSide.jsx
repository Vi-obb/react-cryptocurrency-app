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

import React from 'react'

import { HiMenuAlt1 } from "react-icons/hi"

const style = {
	wrapper: `bg-gradient w-full flex flex-wrap text-sm justify-between items-center p-8`,
	menu: `text-white text-2xl`,
	menuDiv: `flex justify-end w-full mb-5`,
	priceDiv: `text-white`
}
const RightHandSide = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.menuDiv}>
				<HiMenuAlt1 className={style.menu} />
			</div>
			<div className={style.priceDiv}>
				<p className='font-bold tracking-wider text-lg'>$50,134,689,775</p>
				<p className='font-bold tracking-wider text-sm mb-3'> BTC 1,507,856 </p>
				<p className='tracking-wide text-xs text-gray-100'>Next 24h volume</p>
			</div>
		</div>
	)
}

export default RightHandSide