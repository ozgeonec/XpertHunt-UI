import React from "react";
import styles from "./footer.module.css"
import cn from 'classnames'



function Footer({className, ...props}) {
    return (<div className={cn(styles.footer, className)}{...props}>
    <h1>Footer</h1>
    </div>)
}

export default Footer