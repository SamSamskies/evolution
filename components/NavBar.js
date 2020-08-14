import styles from "./css/Header.module.css";
import Link from 'next/link';

const NavBar = () => {
  return (
      <nav className={styles.navbar}>
        <h4 className={styles.brandlogo}>
          <Link href="/">
            <img src="./icons/dinosaur.png" width="60" />
          </Link>
          Evolution
        </h4>
        <ul>
          <li>
            <a href="https://github.com/SamSamskies/evolution" target="_blank">
              Get Involved!
            </a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
