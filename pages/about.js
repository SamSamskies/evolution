import Page from "../components/Page";
import styles from "../components/css/AboutInfo.module.css";

export default function about() {
  return (
    <Page>
      <div className={styles.about}>
        <h1>About</h1>
        <p>
          This site was created to help new developers contribute to an open
          source website. Please contact{" "}
          <a href="https://github.com/SamSamskies">Sam</a> for an invitation to
          contribute and for any pull requests to be added.
        </p>
      </div>
    </Page>
  );
}
