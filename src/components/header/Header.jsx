import styles from './header.module.css';
import SVG from './svg';

export default function Header({ showNavigation = true }){
return(<div className={styles.container}>
<a className={styles.title} href="#home">KATE <span className={styles.syvash}>SYVASH</span></a>
{showNavigation && (
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
        <a className={styles.link} href='#projects'>Projects</a>
    </li>
    <li className={styles.item}>
        <a className={styles.link} href='#contacts'>Contact me</a>
    </li>
</ul>
)}
<div>
    <a className={styles.button} href='https://drive.google.com/file/d/1em3jx5bdUar3JB5SA79gMjK0a4zIlu5p/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
<SVG/>
</a>
</div>
</div>)


}