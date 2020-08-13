import NavBar from "../components/NavBar"
import AboutInfo from "../components/AboutInfo"
import globalStyles from "../styles/global";


export default function About() {
    return (
        <div className="container">
            <NavBar />
            <AboutInfo />
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    );
}