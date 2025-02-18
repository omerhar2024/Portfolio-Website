'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaHome, FaFileDownload } from 'react-icons/fa'

const navItems = [
  { name: <FaHome size={20} />, path: '/', ariaLabel: 'Home' },
  { name: 'About Me', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Resume', path: '/resume', ariaLabel: 'Resume' },
  { name: 'Connect', path: '/#connect' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          
        </Link>
        <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
              key={typeof item.name === 'string' ? item.name : item.ariaLabel}
              href={item.path}
              className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
              aria-label={item.ariaLabel}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon} />
        </button>
      </div>
    </nav>
  )
} 