import styles from './css/Header.module.css';


const NavBar = () => {

    return (
      <React.Fragment>
        <nav className={styles.navbar}>
          <h4 className={styles.brandlogo}><img src="./icons/dinosaur.png" width="60" /><a href="/">Evolution</a></h4>
          <ul>
            <li><a href="#contributor-section">Developers</a></li>
            <li><a href="#card-section">Explore Next.js</a></li>
            <li><a href="https://github.com/SamSamskies/evolution" target="_blank">Get Involved!</a></li>
            <li><a href="/About">About</a></li>
          </ul>
        </nav>
      </React.Fragment>
    )
}

export default NavBar;