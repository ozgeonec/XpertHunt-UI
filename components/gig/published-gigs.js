import React, {useEffect, useState} from 'react'
import styles from './published-gigs.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Header from "../header/header";
import axios from "axios";
import NavbarBasic from "../navbar/navbar-basic";
import TextMain from "../text-main/text-main";

//category
function PublishedGigs({className,...props}){
    const [ads,setAds] = useState([{
        "owner": [{
            "email": "",
            "username":""
        }],
        "title":"",
        "about":"",
        "price":0
    }])
    useEffect(() => {
        axios.get("http://localhost:9000/myAds",{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res)=>{
            let newAds = res.data
            //console.log(res.data)
            setAds([newAds])
            console.log(ads)
        })
            .catch(function (error) {
                console.log(error);
            });

    },[])

    return <div className={styles.general}{...props}>
        <NavbarBasic/>
        {ads.map((ads) => {
            return (
                <div className={styles.div}>
                    <Avatar/>
                    <TextMain key={ads.owner.username}>{ads.owner.username}</TextMain>
                    <Text pale key={ads.title}>{ads.title}</Text>

                    <Text pale key={ads.about}>{ads.about}</Text>
                    <div>
                        <div className={styles.price}>
                            <Text pale>STARTING AT </Text>
                            <Header className={styles.header} key={ads.price}>${ads.price}</Header>
                        </div>
                    </div>
                </div>)
        })}


    </div>
}

export default PublishedGigs