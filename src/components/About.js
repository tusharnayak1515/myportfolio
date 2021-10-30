import React from "react";

import IntroImage from "./images/about_bg.jpg";

import styles from "./about.module.css";

const About = () => {
  return (
    <div id={styles.about}>
      <div id={styles.intro_image}>
        <img src={IntroImage} alt="" />
      </div>

      <div id={styles.about_content}>
        <div id={styles.about_contact}>
          <h2>PERSONAL CONTACT:</h2>
          <p>tusharnayak115515@gmail.com</p>
          <p>+916377556699</p>
        </div>

        <div id={styles.about_text}>
          <p>
            Hello, my name is Tushar Ranjan Nayak and I’m a Full-Stack Web
            Developer. I have a passion for creating useful and creative
            websites. I also love coding.
          </p>
          <p>
            I was born in Rourkela,Odisha but now I live in Bhubaneswar,Odisha.
            So, I’m very much fond of dahi-vada, which is very famous in the
            twin city of Odisha(Cuttack and Bhubaneswar).
          </p>
          <p>
            I graduated @ Trident Academy of Technology,Bhubaneswar where I
            discovered my passion for coding and making fully fledged websites.
            I am currently working @ Bodas.net as Full-Stack Web Developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
