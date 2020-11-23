import React from "react";
import styles from "./tech-layout.module.css"
import NavbarBasic from "../navbar/navbar-basic";
import TechDiv from "../tech-div/tech-div";

function TechLayout({...props}) {
    return (<div className={styles.layout}{...props}>
    <NavbarBasic/>
    <TechDiv/>
    </div>)
}

export default TechLayout