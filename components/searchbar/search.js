import React from "react";
import styles from "./search.module.css"
import Button from "../button/button";


function Search ({...props}) {
    return (<div className={styles.searchbar} {...props}>
        <input type="text" placeholder="Search for a service"/>
        <Button>Search</Button>
    </div>)
}

export default Search