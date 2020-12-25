import React from "react";
import styles from "./profile.module.css"

import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import Gig from "../gig/gig";
import Header from "../header/header";


function Profile({...props}) {
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