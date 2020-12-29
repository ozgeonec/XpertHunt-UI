import React from "react";
import styles from "./order.module.css"
import cn from 'classnames'
import Header from "../header/header";



function Order({className, ...props}) {
    return (<div className={cn(styles.order, className)}{...props}>
    <Header>What Service Are You Looking For?</Header>

    </div>)
}

export default Order