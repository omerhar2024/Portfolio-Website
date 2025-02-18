'use client'

import styles from './ProjectGrid.module.css'
import Image from 'next/image'

interface ProjectPreview {
  id: string
  title: string
  image: string
}

const previewProjects: ProjectPreview[] = [
  {
    id: '1',
    title: 'Product Growth Initiative',
    image: "https://picsum.photos/120"
  },
  {
    id: '2',
    title: 'UX Redesign',
    image: "https://picsum.photos/120"
  },
  {
    id: '3',
    title: 'Analytics Platform',
    image: "https://picsum.photos/120"
  }
]

export default function ProjectGrid() {
  return (
    <div className={styles.grid}>
      {previewProjects.map((project) => (
        <div 
          key={project.id} 
          className={styles.preview}
          data-aos="fade-up"
          data-aos-delay={`${parseInt(project.id) * 100}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={120}
            height={120}
            className={styles.image}
            priority={project.id === '1'}
            quality={85}
          />
        </div>
      ))}
    </div>
  )
} 