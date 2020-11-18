import React from "react";
import styles from "./navbar.module.css"
import {XpertHunt} from "../icons";
import Button from "../button/button";
import ButtonBasic from "../button/button-basic";

function Navbar() {
    return (<div className={styles.navbar}>
            <XpertHunt className={styles.logo} />
            <Button className={styles.button}>Sign In</Button>
            <ButtonBasic className={styles.buttonJoin}>JOIN</ButtonBasic>
    </div>)
}

export default Navbar