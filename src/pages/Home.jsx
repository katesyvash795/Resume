import Title from "../components/title/Title";
import Header from "../components/header/Header";
import About from "@/components/about/About";
 import styles from "./home.module.css";
export default function HomePage (){
    return(<>
    <Header/>
    <div className={styles.section}>
    <Title/>
    <About/>
    
    </div>
    </>)
}