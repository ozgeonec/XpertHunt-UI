import React, {useEffect, useState} from 'react'
import styles from './all-orders.module.css'
import Text from "../text-main/text";
import Button from "../button/button";
import axios from "axios";
import orders from "../../pages/orders";
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
    }]);
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

            console.log(orders)
        }).catch(function (error) {
                console.log(error);
        });

    },[])
    const handleClick = (id) =>{
        axios.post("http://localhost:9000/apply",oneOrder, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(() => {
            setOneOrder(orders)
            //console.log(orders.find((orders)=>orders._id === id))
            setOneOrder([...oneOrder, orders.find((orders)=>orders._id === id)])
            console.log(oneOrder)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return <div>
        {orders.map((orders)=>{
            return (<div  className={styles.div} {...props}>
                <Text dark key={orders._id}>{orders._id}</Text>
                <Text dark key={orders.description}>{orders.description}</Text>
                <Text dark key={orders.budget}>{orders.budget}</Text>
                <Text dark key={orders.buyer.username}>{orders.buyer.username}</Text>
                <Text dark key={orders.applied.username}>Applied: {orders.applied.username}</Text>
                <Button onChange={handleClick(orders._id)}>Apply</Button>
        </div>)})}
    </div>
}

export default AllOrders