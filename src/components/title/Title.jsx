import styles from './title.module.css';
import Image from 'next/image';
import img from "../../public/image/titlephoto.png";
export default function Title(){
return(<div className={styles.container} id='home'>
<div className={styles.textContainer}>
    
    <h1 className={styles.title}>Hi! I'<span className={styles.text}>m a</span> Full <span className={styles.text}>Stack</span> deve<span className={styles.text}>loper!</span></h1>
</div>
<div className={styles.photoContainer}>
    <Image src={img} alt="my photo" width={1029} height={900} priority loading="eager" className={styles.img}/> 
</div>
</ div>)

}