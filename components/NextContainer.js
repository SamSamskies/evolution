import Cards from "./Cards";
import styles from "./css/NextContainer.module.css";

const NextContainer = (props) => {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default NextContainer;
