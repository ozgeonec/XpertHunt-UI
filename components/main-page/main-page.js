import React from 'react'
import styles from './main-page.module.css'
import {Firstpagedesign} from "../icons";
import Search from "../searchbar/search";
import Text from "../text-main/text";
import cn from 'classnames'



function MainDiv() {
    return <div className={styles.page}>
        <Firstpagedesign  className={styles.vector}/>
        <Text className={cn(styles.text)}>Find the best digital talent for your project</Text>
        <Text className={styles.textSmall}>XpertHunt guides you to find experts easily and quickly.</Text>
        <Search className={cn(styles.search)}/>
        <div className={styles.info}>
            <p>Info</p>
        </div>

    </div>

}

export default MainDiv