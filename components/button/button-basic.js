import React from "react";
import styles from "./button-basic.module.css"
import cn from 'classnames'

function ButtonBasic({children,className,  ...props}) {
    return <button type="button" className={cn(styles.button, className)} {...props}>{children}</button>
}

export default ButtonBasic