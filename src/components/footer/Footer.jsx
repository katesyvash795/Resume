import styles from './footer.module.css'
import Image from 'next/image';
import img from '../../public/image/mage_heart-fill.png';



export default function Footer (){
return(<div className={styles.container}>
<p className={styles.text}>A good day today to create a new product...</p>
<Image src={img} alt='heart' width={24} height={24}  className={styles.pulsatingimage}/>
</div>)


}