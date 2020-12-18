import React from "react";
import styles from "./header.module.css"
import cn from 'classnames'

function Header({children,className, ...props}) {
    return (<div className={cn(styles.header, className)}{...props}>
       <h1>{children}</h1>
    </div>)
}

export default Header