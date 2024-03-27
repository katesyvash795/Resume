'use client';
import './globalproject.css'
import styles from './projectId.module.css'
import { useRouter } from 'next/router';
import { projects } from '../../components/project/index'; 
import Image from 'next/image';
import Project from '@/components/projectsPage/Project';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  // Поиск индекса проекта в массиве projects.id
  const projectIndex = projects.id.indexOf(Number(projectId));

  // Получение данных проекта на основе найденного индекса
  const project = projectIndex !== -1 ? {
    id: projects.id[projectIndex],
    title: projects.title[projectIndex],
    giturl: projects.giturl[projectIndex],
    weburl: projects.weburl[projectIndex],
    globalimg: projects.globalimg[projectIndex],
    phoneimg: projects.phoneimg[projectIndex],
    subscription: projects.subscription[projectIndex],
    othersubscription: projects.othersubscription[projectIndex],
  } : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.container}>
        <Header/>
      <Project project={project}/>
      <Footer/>
    </div>
  );
}
