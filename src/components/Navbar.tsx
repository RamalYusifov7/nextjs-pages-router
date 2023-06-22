import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarLink}  href="/">Home</Link>
      <ul className={styles.navbarList}>
        {categorySlugs.map((slug) => (
          <li key={slug} className={styles.navbarItem}>
            <Link className={styles.navbarLink} href={`/categories/${slug}`}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
