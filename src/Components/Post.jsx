import { Comments } from './Comments';
import { Formation } from './Formation';
import styles from './post.module.css';



export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}  >
                <img className={styles.avatar} src="../img/eu3.jpg"alt="" />
            <div className={styles.authorInfo}>
                <strong >Erick Xavier</strong>
                <span>Desenvolvedor FullStack e Analista de Dados</span>
            </div>
            </div>
        </header>
        <div className={styles.content}>
            <p className={styles.vc}>Sobre Você</p>
            <p>Desde 2022, venho desenvolvendo aplicações em HTML, CSS e outras tecnologias
            relevantes, contribuindo para projetos premiados pelo Grupo Energisa.
            Durante minhas experiências, adquiri habilidades significativas em desenvolvimento
            frontend, backend e IA. Além disso, desenvolvi uma sólida capacidade de resolver conflitos
            e colaborar efetivamente em equipe, o que tem sido fundamental em minha jornada
            profissional.
            </p>
        </div>

        <form className={styles.commentsForm}>
            <strong>Formação Prossfional</strong>
        </form>
        <div>

            <Formation />

        </div>
        <form className={styles.commentsForm}>
            <strong>Experiência Profissional</strong>
        </form>
        <div>

            <Comments />

        </div>


    </article>
  )
}