import React from "react";
import styles from './text.module.css'
import cn from 'classnames'



function Text({children,dark,pale, bold,className, ...props }) {
    return <p className={cn(styles.text, bold && styles.textBold, dark && styles.dark, pale && styles.pale, className)}{...props}>
        {children}
    </p>

}

export default Text