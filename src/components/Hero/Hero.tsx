'use client'

import styles from './Hero.module.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectGrid from '../ProjectGrid/ProjectGrid'
import layoutStyles from '@/styles/layout.module.css'

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section id="home" className={`${styles.hero} ${layoutStyles.section}`}>
      <div className={styles.textColumn}>
        <h1 data-aos="fade-right">Omer Haroon</h1>
        <h2 data-aos="fade-right" data-aos-delay="100">
          Strategic Product Leader
        </h2>
        <p data-aos="fade-right" data-aos-delay="200">
          Building user-centric products with measurable impact
        </p>
      </div>
      
      <ProjectGrid />
    </section>
  )
} 