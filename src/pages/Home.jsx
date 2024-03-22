import Title from "../components/title/Title";
import Header from "../components/header/Header";
import About from "@/components/about/About";
 import styles from "./home.module.css";
import Skills from "@/components/skills/Skills";
import Scroll from "@/components/skroll/Skrol";
import Education from "@/components/education/Education";
export default function HomePage (){
    return(< div className={styles.HomePage}>
    <Scroll/>
    <Header/>    
    <Title/>
    <div className={styles.section}>
    <About/>
    <Skills/>
    <Education/>
    </div>
    </div>)
}