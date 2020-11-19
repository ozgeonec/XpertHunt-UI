import React from 'react'
import styles from './tech-div.module.css'
import Text from "../text-main/text";
import cn from 'classnames'

import Footer from "../footer/footer";
import Header from "../header/header";
import {Techframe} from "../icons";

function TechDiv({className,...props}) {
    return (<div className={cn(styles.page, className)}{...props}>
        <div className={styles.header}>
            <Header>Programming&Tech</Header>
            <Text dark className={styles.text}>A single place, millions of creative talents</Text>
        </div>
        <div className={styles.grids}>
            <figure className={styles.figure}>
                <Techframe className={styles.vector}/>
                <figcaption><Text dark className={styles.text}>Web Development</Text></figcaption>
            </figure>

            <Techframe className={styles.vector}/>
            <Techframe className={styles.vector}/>
            <Techframe className={styles.vector}/>
            <Techframe className={styles.vector}/>
            <Techframe className={styles.vector}/>
        </div>

        <Footer className={styles.footer}/>
    </div>)


}

export default TechDiv