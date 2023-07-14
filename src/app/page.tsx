import styles from '../styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured />
      <PizzaList/>
    </main>
  )
}
