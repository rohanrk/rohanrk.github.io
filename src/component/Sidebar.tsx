import * as React from "react";
import { PageType } from "../util/types";

const Sidebar: React.FC<{}> = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list">
        {Object.keys(PageType).map((section) => (
          <li>{section}</li>
        ))}
      </ul>
    </div>
  );
}


export default Sidebar;
