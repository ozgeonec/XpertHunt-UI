import React from 'react'
import styles from './tech-div.module.css'
import Text from "../text-main/text";
import cn from 'classnames'
import {TECH} from '../../constants'

import Footer from "../footer/footer";
import Header from "../header/header";
import {Techframe} from "../icons";
import {useRouter} from "next/router";

function TechDiv({className,...props}) {
    const router = useRouter()
    return (<div className={cn(styles.page, className)}{...props}>
        <div className={styles.header}>
            <Header>Programming&Tech</Header>
            <Text pale className={styles.text}>A single place, millions of creative talents</Text>
        </div>
        <div className={styles.grids}>
            {TECH.map((tech)=>{
                return(
                    <figure className={styles.figure}>
                        <Techframe className={styles.vector}/>
                        <figcaption><Text pale className={styles.text} onClick={()=>router.push('/webdev')}>{tech.value}</Text></figcaption>
                    </figure>
                )
            })}
        </div>
        <Footer className={styles.footer}/>
    </div>)


}

export default TechDiv