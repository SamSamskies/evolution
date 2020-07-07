import Head from 'next/head'

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

          <div className="contributors">
            {/* Add your name and Github here! */}
            <h2>Developers</h2>
            <div className="names">
              <a href="https://github.com/SamSamskies" target="_blank">Sam</a>
              <a href="https://github.com/MarkWillisford" target="_blank">Mark</a>
              <a href="https://github.com/itfibonacci" target="_blank">Levon</a>
              <a href="" target="_blank">Karen</a>
            </div>
          </div>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card" target="_blank">
            <div className="card-header">
              <div className="image"></div>
              <h3>Documentation &rarr;</h3>
            </div>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card" target="_blank">
            <div className="card-header">
              <div className="image"></div>
              <h3>Learn &rarr;</h3>
            </div>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
            target="_blank">
            <div className="card-header">
              <div className="image"></div>
              <h3>Examples &rarr;</h3>
            </div>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
            target="_blank">
            <div className="card-header">
              <div className="image"></div>
              <h3>Deploy &rarr;</h3>
            </div>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx global>
        {globalStyles}
      </style>
    </div> 
  )
}
