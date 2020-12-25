import React from "react";
import styles from "./navbar.module.css"
import {XpertHunt} from "../icons";
import Button from "../button/button";
import ButtonBasic from "../button/button-basic";
import {useRouter} from "next/router";


function Navbar() {
    const router = useRouter()
    const handleLogin = () =>{
        router.push('/login');
    }
    const handleJoin = () => {
       router.push('/signup');
    }
    return (<div className={styles.navbar}>
            <XpertHunt className={styles.logo} />
            <Button onClick={handleLogin}  className={styles.button}>LOGIN</Button>
            <ButtonBasic onClick={handleJoin} className={styles.buttonJoin}>JOIN</ButtonBasic>
    </div>)
}

export default Navbar