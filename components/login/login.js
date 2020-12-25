import React, {useState} from "react";
import styles from "./login.module.css"
import cn from 'classnames'
import axios from 'axios'


function Login({className,username,password, ...props}) {
    const [user, setUser] = useState({
        "username":"",
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

            window.location = "/personal-profile"

        }).catch(function (error) {
            console.log(error);
        })

    }
    return (<div className={cn(styles.login, className)}{...props}>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="user[username]" value={user.username} onChange={e => {
                setUser({...user, username: e.target.value})}} placeholder="Enter your username"/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={user.password} onChange={e => {
                setUser({...user, password: e.target.value})}} placeholder="Enter your password"/>
            <input onClick={handleClick} type="submit" value="Login"/>
        </form>
    </div>)
}

export default Login