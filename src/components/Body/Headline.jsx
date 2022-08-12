/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 12/08/2022 - 00:13:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const style = {
    wrapper: ` px-8 mt-14`,
    headlineDiv: `flex justify-center mb-8`,
    headlineOne: 'text-center text-gray-900 font-karla font-extrabold text-6xl',
    headlineTwo: 'text-center text-gray-700',
    headlineInput: "mr-3 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent",
    headlineBtn: 'py-2 px-4 text-xs  bg-cabaret focus:ring-white-500 focus:ring-offset-indigo-100 text-white transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-1 focus:ring-offset-2'
}
const Headline = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.headlineDiv}>
                <p className={style.headlineOne}> Discover the largest BTC marketplace.</p>
            </div>
            <div className={style.headlineDiv}>
                <p className={style.headlineTwo}> Crypto have existed for a long time, but never like this.</p>
            </div>
            <div className={style.headlineDiv}>
                <input type="text" class={style.headlineInput} placeholder="Your@email.com" />
                <button type="button" className={style.headlineBtn} >
                    Subscribe
                </button>
            </div>
        </div >
    )
}

export default Headline