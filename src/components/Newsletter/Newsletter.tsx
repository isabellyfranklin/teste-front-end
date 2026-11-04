import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.fields}>
            <input type="text" placeholder="Digite seu nome" aria-label="Nome" />
            <input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
            <button type="submit">Inscrever</button>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
}