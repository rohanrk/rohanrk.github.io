import * as React from "react";

import "../style/header.css";

interface HeaderProps {
  title: string;
  image?: File;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
