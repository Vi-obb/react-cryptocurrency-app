/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 12/08/2022 - 00:11:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'
import { FiChevronDown } from "react-icons/fi"
import { RiCopyrightLine } from 'react-icons/ri'

const style = {
	wrapper: `w-full flex flex-wrap text-sm justify-between items-center p-8`,
	navLogo: `flex font-black`,
	navItems: `flex justify-evenly items-center`,
	navItem: `ml-3 mr-3 flex font-bold text-gray-700 cursor-pointer`,
	navBtnA: `py-2 px-4 text-xs  bg-gray-700 focus:ring-white-500 focus:ring-offset-indigo-100 text-white w-full transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-1 focus:ring-offset-2 `
}

const Navbar = () => {
	return (
		<nav className={style.wrapper}>
			<div className={style.navLogo}>
				<RiCopyrightLine class="text-xl mr-0.5" />
				<p className='text-gray-800 '> Coin  </p>
				<p className='text-cabaret'> X </p>
			</div>
			<div className={style.navItems}>
				<div className={style.navItem}>
					<p className='mr-0.5'> Market</p>
					<FiChevronDown className="text-xl" />

				</div>
				<div className={style.navItem}>
					<p>Community</p>
				</div>
				<div className={style.navItem}>
					<p> Blog</p>
				</div>
			</div>
			<div className='flex justify-evenly'>

				<button type="button" class={style.navBtnA}>
					Log In
				</button>

			</div>

		</nav>
	)
}

export default Navbar