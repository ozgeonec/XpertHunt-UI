import React, {useEffect, useState} from 'react'
import styles from './all-orders.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";
/*buyer:[{
            "email": "",
            "username":"",
            "password": "",
            "firstname":"",
            "lastname":"",
            "avatar": "",
            "short_desc":"",
            "description":"",
            "occupation": "",
            "country":""
        }],
        "description":"",
        "budget":0
  {orders.map((orders)=>{return (<Text dark key={orders.budget}>{orders.budget}</Text>)})}
        {orders.map((orders)=>{return ()})}


        */

function AllOrders({children, ...props}){
    const [orders, setOrders] = useState([{
        "budget":0,
        "buyer":[{
            "email": "",
            "username":"",
        }],
        "description":""
    }]);
    useEffect(() => {
        axios.get("http://localhost:9000/allOrders", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            let newOrder = res.data
            //setOrders(newOrder)
            //setOrders(oldArray => [...oldArray, newOrder])
            setOrders(newOrder)
            /*setOrders(orders => ({
                ...orders, orders:newOrder
            }))*/
            console.log(orders)
        })
            .catch(function (error) {
                console.log(error);
            });
    },[])
    return <div>
        {orders.map((orders)=>{
            return (<div  className={styles.div} {...props}>
                <Text dark key={orders.description}>{orders.description}</Text>
                <Text dark key={orders.budget}>{orders.budget}</Text>
                <Text dark key={orders.buyer.username}>{orders.buyer.username}</Text>
                <Button>Apply</Button>
        </div>)})}
    </div>
}

export default AllOrders