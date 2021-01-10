import React from "react";
import styles from './text-main.module.css'
import cn from 'classnames'



function TextMain({children, className, ...props }) {
    return <p className={cn(styles.text, className)}{...props}>
        {children}
    </p>

}

export default TextMain