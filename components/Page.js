import NavBar from "./NavBar.js";
import globalStyles from "../styles/global";

const Page = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Page;
