import React from 'react'
import styles from './layout.module.css'
import Navbar from "../navbar/navbar";


function Layout({children}) {
    return <div className={styles.layout}>
        <Navbar/>
    </div>
}

export default Layout