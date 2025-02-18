'use client'

import Image from 'next/image'
import styles from './About.module.css'
import layoutStyles from '@/styles/layout.module.css'
import profileImage from '../../../public/images/profile.jpg'

interface CareerMilestone {
  year: string
  description: string
}

const timeline = [
  {
    year: '2024 - 2023',
    achievements: [
      'Led US Navy ERP implementation,\nonboarding 500+ personnel, securing $15M in contracts with 100% audit compliance',
      'Revamped SaaS pricing strategy,\nachieving 50% lead pipeline growth and $5M new revenue'
    ]
  },
  {
    year: '2022 - 2018',
    achievements: [
      'Drove $5M+ revenue through blockchain marketplace strategy,\nincluding TAM modeling and partner ecosystems',
      'Launched 3+ custom marketplaces,\nachieving 90% partner breakeven and $8M ARR in 12 months'
    ]
  }
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} ${layoutStyles.section}`}>
      <div className={styles.profile}>
        <Image 
          src="/images/Profile Pic 2.jpg"
          alt="Omer Haroon - Professional headshot in a dark suit with a patterned green tie"
          width={400}
          height={400}
          className={styles.image}
          priority
          quality={95}
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
            borderRadius: '8px',
          }}
          sizes="(max-width: 768px) 300px, 400px"
        />
      </div>
      
      <article className={styles.bio}>
        <h2>My Product Philosophy</h2>
        <p className={styles.philosophy}>
          I believe in building products that solve real user problems while driving business growth. 
          My approach combines deep user empathy with data-driven decision making.
        </p>
        
        <div className={styles.timeline}>
          {timeline.map((milestone) => (
            <div 
              key={milestone.year} 
              className={styles.milestone}
              data-aos="fade-up"
            >
              <h3>{milestone.year}</h3>
              {milestone.achievements.map((achievement, index) => (
                <p key={index}>{achievement}</p>
              ))}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
} 