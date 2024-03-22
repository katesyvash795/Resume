import Title from "../components/title/Title";
import Header from "../components/header/Header";
import About from "@/components/about/About";
 import styles from "./home.module.css";
import Skills from "@/components/skills/Skills";
export default function HomePage (){
    return(<>
    <Header/>    
    <Title/>
    <div className={styles.section}>

    <About/>
    <Skills/>
    </div>
    </>)
}