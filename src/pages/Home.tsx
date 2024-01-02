import * as React from "react";

import Banner from "../component/Banner";

import "../style/home.css";

interface HomeProps {
  sections: string[];
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="contact">
        <h2>Contact me!</h2>
        <ul className="contact-list">
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

      <div className="projects">
        <h2>Prior Work</h2>
        <p>Miscellaneous things I've written or worked on</p>
        <ul className="projects-list">
          <li>
            <a href="http://hdl.handle.net/1853/63853">Evaluating Off Center Head Worn Displays</a>
          </li>
          <li>
            <a href="https://apps.apple.com/us/app/brainy-sight-words/id1459542744">Brainy Phonics</a>
          </li>
        </ul>
      </div>

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
