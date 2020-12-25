import React, {useState} from "react";
import styles from "./login.module.css"
import cn from 'classnames'
import axios from 'axios'


function Login({className,email,username,password, ...props}) {
    const [user, setUser] = useState({
        "email":"",
        "password":""
    })

    const handleClick =  (e) => {
        e.preventDefault();
        let token = 'xxyyzz';
        axios.post('http://localhost:9000/login', JSON.stringify(user), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            setUser(user);console.log(user);
        }).catch(function (error) {
            console.log(error);
        })

    }
    return (<div className={cn(styles.login, className)}{...props}>
        <form>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="user[email]" value={user.email} onChange={e => {
                setUser({...user, email: e.target.value}); console.log("target:" + e.target.value)
                console.log("email"+ email)
            }} placeholder="Enter your E-mail"/>

            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={user.password} onChange={e => {
                setUser({...user, password: e.target.value})}} placeholder="Enter your password"/>
            <input onClick={handleClick} type="submit" value="Login"/>
        </form>
    </div>)
}

export default Login