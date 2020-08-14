import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "../components/Page";



export default function Home() {
  return (
    <div className="container">
      <Page>
        <Header />
        <Footer />
      </Page>
    </div>
  );
}
