import React, {useState} from "react";
import styles from "./signup.module.css"
import cn from 'classnames'
import axios from 'axios'
import FlashMessage from 'react-flash-message'


function Signup({email,username,password,className, ...props}) {
    const [user, setUser] = useState({
        "email":"",
        "username":"",
        "password":""
    })
    const [message, setMessage] = useState(false)

    const handleClick =  (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/signup', JSON.stringify(user), {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setUser(user);
            console.log(user);
            console.log(res)
            window.location = "/personal-profile"
        }).catch(error => {
            setMessage(true)
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            }
        );

    }
    return (<div className={cn( className)}{...props}>

        <form className={styles.login}>
            {message && <FlashMessage duration={5000} persistOnHover={true}>
                <p className={styles.parag}>Please Enter a valid E-mail&Username</p>
            </FlashMessage>}
            <div className={styles.div}>
            <label  className={styles.label} htmlFor="email">Email:</label>
            <input  className={styles.input} type="email" id="email" name="user[email]" value={user.email} onChange={e => {
                setUser({...user, email: e.target.value});
            }} placeholder="Enter your E-mail"/>
            </div>
            <div className={styles.div}>
            <label className={styles.label}  htmlFor="username">Username:</label>
            <input  className={styles.input} type="text" id="username" name="user[username]" value={user.username} onChange={e => {
                setUser({...user, username: e.target.value})}} placeholder="Enter your username"/>
            </div>
            <div className={styles.div}>
            <label  className={styles.label}  htmlFor="password">Password:</label>
            <input  className={styles.input} type="password" id="password" name="password" value={user.password} onChange={e => {
                setUser({...user, password: e.target.value})}} placeholder="Enter your password"/>
            </div>
            <input className={styles.button} onClick={handleClick} type="submit" value="Sign Up"/>
        </form>
    </div>)
}

export default Signup