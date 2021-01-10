import React, {useState} from 'react'
import styles from './gig.module.css'
import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Header from "../header/header";
import axios from "axios";
import TextMain from "../text-main/text-main";
import NavbarBasic from "../navbar/navbar-basic";

//category
function Gig({className,...props}){
    const [ad,setAd] = useState({
            "title":"",
            "about":"",
            "price":0
    })

    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/create-ad", JSON.stringify(ad), {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }).then(function (res){
            setAd(ad)
            console.log(ad)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return <div className={styles.layout} {...props}>
        <NavbarBasic/>

        <form className={styles.div}>
            <Header>Create Your Ad:</Header>
            <TextMain>Your Job Title:</TextMain>
            <input type="text"  id="title" name="ad[title]" value={ad.description} onChange={e => {
                setAd({...ad, title: e.target.value})}}/>
            <TextMain>Describe Your Talents:</TextMain>
            <input type="text" id="about" name="ad[about]" value={ad.about} onChange={e => {
                setAd({...ad, about:event.target.value})}} placeholder="I can..."/>
            <TextMain>STARTING AT:</TextMain>
            <input type="number" id="price" name="ad[price]" value={ad.price} onChange={e => {
                setAd({...ad, price:Number(event.target.value)})}} placeholder="$"/>
            <input  className={styles.button} type="submit" onClick={handleClick} value="Publish"/>
        </form>


    </div>
}

export default Gig