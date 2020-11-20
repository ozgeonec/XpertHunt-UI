import React from 'react'
import styles from './gig.module.css'
import {Techframe} from "../icons";
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";

function Gig(){
    return <div className={styles.div}>
        <img className={styles.vector} src="https://yazilimsirketleri.org/wp-content/uploads/2018/09/Web-development-designing-Anvar-Freelancer-1.png" alt="photo"/>
        <Avatar/>
        <Text dark>ozgeonec</Text>
        <Text dark>I can design web apps for your business</Text>
    </div>
}

export default Gig