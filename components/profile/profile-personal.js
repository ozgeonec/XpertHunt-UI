import React from "react";
import styles from "./profile-personal.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import Button from "../button/button";
import {useRouter} from "next/router";
import axios from "axios";


function ProfilePersonal({...props}) {
    axios.get('http://localhost:9000/:username', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        //username=res.data

    }).catch(function (error) {
        console.log(error);
    })

    const router = useRouter();
    return (<div className={styles.profile}{...props}>
        <NavbarBasic username={}/>
        <div className={styles.main}>
            <ProfileBox/>
            <Button onClick={() => router.push('/orders')}>Publish Order</Button>
            <Button onClick={() => router.push('/adverts')}>Publish Advert</Button>
        </div>
    </div>)
}

export default ProfilePersonal