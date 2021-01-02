import React, {useEffect, useState} from 'react'
import styles from './published-order.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";



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

    return <div className={styles.div} {...props}>
            <Text dark>{orders.buyer.username}</Text>
            <Text dark>{orders.description}</Text>
            <Text dark>{orders.budget}</Text>
            <Button>Delete</Button>
            <Button>Apply</Button>
        </div>
}

export default PublishedOrder