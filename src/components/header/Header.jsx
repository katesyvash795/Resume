'use client'
import MobileHeader from './MobileHeader';
import styles from './header.module.css';
import SVG from '../footer/svg';    
import React, { useState } from 'react';

export default function Header({ showNavigation = true, showburger=true }){

return(<>

<div className={styles.container}>
{showburger && (<MobileHeader className={styles.MobileHeader} />)}
<a className={styles.title}>portfolio</a>

{showNavigation && (
<>
    <ul className={styles.list}>
        <li className={styles.item}>
            <a className={styles.link} href='#About'>About</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href='#projects'>Projects</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href='#contacts'>Contact</a>
        </li>
    </ul>
</>
)}

</div>
</>)


}
