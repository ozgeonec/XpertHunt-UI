import React, {useEffect, useState} from 'react'
import styles from './all-orders.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";
import orders from "../../pages/orders";
import NavbarBasic from "../navbar/navbar-basic";
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
{
        "_id":"",
        "budget":0,
        "buyer":[{
            "email": "",
            "username":"",
        }],
        "description":"",
        "applied":[{
            "email": "",
            "username":"",
        }],
    }

        */

function AllOrders({children, ...props}){
    const [orders, setOrders] = useState([]);
    const [oneOrder,setOneOrder]=useState([])
    useEffect(() => {
        axios.get("http://localhost:9000/allOrders", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            let newOrder = res.data

            setOrders(newOrder)

        }).catch(function (error) {
                console.log(error);
        });

    },[])

    const handleClick = (id) =>{
        axios.post("http://localhost:9000/apply",JSON.stringify(oneOrder), {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(() => {
            //setOneOrder(orders)
            //console.log(orders.find((orders)=>orders._id === id))
           // setOneOrder([...oneOrder, orders.find((o)=>o._id === id)])
            console.log( orders.find((o)=>o._id === id))
            let newOrd = orders.find((o)=>o._id === id)
            console.log(newOrd)
            setOneOrder(newOrd)
            console.log(oneOrder)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return <div className={styles.container}>

        {orders.map((orders)=>{
            return (
                <div  className={styles.div} {...props}>
                <Text className={styles.text} dark key={orders.description}>{orders.description}</Text>
                <Text dark key={orders.budget}>${orders.budget}</Text>
                <Text className={styles.text} dark key={orders.buyer.username}>{orders.buyer.username}</Text>
                <Text className={styles.text} dark key={orders.applied}>Applied: {orders.applied}</Text>
                <Button onClick={() => {
                    handleClick(orders._id);
                }}>Apply</Button>
        </div>)})}
    </div>
}

export default AllOrders