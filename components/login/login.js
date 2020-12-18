import React from "react";
import styles from "./login.module.css"
import cn from 'classnames'
import axios from 'axios'

function Login({className, ...props}) {
    const handleClick = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.value,
            username:this.username,
            password:this.password
        }
        axios.post('http://localhost:9000/signup', user).then(r => console.log(r.data))
    }
    return (<div className={cn(styles.login, className)}{...props}>
        <form>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="email" value={this.email} placeholder="Enter your E-mail"/>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" placeholder="Enter your password"/>
            <input onClick={handleClick} type="submit" value="Submit"/>
        </form>
    </div>)
}

export default Login