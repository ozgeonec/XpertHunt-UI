import React from 'react'
import styles from './layout.module.css'
import Navbar from "../navbar/navbar";
import Search from "../searchbar/search";
import MainDiv from "../main-page/main-page";




function Layout() {
    return <div className={styles.layout}>
        <Navbar/>
        <MainDiv/>
    </div>

}

export default Layout