import React, {useContext, useState} from "react";
import styles from "./order.module.css"
import cn from 'classnames'
import Header from "../header/header";
import Text from "../text-main/text";
import axios from "axios";



function Order({className, ...props}) {


    const [order, setOrder] = useState({
        "description":"",
        "budget":0
    })
    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/create-order", JSON.stringify(order), {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }).then(function (res){
            setOrder(order)
            console.log(order)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return <div className={cn(styles.order, className)}{...props}>
        <form>
            <Header>What Service Are You Looking For?</Header>
            <Text dark>Describe the service you're looking to purchase - please be as detailed as possible:</Text>
            <input type="text"  id="description" name="order[description]" value={order.description} onChange={e => {
                setOrder({...order, description: e.target.value})}} placeholder="I'm looking for..."/>
            <Text dark>What is your budget for this service?</Text>
            <input type="number" id="budget" name="order[budget]" value={order.budget} onChange={e => {
                setOrder({...order, budget:Number(event.target.value)})}} placeholder="$"/>
            <input type="submit" onClick={handleClick} value="Publish"/>
        </form>

    </div>
}

export default Order