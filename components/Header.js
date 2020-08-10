import Contributors from './Contributors';
import styles from './css/Header.module.css';

const Header = (props) => {

  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <h4 className={styles.brandlogo}><img src="./icons/dinosaur.png" width="60" />Evolution</h4>
        <ul>
          <li><a href="#contributor-section">Developers</a></li>
          <li><a href="#card-section">Explore Next.js</a></li>
          <li><a href="https://github.com/SamSamskies/evolution" target="_blank">Get Involved!</a></li>
        </ul>
      </nav>
      <div className={styles.header}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Welcome to <a href="https://github.com/SamSamskies/evolution" target="_blank">Evolution!</a>
          </h1>

          <p className={styles.description}>This is a fun idea put forth by Sam for a group of developers.</p>
          <p className={styles.description}>Get started by checking out his GitHub and let's work together to see what we can build.</p>
        </div>
        {/* See Contributors component to add your name! */}
        <Contributors />
      </div>
    </React.Fragment>
  )
}

export default Header;