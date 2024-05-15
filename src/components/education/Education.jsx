import styles  from './education.module.css';
import Img from "../../public/image/ion_calendar-outline.png";
import Image from 'next/image';

export default function Education (){
    return(<div className={styles.container} id='education'>
        <div className={styles.titlecontainer}>
        <p className={styles.title}>EDUCA</p>
        <p className={styles.title}>TION</p>
        </div>
{/* <h1 className={styles.title}>EDUCATION</h1> */}
<div className={styles.textcontainer}>
    <div className={styles.educationcontainer}>
        {/* <Image src={Img} alt='icon' width={36} height={36}/> */}
    <p className={styles.text}>VSP "ZFKKT NU "Zaporizhia Polytechnic" (ZKR ZNTU) - 113 "Applied mathematics" | 2021-2025</p>
    </div>
    {/* <div className={styles.line}></div> */}
    <div className={styles.educationcontainer}>
    {/* <Image src={Img} alt='icon' width={36} height={36}/> */}
<div className={styles.buttoncontainer}>
        <p className={styles.text}>IT School GoIT  - Fullstack Developer | 2023</p>
        <a className={styles.button} href='https://drive.google.com/file/d/1R5da5UNcpGzOXlKIBi5LI9PfMC1ksk3R/view?usp=drivesdk' target="_blank" rel="noopener noreferrer">View the certificate </a>
</div>
    </div>
</div>


    </div>)
}