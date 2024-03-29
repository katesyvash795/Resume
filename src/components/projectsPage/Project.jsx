'use client ';
import { useRouter } from 'next/router'; 
import Image from 'next/image';
import styles from './project.module.css';
 export default function Project({project}){

    const router = useRouter();

    return (< div className={styles.container}>
<div className={styles.titlecontainer}>
          <button onClick={() => router.push(`/#projects`)} className={styles.button}><svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928932 13.9289C0.538408 14.3195 0.538408 14.9526 0.928932 15.3431L7.29289 21.7071ZM7 0L7 21H9L9 0L7 0Z" fill="white"/>
    </svg></button>
    <div className={styles.linkcontainer}>
           <h1 className={styles.title}>{project.title}</h1>
           <div className={styles.divlink}>
               <a href={ project.giturl} className={styles.link} target="_blank" rel="noopener noreferrer"> GITHUB | </a>
            <a href={ project.weburl} className={styles.link} target="_blank" rel="noopener noreferrer">WEBSITE</a>
           </div>
    </div>
   
</div>
 <Image src={project.globalimg} alt={project.title} width={1100} height={600} className={styles.img}  priority loading="eager"/>
 <p className={styles.subscription}>{project.subscription}</p>
 <div className={styles.phone}>
<Image src={project.phoneimg} alt={project.title} width={500} height={500}  priority loading="eager" className={styles.phoneimg}/>
<p className={styles.othersubscription}>{project.othersubscription}</p>

 </div>
    </div>)
 }
