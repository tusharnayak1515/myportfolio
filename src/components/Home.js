import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <div id={styles.home}>
      <h1>Hello, I'm <span>Tushar Ranjan Nayak</span>.</h1>
      <h2>I'm a Full-Stack Web Developer.</h2>
      <Link to={process.env.PUBLIC_URL + '/projects'}><button>View My Work</button></Link>
    </div>
  );
};

export default Home;
