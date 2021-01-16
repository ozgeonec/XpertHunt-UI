import React, {useEffect, useState} from 'react'
import styles from './all-gigs.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Header from "../header/header";
import axios from "axios";
import TextMain from "../text-main/text-main";
import NavbarBasic from "../navbar/navbar-basic";

//category{
//         "owner": {
//         },
//         "title": "",
//         "about": "",
//         "price": 0
//     }
function AllGigs({className,children, ...props}) {
    const [adverts, setAdverts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9000/allAds", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            console.log(res.data)
            let newAds = res.data

            setAdverts(newAds)
            console.log(adverts)
        }).catch(function (error) {
            console.log(error);
        });

    }, [])

    return <div className={styles.general}>
        <NavbarBasic/>
        {adverts.map((ads) => {
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

export default AllGigs