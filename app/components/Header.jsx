import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="/">
          <h1>
            <img src="/logo.svg" />
          </h1>
        </a>
        <small>Catalogo personaggi</small>
      </header>
    </div>
  );
};
