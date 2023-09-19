import * as React from "react";

import "./Footer.css";

const Footer: React.FC<{}> = () => {
  return (
    <ul className="widgets">
      <li>Github</li>
      <li>Email</li>
      <li>Twitter</li>
    </ul>
  );
};

export default Footer;
