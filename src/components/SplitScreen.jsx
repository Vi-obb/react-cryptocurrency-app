/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 16/08/2022 - 18:07:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const styles = {
	container: "flex",
	paneOne: "w-3/4",
	paneTwo: "w-1/4",
}

const SplitScreen = ({ left: Left, right: Right }) => {
	return (
		<div className={styles.container}>
			<div className={styles.paneOne}>
				<Left />
			</div>

			<div className={styles.paneTwo}>
				<Right />
			</div>
		</div>
	)
}

export default SplitScreen