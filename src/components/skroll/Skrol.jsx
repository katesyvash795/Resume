'use client'
import React, { useState, useEffect } from 'react';
import styles from './skroll.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 100) { // Показывать кнопку, когда прокрутка более 100 пикселей
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Вызываем useEffect только один раз при монтировании компонента

    return (
        <button className={`${styles.button} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928932 13.9289C0.538408 14.3195 0.538408 14.9526 0.928932 15.3431L7.29289 21.7071ZM7 0L7 21H9L9 0L7 0Z" fill="white"/>
            </svg>
        </button>
    );
}
