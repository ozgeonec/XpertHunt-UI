import React from "react";
import styles from "./navbar-basic.module.css"
import ButtonBasic from "../button/button-basic";
import XpertHuntBlack from "../icons/XpertHuntBlack";
import Avatar from "../avatar/avatar";
import Search from "../searchbar/search";
import cn from 'classnames'

function NavbarBasic({className,...props}) {
    return (<div className={cn(styles.navbarBasic, className)}{...props}>
        <XpertHuntBlack className={styles.logo} />
        <Search dark className={styles.search}/>
       <div className={styles.right}>
           <ButtonBasic dark>Messages</ButtonBasic>
           <ButtonBasic dark>Saved</ButtonBasic>
           <Avatar/>
       </div>
    </div>)
}

export default NavbarBasic