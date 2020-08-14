import Contributors from "./Contributors";
import styles from "./css/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/SamSamskies/evolution" target="_blank">
            Evolution!
          </a>
        </h1>

        <p className={styles.description}>
          This is a fun idea put forth by Sam for a group of developers.
        </p>
        <p className={styles.description}>
          Get started by checking out his GitHub and let's work together to see
          what we can build.
        </p>
      </div>
      {/* See Contributors component to add your name! */}
      <Contributors />
    </div>
  );
};

export default Header;
