import * as React from "react";

import "../style/banner.css";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <div className="banner">
      <h1>
        <b>{props.text}</b>
      </h1>
    </div>
  );
};

export default Banner;
