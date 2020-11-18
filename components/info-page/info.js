import React from "react";
import styles from "./info.module.css"

import Header from "../header/header";
import Text from "../text-main/text";


function InfoDiv() {
    return (<div className={styles.info}>
        <div className={styles.button}>
            <Header>Graphics&Design</Header>
            <Header>Programming&Tech</Header>
        </div>
        <div className={styles.ad}>
        <Header>A whole world of freelance talent at your fingertips</Header>
        <Text bold dark><br/>The best for every budget</Text>
        <Text dark><br/>Find high-quality services at every price point.<br/> No hourly rates, just project-based pricing.</Text>
        <Text bold dark><br/>Quality work done quickly</Text>
        <Text dark><br/>Find the right freelancer to begin working on <br/>your project within minutes.</Text>
        <Text bold dark><br/>Protected Payments</Text>
        <Text dark><br/>Always know what you'll pay upfront. Your<br/> payment isn't released until you approve the work.</Text>

        </div>
        </div>)
}

export default InfoDiv