'use client';
import styles from './header.module.css';
import React, { useState } from 'react';
import SVG from '../footer/svg';

export default function MobileHeader(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
      };

    return(<div className={styles.mobcontainer}>
    <button className={styles.burger} onClick={toggleMenu}>
<svg width="60" height="60" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3125 16.0312H49.6875M10.3125 27H49.6875M10.3125 37.9688H49.6875" stroke="white" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>
</button>
        {isMenuOpen && (
      <>
              <ul className={styles.moblist}>
                <li className={styles.mobitem}>
                  <a className={styles.moblink} href='#About-me' onClick={closeMenu}>About me</a>
                </li>
                <li className={styles.mobitem}>
                  <a className={styles.moblink} href='#skills'onClick={closeMenu}>Skills</a>
                </li>
                <li className={styles.mobitem}>
                  <a className={styles.moblink} href='#education' onClick={closeMenu}>Education</a>
                </li>
                <li className={styles.mobitem}>
                  <a className={styles.moblink} href='#projects' onClick={closeMenu}>Projects</a>
                </li>
                <li className={styles.mobitem}>
                  <a className={styles.moblink} href='#contacts' onClick={closeMenu}>Contact me</a>
                </li>
                <li className={styles.mobitem}>
                <a className={styles.mobbutton} href='https://drive.google.com/file/d/1em3jx5bdUar3JB5SA79gMjK0a4zIlu5p/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
      <SVG/>
      </a>
                </li>
              </ul>

      </>
          )}        
    </div>)
}