'use client';
import { useRouter } from 'next/navigation'
import styles from './project.module.css';
import Image from 'next/image';
import {projects} from './index';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

export default function Projects(){
    const router = useRouter()
    return(<div className={styles.container} id='projects'>
    <h1 className={styles.title}>PROJECTS</h1>       
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    {projects["id"].map((index)=>{
        const subscription = projects["subscription"][index - 1].length > 100
        ? `${projects["subscription"][index - 1].slice(0, 100)}...`
        : projects["subscription"][index - 1];
        return(
<SwiperSlide  key={index} className={styles.swippercontainer}>

                <Image src={projects["globalimg"][index-1]} alt={projects["title"][index - 1]} width={300} height={200}  priority loading="eager"/>
     <div className={styles.textcontainer}>
                    
    <div className={styles.linkcontainer}>
                        <p className={styles.nameproject}>
                   { [projects["title"][index-1]]}
                        </p>
    <div>
                            <a href={ [projects["giturl"][index-1]]} className={styles.link} target="_blank" rel="noopener noreferrer"> GITHUB | </a>
                            <a href={ [projects["weburl"][index-1]]} className={styles.link} target="_blank" rel="noopener noreferrer">WEBSITE</a>
    </div>
    </div>
                    <p className={styles.text}>
                    {subscription}
                    </p>
     </div>
     <button type="button" onClick={() => router.push(`/project/${index}`)} className={styles.button}>see more</button>
            </SwiperSlide>

    );})}
          </Swiper>
    
    </div>)
}