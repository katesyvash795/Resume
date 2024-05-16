import styles from "./contacts.module.css";
import Map from "./map/Map";
import Image from "next/image";
import { icons } from "./icons/icons";
import SVG from "./svg";
export default function Contacts() {
  return (
    <div className={styles.section} id="contacts">
      <h1 className={styles.title}>CONTACTS</h1>
      <div className={styles.textContainer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[0].url}
              alt={icons[0].name}
              width={43}
              height={43}
            />{" "}
<div className={styles.phonelink}>
                <a href="tel:+380952416795" className={styles.link}>
                  +38(095)-24-16-795 - Vodafone
                </a>
                <a href="tel:+380972079519" className={styles.link}>
                  +38(097)-207-95-19 - Kyivstar
                </a>
</div>
          </li>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[1].url}
              alt={icons[1].name}
              width={43}
              height={43}
            />{" "}
            <a href="mailTo:katesyvash@gmail.com" className={styles.link}>
              katesyvash@gmail.com
            </a>
          </li>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[2].url}
              alt={icons[2].name}
              width={43}
              height={43}
            />{" "}
            <a className={styles.link} href="https://www.bing.com/maps?q=Zaporizhzhia&satid=id.sid%3Aac174e6f-d880-2ddf-6d6b-dec80d43c841&FORM=KC2MAP&cp=47.85599%7E35.157665&lvl=12.1">Zaporozhye Ukraine</a>
          </li>

        </ul> 
        <ul className={styles.list}>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[3].url}
              alt={icons[3].name}
              width={43}
              height={43}
            />{" "}
            <a href="https://github.com/katesyvash795"  target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
          </li>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[4].url}
              alt={icons[4].name}
              width={43}
              height={43}
            />{" "}
            <a
              href="https://www.linkedin.com/in/kate-syvash/" target="_blank" rel="noopener noreferrer"
              className={styles.link}
            >
              Linkedin
            </a>
          </li>
          <li className={styles.item}>
            {" "}
            <Image
              src={icons[5].url}
              alt={icons[5].name}
              width={43}
              height={43}
            />{" "}
            <a href="https://t.me/ekaterinakatrinakate"  target="_blank" rel="noopener noreferrer" className={styles.link}>
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className={styles.button} href='https://drive.google.com/file/d/1em3jx5bdUar3JB5SA79gMjK0a4zIlu5p/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><span>Dowload CV</span> 
    </a>
    </div>
    </div>
  );
}
