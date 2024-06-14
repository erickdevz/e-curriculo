import styles from "./formation.module.css";

export function Formation() {
  return (
    <div className={styles.Format}>
      <div className={styles.cardFormat}>
      <img
        src="../img/diploma.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent2}>
          <header>
            <div>
            <strong>Desenvolvimento FullStack</strong>
            </div>
          </header>
          <p>Serviço Nacional de Aprendizagem Industrial (Senai)
            </p>
        </div>
      </div>
      </div>
      <div className={styles.cardFormat}>
      <img
        src="../img/diploma.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent2}>
          <header>
            <div>
            <strong>Desenvolvimento FullStack JavaScript
            </strong>
            </div>
          </header>
          <p>Escola Britânica de Artes Criativas & Tecnologia (EBAC)</p>
        </div>
      </div>
      </div>
      <div className={styles.cardFormat}>
      <img
        src="../img/diploma.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent2}>
          <header>
            <div>
            <strong>Analista e Desenvolvimento de Sistemas</strong>
            </div>
          </header>
          <p>Unicesumar</p>
        </div>
      </div>
    </div>
    <div className={styles.cardFormat}>
      <img
        src="../img/diploma.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent2}>
          <header>
            <div>
            <strong>Curso Inteligência Artificial</strong>
            </div>
          </header>
          <p>Escola Britânica de Artes Criativas & Tecnologia (EBAC)</p>
        </div>
      </div>
    </div>
    </div>
  );
}
