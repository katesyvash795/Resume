import styles from './footer.module.css'
import Image from 'next/image';
import img from '../../public/image/mage_heart-fill.png';
import SVG from '../contacts/svg';


export default function Footer (){
return(<div className={styles.container}>
{/*  */}
<Image src={img} alt='heart' width={24} height={24}  className={styles.pulsatingimage}/><p className={styles.text}>A good day today to create a new product...</p>
{/* <div>
        <a className={styles.button} href='https://drive.google.com/file/d/1em3jx5bdUar3JB5SA79gMjK0a4zIlu5p/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
    <SVG/>
    </a>
    </div> */}
</div>)


}