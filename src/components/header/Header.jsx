import styles from './header.module.css';
import SVG from './svg';


export default function Header(){
return(<div className={styles.container}>
<a className={styles.title} href="#home">KATE <span className={styles.syvash}>SYVASH</span></a>
<ul className={styles.list}>
    <li className={styles.item}>
        <a className={styles.link} href='#About-me'>About me</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#skills'>Skills</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#education'>Education</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#'>Projects</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#contacts'>Contact me</a>
    </li>
</ul>
<div>
    <a className={styles.button} href='https://drive.google.com/file/d/1yjkTvFwsK2s6_TlgKkbFQ-CCEqXsqSNi/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
<SVG/>
</a>
</div>
</div>)


}