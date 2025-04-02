import styles from "./ListCharacters.module.css";

const getStatus = (status) => {
  const list = [styles.badge, status === "Alive" ? styles.alive : styles.dead];
  return list.join(" ");
};

export const ListCharacters = ({ characters }) => {
  const size = 300;

  return (
    <ul className={styles.listCharacters}>
      {characters.map((current, index) => (
        <li key={index} className={styles.card}>
          <h3 className={styles.title}>{current.name}</h3>
          <figure className={styles.figure}>
            <img
              width={size}
              height={size}
              src={current.image}
              alt={current.name}
              loading="lazy"
            />
          </figure>
          <span className={getStatus(current.status)}>{current.status}</span>
        </li>
      ))}
    </ul>
  );
};
