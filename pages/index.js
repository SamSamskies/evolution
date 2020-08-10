
import Head from 'next/head'
import Header from '../components/Header';
import Footer from "../components/Footer";
import Cards from '../components/Cards';

// Importing stylesheets
import globalStyles from '../styles/global'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Evolution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}
