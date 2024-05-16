"use client"
import React, { useState } from 'react';
import styles from "./home.module.css";
import MainSection from '../components/mainsection/Main';
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Scroll from "@/components/skroll/Skrol";
import Education from "@/components/education/Education";
import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/project/Projects";

export default function HomePage() {
    const [showMore, setShowMore] = useState(false);
    const [showMainSection, setShowMainSection] = useState(true);

    const handleSeeMoreClick = () => {
        setShowMore(true);
        setShowMainSection(false);
    };

    const handleReturnToMainSection = () => {
        setShowMainSection(true);
        setShowMore(false);
    };

    return (
        <div className={styles.HomePage}>
            {showMainSection && <MainSection onSeeMoreClick={handleSeeMoreClick} />}
            {showMore && (
                <div className={styles.section}>
                    <Header />
                    <button onClick={handleReturnToMainSection} className={styles.button}>            
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071L0.928932 15.3431C0.538408 14.9526 0.538408 14.3195 0.928932 13.9289C1.31946 13.5384 1.95262 13.5384 2.34315 13.9289L8 19.5858L13.6569 13.9289C14.0474 13.5384 14.6805 13.5384 15.0711 13.9289C15.4616 14.3195 15.4616 14.9526 15.0711 15.3431L8.70711 21.7071ZM9 -4.37114e-08L9 21H7L7 -4.37114e-08L9 -4.37114e-08Z" fill="white"/>
</svg>


            </button>
                    <Title />
                    <About />
                    <Education />
                    <Skills />
                    <Projects />
                    <div>
                        <Contacts />
                        <Footer />
                        
                    </div>
                </div>
            )}
            <Scroll />
        </div>
    );
}
