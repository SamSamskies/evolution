import Cards from "./Cards";

const Footer = () => {
    return (
        <footer>
            <div>
                <Cards />
            </div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Vercel
            </a>
            <a
                href="https://www.flaticon.com/home"
                target="_blank"
                rel="noopener noreferrer"
            >
                Icons by Flaticon
            </a>
        </footer>
    );
};

export default Footer;
