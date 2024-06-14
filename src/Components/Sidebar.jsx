import styles from './sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem-Sidebar" />
        <div className={styles.profile}>
            <img className={styles.avatar} src="../img/eu3.jpg" alt="imagem-Avatar" />
            <strong>Erick</strong>
            <span>FullStack</span>
        </div>

        <footer>
          <span>
            <a href=" https://github.com/erickdevz" className={styles.imgtl}><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/erick-xavier-psx" className={styles.imgtl}><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" /></a>
          </span>
            
        </footer>

    </aside>
  )
}