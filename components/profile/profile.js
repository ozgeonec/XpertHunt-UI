import React, {useState} from "react";
import styles from "./profile.module.css"

import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import Gig from "../gig/gig";
import Header from "../header/header";
import axios from "axios";


function Profile({...props}) {
    // const [data,setData] = useState({})
    // axios.get('http://localhost:9000/:username', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then((res) => {
    //     setData({data: res})
    //     console.log(data)
    // }).catch(function (error) {
    //     console.log(error);
    // })
    return (<div className={styles.profile}{...props}>
        <NavbarBasic/>
        <div className={styles.main}>
            <ProfileBox/>
            <Header>Published Gigs</Header>
            <Gig/>
        </div>

    </div>)
}

export default Profile