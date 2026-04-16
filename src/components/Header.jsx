import styles from "../styles/Header.module.scss"

const Header = ({title, description}) => {
  return (
    <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Header
