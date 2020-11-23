import React from 'react'
import styles from './gig.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import {Bookmark2, Like2, Star7} from "../icons";
import Header from "../header/header";
import Rating from "../rating/rating";

function Gig({name="ozgeonec",job="developer",desc="I can develop your website",score=4.8,rated=200,price="18.80",src="https://yazilimsirketleri.org/wp-content/uploads/2018/09/Web-development-designing-Anvar-Freelancer-1.png"}){
    return <div className={styles.div}>
        <img className={styles.vector} src={src} alt="photo"/>
        <div className={styles.profile}>
        <Avatar/>
        <div className={styles.name}>
            <Text bold dark className={styles.text}>{name}</Text>
            <Text pale className={styles.text}>{job}</Text>
        </div>
        </div>
        <Text pale className={styles.text}>{desc}</Text>
        <div className={styles.rating}>
            <Rating/>
        </div>

        <hr className={styles.hr}/>
        <div className={styles.bottom}>
        <div className={styles.emoji}>
            <Bookmark2/>
            <Like2/>
        </div>
        <div className={styles.price}>
            <Text pale className={styles.text}>STARTING AT </Text>
            <Header className={styles.header}>${price}</Header>
        </div>
        </div>

    </div>
}

export default Gig