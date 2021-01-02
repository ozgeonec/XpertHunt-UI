import React, {useEffect, useState} from 'react'
import styles from './published-order.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";


function AllOrders({children, ...props}){
    const [orders, setOrders] = useState({

    });
    useEffect((e) => {
        axios.get("http://localhost:9000/allOrders", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            let newOrder = res.data
            console.log(newOrder)
            setOrders(orders => ({
                ...orders, orders:newOrder
            }))
            //console.log(JSON.stringify(newOrder))
            console.log(orders)
            console.log(Object.entries(orders))
        })
            .catch(function (error) {
                console.log(error);
            });
    },[])
    return <div className={styles.div} {...props}>

        {[orders].map((orders)=>{return (<Text dark>{orders.description}</Text>)})}
        {[orders].map((orders)=>{return (<Text dark>{orders.budget}</Text>)})}
        {[orders].map((orders)=>{return (<Text dark>{orders.buyer}</Text>)})}
        <Button>Delete</Button>
        <Button>Apply</Button>
    </div>
}

export default AllOrders