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
	menuDiv: `flex justify-end w-full`,
}
const RightHandSide = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.menuDiv}>
				<HiMenuAlt1 className={style.menu} />
			</div>
			<div>
				<h2></h2>
				<h3></h3>
				<p>Next 24h volume</p>
			</div>
		</div>
	)
}

export default RightHandSide