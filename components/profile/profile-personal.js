import React, {useEffect, useState} from "react";
import styles from "./profile-personal.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import Button from "../button/button";
import {useRouter} from "next/router";
import axios from "axios";


function ProfilePersonal({...props}) {
    const [curUser, setCurUser] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:9000/checkauth", {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
                //credentials: "same-origin"
            })
            .then((res) => {
                console.log("Response: "+JSON.stringify(res.data.user.username));
                let newUser = {userName: JSON.stringify(res.data.user.username)};
                setCurUser(newUser);
                console.log(curUser);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const router = useRouter();
    return (<div className={styles.profile}{...props}>
        <NavbarBasic username={curUser.userName}/>
        <div className={styles.main}>
            <ProfileBox button={"Update Profile"}/>
            <Button onClick={() => router.push('/orders')}>Publish Order</Button>
            <Button onClick={() => router.push('/adverts')}>Publish Advert</Button>
        </div>
    </div>)
}

export default ProfilePersonal