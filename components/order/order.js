import React, {useContext, useState} from "react";
import styles from "./order.module.css"
import cn from 'classnames'
import Header from "../header/header";
import Text from "../text-main/text";
import axios from "axios";
import TextMain from "../text-main/text-main";
import NavbarBasic from "../navbar/navbar-basic";

/*.containerarea {
    min-width: 270px;
    width: 270px;
    height: 22px;
    line-height: 24px;
    min-height: 22px;
    overflow-y: hidden; /* fixes scrollbar flash - kudos to @brettjonesdev */

function Order({className, ...props}) {

    const [order, setOrder] = useState({
        "description": "",
        "budget": 0
    })
    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/create-order", JSON.stringify(order), {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }).then(function (res) {
            setOrder(order)
            window.location = "/myOrders"
        }).catch(function (error) {
            console.log(error);
        })
    }

    return <div className={cn(className)}{...props}>
        <NavbarBasic/>
        <form className={styles.order}>
            <Header>What Service Are You Looking For?</Header>
            <div>
            <TextMain>Describe the service you're looking to purchase - please be as detailed as possible:</TextMain>
                <div >
                     <textarea rows="10" cols="70" id="description" name="order[description]"
                               value={order.description} onChange={e => {
                         setOrder({...order, description: e.target.value})
                     }} placeholder="I'm looking for...">{}</textarea>
                </div>

            </div>
            <div className={styles.div}>
                <TextMain>What is your budget for this service? $</TextMain>
                <input className={styles.budget} type="number" id="budget" name="order[budget]" value={order.budget}
                       onChange={e => {
                           setOrder({...order, budget: Number(event.target.value)})
                       }} placeholder="$"/>
            </div>
            <input className={styles.button} type="submit" onClick={handleClick} value="Publish"/>
        </form>

    </div>
}

export default Order