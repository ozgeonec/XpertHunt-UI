import React from 'react'
import styles from './main-div.module.css'
import {Firstpagedesign} from "../icons";
import Search from "../searchbar/search";
import Text from "../text-main/text";
import cn from 'classnames'
import InfoDiv from "../info-page/info";
import Footer from "../footer/footer";



function MainDiv() {
    return (<div className={styles.page}>
        <Firstpagedesign  className={styles.vector}/>
        <Text className={cn(styles.text)}>Find the best digital<br /> talent for your<br />project</Text>
        <Text className={styles.textSmall}>XpertHunt guides you to find <br />experts easily and quickly.</Text>
        <Search className={cn(styles.search)}/>
        <InfoDiv/>
        <Footer className={styles.footer}/>
    </div>)


}

export default MainDiv