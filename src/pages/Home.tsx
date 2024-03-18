import * as React from "react";

import "../style/home.css";

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Welcome!</h1>
        <p>
          Hello friend! I'm Rohan, one of the many tech people out in the world!
          Right now, I'm a Site Reliability Engineer at Google. Working on
          polishing up this site but thanks for stopping by!
        </p>
        <p>"The best part of being a computer scientist is literally committing to the bit"</p>
      </div>
      <div className="contact">
        <h1>Contact me!</h1>
        <ul>
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
        <h1>Prior Work</h1>
        <p>Miscellaneous things I've written or worked on</p>
        <ul>
          <li>
            <a href="http://hdl.handle.net/1853/63853">
              Evaluating Off Center Head Worn Displays
            </a>
          </li>
          <li>
            <a href="https://apps.apple.com/us/app/brainy-sight-words/id1459542744">
              Brainy Phonics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
