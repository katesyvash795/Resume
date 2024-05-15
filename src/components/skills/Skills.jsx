import styles from "./skills.module.css";
import {skills} from './index.jsx';
import Image from "next/image";
export default function Skills (){
    return(<div className={styles.background}>
    <div className={styles.container} id="skills">
           <div className={styles.gradientLine}></div>

    <h1 className={styles.title}>MY SKILLS</h1>
    <div className={styles.marquee}>
    {skills["id"].map((index) => {
              return (
                <div key={index}  >
                    <>
                      <Image
                        src={skills["img"][index - 1]}
                        alt={skills["title"][index - 1]}
                        width={300}
                        height={97}
                        className={styles.img}
                      />
                    </>
                </div>);
            })}
    </div>
</div>
</div>
)
}