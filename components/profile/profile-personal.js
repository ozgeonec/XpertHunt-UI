import React, {useEffect, useState} from "react";
import styles from "./profile-personal.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import ProfileBox from "../profile-box/profile-box";
import Button from "../button/button";
import {useRouter} from "next/router";
import axios from "axios";
import Text from "../text-main/text";


function ProfilePersonal({...props}) {
    const [curUser, setCurUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:9000/checkauth", {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
                //credentials: "same-origin"
        })
        .then((res) => {
                //console.log("Response: "+JSON.stringify(res.data.user.username));
                let newUser = {userName: res.data.user.username}
                setCurUser(newUser);
                console.log(curUser);
        })
        .catch(function (error) {
                console.log(error);
        });
    }, []);
    const handleClick = (e) =>{
        e.preventDefault()
        axios.get("http://localhost:9000/logout", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => {
            console.log("logged out")
        }).catch(function (error) {
            console.log(error);
        })
    }
    const router = useRouter();
    return (
        <div className={styles.profile}{...props}>
        <NavbarBasic username={curUser.userName}/>
        <div className={styles.main}>
            <div className={styles.name}>
                <ProfileBox button={"Update Profile"}/>
                <Text dark>{curUser.userName}</Text>
                <Button onClick={(e) => {
                    router.push('/');
                    handleClick(e);
                }}>Logout</Button>
            </div>

            <Button onClick={() => router.push('/orders')}>Publish Order</Button>
            <Button onClick={() => router.push('/adverts')}>Publish Advert</Button>
        </div>
    </div>)
}

export default ProfilePersonal