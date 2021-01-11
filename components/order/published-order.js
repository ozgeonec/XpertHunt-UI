import React, {useEffect, useState} from 'react'
import styles from './published-order.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";
import TextMain from "../text-main/text-main";
import NavbarBasic from "../navbar/navbar-basic";



function PublishedOrder({children, ...props}){

    const [orders, setOrders] = useState({
        "buyer":"",
        "description":"",
        "budget":0
    });
    useEffect(() => {
        axios.get("http://localhost:9000/myOrders",{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res)=>{
            let newOrder = res.data
            console.log(res.data)
            setOrders(newOrder)
            console.log(newOrder.buyer.username)
        })
        .catch(function (error) {
                console.log(error);
        });

    },[])

    return <div className={styles.layout}>
        <NavbarBasic/>
        <div className={styles.div} {...props}>
            <TextMain>{orders.buyer.username}</TextMain>
            <TextMain>{orders.description}</TextMain>
            <TextMain>${orders.budget}</TextMain>
            <Button>Delete</Button>
        </div>
    </div>

}

export default PublishedOrder