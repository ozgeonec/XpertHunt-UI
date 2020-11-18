import React from "react";
import styles from './text.module.css'
import cn from 'classnames'




function Text({children, dark, bold=false, ...props }) {
    return <p className={cn(styles.text, bold && styles.textBold, dark && styles.dark)}{...props}>
        {children}
    </p>

}

export default Text