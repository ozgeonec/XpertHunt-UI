import React, {useState} from "react";
import styles from "./order.module.css"
import cn from 'classnames'
import Header from "../header/header";
import Text from "../text-main/text";



function Order({className, ...props}) {
    const [order, setOrder] = useState({
        "buyer":"",
        "description":"",
        "budget":0
    })


    return (<div className={cn(styles.order, className)}{...props}>
        <form>
            <Header>What Service Are You Looking For?</Header>
            <Text>Describe the service you're looking to purchase - please be as detailed as possible:</Text>
            <input type="text"  id="description" value="" name="" placeholder="I'm looking for..."/>
            <Text>What is your budget for this service?</Text>
            <input type="number" id="budget" value="" name="" placeholder="$"/>
            <input type="submit" value="Submit"/>
        </form>

    </div>)
}

export default Order