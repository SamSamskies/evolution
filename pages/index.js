import Head from 'next/head'
import Contributors from '../components/Contributors';
import Card from '../components/Card';

// Importing stylesheets
import globalStyles from '../styles/global'

export default function Home() { 

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <div className="intro">
            <h1 className="title">
              Welcome to <a href="https://github.com/SamSamskies/evolution" target="_blank">Evolution!</a>
            </h1>

            <p className="description">This is a fun idea put forth by Sam for a group of developers.</p>
            <p className="description">Get started by checking out his GitHub and let's work together to see what we can build.</p>
          </div>
          {/* See Contributors component to add your name! */}
          <Contributors />
        </div>

        <div className="grid">
          {/* CardInfo renders all of the card details as reusable components*/}
          <Card />
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
