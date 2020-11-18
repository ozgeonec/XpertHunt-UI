import React from "react";
import styles from "./header.module.css"



function Header({children, props}) {
    return (<div className={styles.header}{...props}>
       <h1>{children}</h1>
    </div>)
}

export default Header