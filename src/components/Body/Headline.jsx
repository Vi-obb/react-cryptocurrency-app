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
        </div >
    )
}

export default Headline