import {Header} from './Components/Header'
import { Post } from './Components/Post'
import {Sidebar} from './Components/Sidebar'
import styles from './app.module.css'
import './styles.global.css'

export function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
      </div>  
  )
}
