import styles from './css/AboutInfo.module.css'

const AboutInfo = () => {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>
                This site was created to help new developers contribute to an open source website. Please contact <a href="https://github.com/SamSamskies">Sam</a> for an invitation to contribute and for any 
                pull requests to be added.
            </p>
        </div>
    )
}

export default AboutInfo
