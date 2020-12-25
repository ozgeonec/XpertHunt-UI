import React from "react";
import styles from "./profile-box.module.css"

import Avatar from "../avatar/avatar";
import Text from "../text-main/text";
import Button from "../button/button";



function ProfileBox({name,job,...props}) {
    return (<div className={styles.profile}{...props}>
     <Avatar/>
     <div className={styles.name}>
         <Text bold dark >{name}</Text>
         <Text pale >{job}</Text>
     </div>
     <hr/>
     <Button>Contact Me</Button>
    </div>)
}

export default ProfileBox