import React, {useState} from 'react'
import styles from './gig.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Header from "../header/header";

//category
function AllGigs({name,title,about,price}){
    const [ads,setAds] = useState([{
        "owner": [{
            "email": "",
            "username":""
        }],
        "title":"",
        "about":"",
        "price":0
    }])


    return <div className={styles.div}>

        <div className={styles.profile}>
            <Avatar/>
            <div className={styles.name}>
                <Text bold dark className={styles.text}>{name}</Text>
                <Text pale className={styles.text}>{title}</Text>
            </div>
        </div>
        <Text pale className={styles.text}>{about}</Text>
        <hr className={styles.hr}/>
        <div className={styles.bottom}>
            <div className={styles.price}>
                <Text pale className={styles.text}>STARTING AT </Text>
                <Header className={styles.header}>${price}</Header>
            </div>
        </div>

    </div>
}

export default AllGigs