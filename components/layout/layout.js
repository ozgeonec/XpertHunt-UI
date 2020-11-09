import React from 'react'
import styles from './layout.module.css'
import Navbar from "../navbar/navbar";
import Search from "../searchbar/search";


function Layout({children}) {
    return <div className={styles.layout}>
        <Navbar/>
        <Search/>
    </div>

}

export default Layout