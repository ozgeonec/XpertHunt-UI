import React from "react";
import styles from "./footer.module.css"



function Footer({...props}) {
    return (<div className={styles.footer}{...props}>
    <h1>Footer</h1>
    </div>)
}

export default Footer