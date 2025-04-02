import Link from "next/link";
import styles from "./Pagination.module.css";

export const Pagination = ({ next, prev, currentPage }) => {
  const getPageNumber = (url) => {
    if (!url) return null;
    const pageNumber = new URL(url).searchParams.get("page");
    return pageNumber ? parseInt(pageNumber) : null;
  };

  return (
    <section className={styles.pagination}>
      <Link
        className={`${styles.link} ${!prev ? styles.disabled : ""}`}
        href={prev ? `/page/${getPageNumber(prev)}` : "#"}
      >
        &lt; Prev
      </Link>

      <span className={styles.currentPage}>{currentPage}</span>

      <Link
        className={`${styles.link} ${!next ? styles.disabled : ""}`}
        href={next ? `/page/${getPageNumber(next)}` : "#"}
      >
        Next &gt;
      </Link>
    </section>
  );
};
