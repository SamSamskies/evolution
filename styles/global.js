// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  :root {
    --dark-gray: #282828;
    --mid-gray: #535353;
    --gray: #757580;
    --light-gray: #ebebff;
    --orange: #ff8119;
    --pink: #f25ca2;
    --blue: #0b9ed9;
  }

  html,
  body,
  div,
  h1,
  h2,
  h3,
  p,
  a,
  ul {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    background: white;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    border-top: 1px solid var(--light-gray);
    width: 100%;
    margin-top: 2%;
    box-sizing: border-box;
    padding: 1% 2% 1% 2%;
  }

  footer a {
    font-size: 12px;
    color: var(--gray);
    margin-bottom: 0.5%;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2 {
    margin-bottom: 5%;
  }

  h1 {
    font-size: 24px;
    color: var(--dark-gray);
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--gray);
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  a:hover {
    cursor: pointer;
  }

  p {
    color: var(--mid-gray);
  }

  .card {
    box-sizing: border-box;
    padding: 3%;
    width: 47%;
    margin: 2% 1.5% 2% 1.5%;
    border: 2px solid black;
  }

  .card:hover,
  .card:focus,
  .card:active {
    border-color: var(--blue);
  }

  .card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3%;
  }

  .card h3 {
    font-size: 1.2rem;
    color: var(--pink);
  }

  .card img {
    width: 2em;
    height: 2em;
    // background: orange;
    margin-right: 3%;
  }

  .card p {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--gray);
  }

  .logo {
    height: 0.8rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;
