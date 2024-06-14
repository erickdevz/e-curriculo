import styles from "./comments.module.css";

export function Comments() {
  return (
    <div className={styles.comments}>
      <div className={styles.cardexp}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1066/1066421.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent}>
          <header>
            <div>
            <strong>Experiência</strong>
            </div>
          </header>
          <p>Em busca da minha primeira experiência profissional</p>
        </div>
      </div>
      </div>
      </div>
  );
}
