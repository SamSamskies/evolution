import Head from 'next/head'
import Contributors from '../components/Contributors';
import Footer from "../components/Footer";
import globalStyles from '../styles/global'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Evolution</title>
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
      </main>
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </div> 
  )
}
