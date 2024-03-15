import styles from './header.module.css';
import SVG from './svg';


export default function Header(){
return(<div className={styles.container}>
<h1 className={styles.title}>KATE <span className={styles.syvash}>SYVASH</span></h1>
<ul className={styles.list}>
    <li className={styles.item}>
        <a className={styles.link} href='#'>About me</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#'>Skills</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#'>Education</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#'>Projects</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#'>Contact me</a>
    </li>
</ul>
<div>
    <button className={styles.button}><span>Dowload CV</span> 
<SVG/>
</button>
</div>
</div>)


}