import React, {useEffect, useState} from "react";
import styles from "./navbar-basic.module.css"
import ButtonBasic from "../button/button-basic";
import XpertHuntBlack from "../icons/XpertHuntBlack";
import Avatar from "../avatar/avatar";
import Search from "../searchbar/search";
import cn from 'classnames'
import {useRouter} from "next/router";
import Text from "../text-main/text";
import axios from "axios";

function NavbarBasic({className,...props}) {
    const router = useRouter();
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



    return (<div className={cn(styles.navbarBasic, className)}{...props}>
        <XpertHuntBlack className={styles.logo} onClick={() => router.push('/')} />
        <Search dark className={styles.search}/>
       <div className={styles.right}>
           <ButtonBasic dark onClick={()=>router.push('/myAds')}>Adverts</ButtonBasic>
           <ButtonBasic dark onClick={()=>router.push('/myOrders')}>Orders</ButtonBasic>
           <Avatar onClick={()=>router.push('/personal-profile')}/>
           <Text dark>{curUser.userName}</Text>
       </div>
    </div>)
}

export default NavbarBasic