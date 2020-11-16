import React from "react";
import styles from "./navbar.module.css"
import {XpertHunt, XpertHuntBlack} from "../icons";
import Button from "../button/button";

function Navbar() {
    return (<div className={styles.navbar}>
            <XpertHunt className={styles.logo} />
            <Button className={styles.button}>Sign In</Button>

    </div>
    )
}

export default Navbar