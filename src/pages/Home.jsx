import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Title from "../components/title/Title";
import Header from "../components/header/Header";
import About from "@/components/about/About";
 import styles from "./home.module.css";
import Skills from "@/components/skills/Skills";
import Scroll from "@/components/skroll/Skrol";
import Education from "@/components/education/Education";
import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/project/Projects";

export default function HomePage (){
    return(< div className={styles.HomePage}>
    <Scroll/>
    <Header/>    
    <Title/>
    <div className={styles.section}>
    <About/>
    <Skills/>
 <Education/>
       <Projects/>
    <Contacts/>
    <Footer/>
    </div>
    </div>)
}