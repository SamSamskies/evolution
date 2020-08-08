// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
  :root {
    --dark-gray: #282828;
    --mid-gray: #535353;
    --gray: #757580;
    --light-gray: #EBEBFF;
    --orange: #FF8119;
    --pink: #F25CA2;
    --blue: #0B9ED9;
  }

  html, body, div, h1, h2, h3, p, a, ul {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  html {
    background: white;
    box-sizing: border-box;
    padding: 2% 5%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    border-top: 1px solid var(--light-gray);
    width: 100%;
    margin-top: 7%;
    box-sizing: border-box;
    padding: 1% 2% 0 2%;
  }

  footer a {
    font-size: 12px;
    color: var(--gray);
    margin-bottom: 0.5%;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2 {
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

  .header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 3%;
  }

  .intro {
    box-sizing: border-box;
    padding: 2%;
    width: 27%;
    margin-right: 5%;
    border: 3px solid black;
    box-shadow: 10px 10px 0 var(--pink);
  }

  .intro a:hover {
    color: var(--blue);
    transition: color 0.25s;
  }

  .intro p {
    line-height: 1.5;
  }

  .intro p:first-of-type {
    margin-bottom: 4%;
  }

  .contributors {
    width: 30%;
    margin-right: 0;
  }

  .contributors h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--pink);
    text-align: center;
  }

  .names {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
  }

  .names a {
    padding: 2% 0;
    text-align: center;
    width: 20%;
    background: var(--light-gray);
    border-radius: 3px;
    font-weight: 500;
    color: var(--mid-gray);
    margin: 0 3% 2% 0;
  }

  .names a:hover {
    background: var(--blue);
    border-radius: 3px;
    transition: background 0.5s;
    color: white;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 65%;
    margin-top: 5%;
  }

  .card {
    box-sizing: border-box;
    padding: 3%;
    width: 47%;
    margin: 2% 3% 2% 0;
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
`