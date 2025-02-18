import { Hero, About, Projects, Connect } from '@/components'
import styles from '@/styles/layout.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Connect />
    </main>
  )
} 