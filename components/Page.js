import NavBar from "./NavBar.js";
import Head from "next/head";
import globalStyles from "../styles/global";

const Page = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Evolution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Page;
