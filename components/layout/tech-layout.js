import React from "react";
import styles from "./tech-layout.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import TechDiv from "../tech-div/tech-div";
import Gig from "../gig/gig";

function TechLayout({...props}) {
    return (<div className={styles.layout}{...props}>
    <NavbarBasic/>
    <TechDiv/>
    <Gig/>
    </div>)
}

export default TechLayout