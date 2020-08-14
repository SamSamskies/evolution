import styles from "./css/Header.module.css";

const NavBar = () => {
  return (
      <nav className={styles.navbar}>
        <h4 className={styles.brandlogo}>
          <a href="/">
            <img src="./icons/dinosaur.png" width="60" />
          </a>
          Evolution
        </h4>
        <ul>
          <li>
            <a href="https://github.com/SamSamskies/evolution" target="_blank">
              Get Involved!
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
