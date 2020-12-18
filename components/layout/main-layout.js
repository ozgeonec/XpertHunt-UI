import React, {useEffect, useState} from 'react'
import styles from './main-layout.module.css'
import Navbar from "../navbar/navbar";
import MainDiv from "../main-div/main-div";
import fetchHome from "../../services/api";
import {error} from "next/dist/build/output/log";
import axios from "axios";
//.catch(err => console.log(`Something went wrong. ERROR: ${err}´))
function MainLayout() {

    useEffect(()=>{
        let token = 'xxyyzz';
         axios.get('http://localhost:9000/home' ,{
            headers: {
                'Authorization': `Bearer ${token}`
            }

        }).then((res)=>console.log(res)).catch(function(error) {
             console.log(error);
         })
    },[])


    return <div className={styles.layout}>
        <Navbar/>
        <MainDiv/>
    </div>

}

export default MainLayout