import React from "react";
import styles from "./search.module.css"
import Button from "../button/button";
import cn from 'classnames'


function Search ({dark=false,...props}) {
    return (<div className={styles.searchbar} {...props}>
        <input className={cn(styles.input, dark && styles.inputDark)} type="text" placeholder=" Search for a service"/>
        <Button className={styles.button}>Search</Button>
    </div>)
}

export default Search