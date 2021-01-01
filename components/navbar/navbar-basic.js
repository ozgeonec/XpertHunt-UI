import React from "react";
import styles from "./navbar-basic.module.css"
import ButtonBasic from "../button/button-basic";
import XpertHuntBlack from "../icons/XpertHuntBlack";
import Avatar from "../avatar/avatar";
import Search from "../searchbar/search";
import cn from 'classnames'
import {useRouter} from "next/router";
import Text from "../text-main/text";

function NavbarBasic({className,username,...props}) {
    const router = useRouter();
    return (<div className={cn(styles.navbarBasic, className)}{...props}>
        <XpertHuntBlack className={styles.logo} onClick={() => router.push('/')} />
        <Search dark className={styles.search}/>
       <div className={styles.right}>
           <ButtonBasic dark>Adverts</ButtonBasic>
           <ButtonBasic dark onClick={()=>router.push('/myOrders')}>Orders</ButtonBasic>
           <Avatar/>
           <Text dark>{username}</Text>
       </div>
    </div>)
}

export default NavbarBasic