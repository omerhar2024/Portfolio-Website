'use client'

import React from 'react'
import styles from './Connect.module.css'
import layoutStyles from '@/styles/layout.module.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const socials = [
  { 
    platform: 'LinkedIn',
    icon: <FaLinkedinIn size={32} />,
    href: 'https://www.linkedin.com/in/omerharoon/',
    ariaLabel: 'Visit LinkedIn profile'
  },
  {
    platform: 'GitHub',
    icon: <FaGithub size={32} />,
    href: 'https://github.com/omerhar2024',
    ariaLabel: 'Visit GitHub profile'
  },
  {
    platform: 'Email',
    icon: <SiGmail size={32} />,
    href: 'mailto:omerhar2024@gmail.com',
    ariaLabel: 'Send email'
  }
]

export default function Connect() {
  return (
    <footer id="connect" className={`${styles.connect} ${layoutStyles.section}`}>
      <div className={styles.content}>
        <h2>Let's Connect</h2>
        <p>Always interested in discussing new product opportunities and innovations</p>
        
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              aria-label={social.ariaLabel}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              <span className={styles.platform}>{social.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
} 