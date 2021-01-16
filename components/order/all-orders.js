import React, {useEffect, useState} from 'react'
import styles from './all-orders.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";
import NavbarBasic from "../navbar/navbar-basic";
import TextMain from "../text-main/text-main";


function AllOrders({children, ...props}) {
    const [orders, setOrders] = useState([]);
    const [oneOrder, setOneOrder] = useState([])
    const [name,setName]= useState()

    useEffect(() => {
        axios.get("http://localhost:9000/allOrders", {
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

    const handleClick = (id) => {
        axios.post("http://localhost:9000/apply", JSON.stringify(oneOrder), {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(() => {
            let newOrd = orders.find((o) => o._id === id)
            setOneOrder(newOrd)
            console.log(oneOrder)

        }).catch(function (error) {
            console.log(error);
        })
    }
   /* const handleName = () => {
        axios.post("http://localhost:9000/:username", JSON.stringify(name), {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(() => {
            setName(name)
            window.location = "/profile"
        }).catch(function (error) {
            console.log(error); onClick ={()=>handleName}
        })
    }*/
    return <div className={styles.layout}>
        <NavbarBasic/>
        <div className={styles.container}>
            {orders.map((orders) => {
                return (
                    <div className={styles.div} {...props}>
                        <TextMain key={orders.description}>{orders.description}</TextMain>
                        <Text dark key={orders.budget}>${orders.budget}</Text>
                        <TextMain key={orders.buyer.username}>{orders.buyer.username}</TextMain>
                        <TextMain key={orders.applied}>Applied: {orders.applied}</TextMain>
                        <Button onClick={() => {
                            handleClick(orders._id);
                        }}>Apply</Button>
                    </div>)})}
        </div>

    </div>
}

export default AllOrders