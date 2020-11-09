import React from "react";
import styles from "./search.module.css"
import Button from "../button/button";


function Search () {
    return (<div className={styles.searchbar}>
        <input type="text" placeholder="Search for a service"/>
    <Button>Search</Button>
    </div>)
}

export default Search