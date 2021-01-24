
import axios from "axios";
import NavbarBasic from "../navbar/navbar-basic";
import TextMain from "../text-main/text-main";
import {useEffect, useState} from "react";
import styles from "./applied-orders.module.css"
import Text from "../text-main/text";


function AppliedOrders({children, ...props}) {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:9000/all-applied", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            let newOrder = res.data
            console.log(newOrder)
            setOrders(newOrder)
            console.log(orders)

        }).catch(function (error) {
            console.log(error);
        });

    }, [])


    return <div className={styles.sayfa}>
        <NavbarBasic/>
        <div className={styles.container}>
            {orders.map((orders) => {
                return (
                    <div className={styles.div} {...props}>
                        <TextMain key={orders.description}>{orders.description}</TextMain>
                        <Text dark key={orders.budget}>${orders.budget}</Text>
                        <TextMain key={orders.buyer.username}>{orders.buyer.username}</TextMain>
                        <TextMain key={orders.buyer.email}>Contact: {orders.buyer.email}</TextMain>
                        <TextMain key={orders.applied}>Applied: {orders.applied}</TextMain>

                    </div>)})}
        </div>

    </div>
}


export default AppliedOrders