import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Header = () => {
  return (
    <div className={styles.pageHeader}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  )
}

export default Header
