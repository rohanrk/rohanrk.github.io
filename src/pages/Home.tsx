import * as React from "react";

import Banner from "../component/Banner";

import "../style/home.css";

interface HomeProps {
  sections: string[];
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2>Contact me!</h2>
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

      <div className="wip">
        <p>TODO: Finish this website... someday</p>
        <img
          className="pfp"
          src="pfp.png"
          alt="An image of me working that's not loading"
        ></img>
      </div>
    </div>
  );
};

export default Home;
