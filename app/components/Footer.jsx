import styles from "./Footer.module.css"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright {year} - Sito creato con React & Next</p>
    </footer>
  );
};
