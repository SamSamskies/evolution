import Head from 'next/head'
import Header from '../components/Header';
import Contributors from '../components/Contributors';
import Cards from '../components/Cards';

// Importing stylesheets
import globalStyles from '../styles/global'

export default function Home() { 

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="grid">
          {/* CardInfo renders all of the card details as reusable components*/}
          <Cards />
        </div>
      </main>

      <footer>
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

      <style jsx global>
        {globalStyles}
      </style>
    </div> 
  )
}
