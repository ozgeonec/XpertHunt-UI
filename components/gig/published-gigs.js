import React, {useEffect, useState} from 'react'
import styles from './gig.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Header from "../header/header";
import axios from "axios";

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

    return( <div className={styles.div}{...props}>
        <Avatar/>
            {ads.map((ads)=>{
                return( <div>
                    <div className={styles.name}>
                        <Text bold dark className={styles.text} key={ads.owner.username}>{ads.owner.username}</Text>
                        <Text pale className={styles.text} key={ads.title}>{ads.title}</Text>
                    </div>
                    <Text pale className={styles.text} key={ads.about}>{ads.about}</Text>
                    <hr className={styles.hr}/>
                    <div className={styles.bottom}>
                        <div className={styles.price}>
                            <Text pale className={styles.text}>STARTING AT </Text>
                            <Header className={styles.header} key={ads.price}>${ads.price}</Header>
                        </div>
                    </div>
                </div>)
            })}


    </div>)
}

export default PublishedGigs