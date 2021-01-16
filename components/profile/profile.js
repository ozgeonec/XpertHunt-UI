import React, {useEffect, useState} from "react";
import styles from "./profile.module.css"

import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import axios from "axios";


function Profile({...props}) {
    const[userName, setUserName] = useState()
    useEffect(() => {
        axios.get("http://localhost:9000/:username", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            let newName = res.data
            console.log(newName)
            setUserName(newName)

        }).catch(function (error) {
            console.log(error);
        });

    }, [])
    return (<div className={styles.profile}{...props}>
        <NavbarBasic/>
        <div className={styles.main}>
            <ProfileBox name={userName}/>
        </div>

    </div>)
}

export default Profile