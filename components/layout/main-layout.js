import React, {useEffect, useState} from 'react'
import styles from './main-layout.module.css'
import Navbar from "../navbar/navbar";
import MainDiv from "../main-div/main-div";

function MainLayout() {

    return <div className={styles.layout}>
        <Navbar/>
        <MainDiv/>
    </div>

}

export default MainLayout