'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Projects.module.css'
import layoutStyles from '@/styles/layout.module.css'

interface Project {
  title: string
  description: string
  metrics: string[]
  role: string
  img: string
}

const projects: Project[] = [
  {
    title: 'Product Growth Initiative',
    description: 'Led end-to-end product strategy and execution for core platform features',
    metrics: [
      '40% increase in user engagement',
      '$2M in new revenue',
      '30% reduction in churn'
    ],
    role: 'Senior Product Manager',
    img: "https://picsum.photos/600/400"
  },
  {
    title: 'User Experience Redesign',
    description: 'Spearheaded complete UX overhaul of main product dashboard',
    metrics: [
      '60% improvement in user satisfaction',
      '25% increase in feature adoption',
      '45% decrease in support tickets'
    ],
    role: 'Product Lead',
    img: "https://picsum.photos/600/400"
  },
  {
    title: 'Analytics Platform Launch',
    description: 'Developed and launched new analytics platform for enterprise clients',
    metrics: [
      '85% enterprise client adoption',
      '3x increase in data insights',
      '$1.5M in enterprise upsells'
    ],
    role: 'Senior Product Manager',
    img: "https://picsum.photos/600/400"
  }
]

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} ${layoutStyles.section}`}>
      <h2 data-aos="fade-up">Product Portfolio</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article 
            key={project.title} 
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className={styles.image}
                quality={85}
              />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.role}>{project.role}</p>
              <ul className={styles.metrics}>
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
} 