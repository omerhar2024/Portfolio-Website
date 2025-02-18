'use client'

import styles from './ResumeAccordion.module.css'
import layoutStyles from '@/styles/layout.module.css'
import { FaRegFileAlt } from 'react-icons/fa'
import Image from 'next/image'

const experiences = [
  {
    role: 'Senior Product Manager',
    company: 'ABS Wavesight (Maritime Technology)',
    period: 'Aug 2023 - Dec 2024',
    achievements: [
      'Delivered US Navy ERP system under a 9-month federal deadline, onboarding 500+ defense personnel and achieving 100% audit compliance, securing four government contracts worth $15M',
      'Reduced sprint spillover to less than 10% by implementing SAFe frameworks, including cross-functional PI planning and dependency mapping, accelerating release cycles by 30%',
      'Revamped pricing strategy for underperforming SaaS modules, introducing modular tiers, resulting in 50% lead pipeline growth and $5M in new customer revenue',
      'Launched Crew portal, reducing scheduling errors by 90% for 10K+ maritime workers and improving task completion rates by 60% through automated workflows',
      'Modernized legacy on-premise systems to a scalable web architecture, migrating 70% of users within 6 months and preserving $10M in annual recurring revenue'
    ]
  },
  {
    role: 'Senior Product Manager',
    company: 'Energi Core (Blockchain Technology)',
    period: 'Sep 2018 - Jul 2023',
    achievements: [
      'Drove $5M+ annual revenue growth by leading go-to-market strategy for blockchain marketplace products, including TAM modeling, pricing/bundling, and partner ecosystems based on primary customer surveys',
      'Reduced sprint delays by 20% by instituting Agile ceremonies (daily scrums, WIP limits) and owning end-to-end documentation (PRDs, user journeys, SLAs) for 5+ development teams',
      'Increased user retention by 15% via data-driven customer cohort analysis (DAU/MAU), collaborating with data scientists to design a retention strategy adopted by product/marketing teams',
      'Launched 3+ customized blockchain marketplaces with phased roadmaps and client-specific features, directly contributing to 90% partner breakeven and $2M ARR within 12 months'
    ]
  },
  {
    role: 'Project Manager',
    company: 'Pfizer (Pharmaceutical - Contract)',
    period: 'Jan 2018 - June 2018',
    achievements: [
      'Transformed Tableau reporting via predictive analytics and real-time tender/contract insights, reducing manual analysis and boosting deal wins by 15% through faster lead identification',
      'Optimized Jira performance by analyzing 100+ user feedback tickets, redesigning critical UI workflows, and automating defect triage, cutting resolution time by 30%',
      'Executed 500+ test cases (Functional, UAT, E2E) across the product, collaborating with QA to reduce post-release defects by 40% and align stakeholder expectations through iterative UAT reviews'
    ]
  },
  {
    role: 'Solutions Consultant',
    company: 'GEP Worldwide (Client: Exxon Mobile & Verizon)',
    period: 'Aug 2015 - June 2017',
    achievements: [
      'Resolved inaccurate data setbacks with technology resolution teams, properly defining the reporting objects utilized by end users. Efforts resulted in the creation of accurate reporting tools',
      'Successfully conducted in-person business reviews by gathering feedback from the clients power users and developed automated rules based on the input, eliminating manual system interaction',
      'Designed and Implemented compliance frameworks, such as compliance risk assessment processes, compliance policies and procedures, and compliance training programs, leading to an automated due diligence reporting tool'
    ]
  }
]

const skills = [
  'AI Prototyping & Development',
  'Product Strategy & Innovation',
  'Revenue & Growth Leadership',
  'Product Roadmap & Vision',
  'Cross-Functional Leadership',
  'Agile Product Development',
  'Product Analytics & Insights',
  'Enterprise Product Architecture',
  'Product Portfolio Management'
]

const tools = [
  { name: 'Jira', image: '/images/tools/jira.svg.svg' },
  { name: 'Confluence', image: '/images/tools/confluence.svg.svg' },
  { name: 'Cursor', image: '/images/tools/cursor.svg.svg' },
  { name: 'Azure DevOps', image: '/images/tools/azure-devops.svg.svg' },
  { name: 'Google Analytics', image: '/images/tools/google-analytics.svg.svg' },
  { name: 'Figma', image: '/images/tools/figma.svg.svg' },
  { name: 'GitHub', image: '/images/tools/github.svg.svg' },
  { name: 'Miro', image: '/images/tools/miro.svg.svg' },
  { name: 'Product Board', image: '/images/tools/productboard.svg.svg' },
  { name: 'Tableau', image: '/images/tools/tableau.svg.svg' }
]

export default function ResumeAccordion() {
  return (
    <section id="resume" className={`${styles.resume} ${layoutStyles.section}`}>
      <details className={styles.details} open>
        <summary>
          <div className={styles.header}>
            <h2>Professional Experience</h2>
            <a 
              href="/resume.pdf" 
              className={styles.downloadButton}
              download="Omer-Haroon-Resume.pdf"
              aria-label="Download Resume"
            >
              <FaRegFileAlt size={24} />
            </a>
          </div>
        </summary>
        
        <div className={styles.section}>
          {experiences.map((experience) => (
            <div key={experience.role} className={styles.role}>
              <h3>{experience.role}</h3>
              <p className={styles.company}>{experience.company}</p>
              <p className={styles.period}>{experience.period}</p>
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
      
      <details className={styles.details} open>
        <summary>
          <div className={styles.header}>
            <h2>Core Competencies</h2>
          </div>
        </summary>
        <div className={styles.section}>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </details>

      <details className={styles.details} open>
        <summary>
          <div className={styles.header}>
            <h2>Tools</h2>
          </div>
        </summary>
        <div className={styles.section}>
          <div className={styles.skills}>
            {tools.map((tool) => (
              <div 
                key={tool.name} 
                className={styles.skill}
              >
                <Image
                  src={tool.image}
                  alt={`${tool.name} logo`}
                  width={48}
                  height={48}
                  className={styles.toolImage}
                />
                <span className={styles.toolName}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </details>
    </section>
  )
} 