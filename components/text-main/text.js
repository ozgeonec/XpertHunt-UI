import React from "react";
import styles from './text.module.css'
import cn from 'classnames'




function Text({children,className, dark, bold, ...props }) {
    return <p className={cn(styles.text, bold && styles.textBold, dark && styles.dark, className)}{...props}>
        {children}
    </p>

}

export default Text