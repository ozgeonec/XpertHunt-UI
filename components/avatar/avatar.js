import React from 'react'
import cn from 'classnames'
import styles from './avatar.module.css'

function Avatar({ src, alt, size = 37, ...props }) {
    return (
        <div className={cn([styles.photo])} style={{ width: size, height: size }}{...props}>
            <img
                className={styles.img}
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                alt={alt}
            />
        </div>
    )
}

export default Avatar