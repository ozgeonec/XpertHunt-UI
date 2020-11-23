import React from "react";
import styles from "./profession-layout.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import Gig from "../gig/gig";
import {Firstpagedesign} from "../icons";
import Header from "../header/header";
import Text from "../text-main/text";
// import ReactDropdown from "react-dropdown";
// import 'react-dropdown/style.css';

function ProfessLayout({...props}) {
    return (<div className={styles.layout}{...props}>
        <NavbarBasic/>
        <div className={styles.header}>
            <Header>Web Development</Header>
            <Text pale className={styles.text}>Add features to your website with custom web applications and extensions</Text>

        </div>
        <Firstpagedesign className={styles.vector}/>
        <div className={styles.gig}>
            <Gig/>
            <Gig/>
            <Gig/>
            <Gig/>
        </div>

    </div>)
}

export default ProfessLayout