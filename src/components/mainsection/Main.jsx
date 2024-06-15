import React, { useState } from 'react';
import styles from "./Main.module.css";
import inst from "../../public/image/instagram.png";
import link from "../../public/image/linkedin.png";
import drible from "../../public/image/dribbble.png";
import git from "../../public/image/git.png";
import Image from 'next/image';
import avatar from "../../public/image/portfolioavatar.png";
export default function MainSection({ onSeeMoreClick }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        onSeeMoreClick(); // Вызываем функцию-обработчик из родительского компонента
    };

    return (
        <div className={styles.container}>



            {!buttonClicked && (<>

<div className={styles.textcontainer}>
<Image src={avatar} alt="avatar" width={65} height={65}/>
                    <p className={styles.text}>Hi, I am Kateryna Syvash  </p>
                    <p className={styles.title}>Full Stack Developer and Programmer for the whole head </p>
                    <p className={styles.text}>My mission is to help you develop your website.</p>
</div>
<div className={styles.buttoncontainer}>
    <button onClick={handleButtonClick} className={styles.button}>See More</button>
    <div>
    <a className={styles.buttonCV} href='https://drive.google.com/file/d/1eRIvzZpC3VvOKpUrb6ho3cJAZspSZJH2/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
        </a>
        </div>
</div>
<div class={styles.links}>
             <a className={styles.link} href="">
                <Image src={inst} alt=' ' width={24} height={24}/>
             </a>
             <a className={styles.link} href=""><Image src={git} alt=' ' width={24} height={24}/></a>
             <a className={styles.link} href=""><Image src={link} alt=' ' width={24} height={24}/></a>
             <a className={styles.link} href=""><Image src={drible} alt=' ' width={24} height={24}/></a>
             
        </div>
                </>

            )}
        </div>
    );
}
