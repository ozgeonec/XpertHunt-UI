import React from "react";
import styles from './rating.module.css'
import cn from 'classnames'
import {Star7} from "../icons";
import Text from "../text-main/text";




function Rating({children,score=4.8,people=200, ...props }) {
    return <div className={styles.rating}{...props}>
        <Star7/>
        <Text className={styles.rate}>{score}</Text>
        <Text dark className={styles.desc}>({people})</Text>
    </div>

}

export default Rating