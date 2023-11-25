import * as React from "react";

import Banner from "../component/Banner";

import "../style/home.css";

interface HomeProps {
  sections: string[];
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner text="Rohan Ramakrishnan" />
      <h3>Contact me!</h3>
      <ul className="contact">
        <li>
          <a href="mailto:rohanrk2009@gmail.com">Gmail</a>
        </li>
        <li>
          <a href="https://github.com/rohanrk">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rohanramakrishnan/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
