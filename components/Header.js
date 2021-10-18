import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.h1} > <span>Amine</span>  Jarhni </h1>
            <p className={styles.descp} > never stop learning </p>
        </div>
    )
}

export default Header
