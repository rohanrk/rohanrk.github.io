import * as React from "react";
import { NavLink } from "react-router-dom";
import { PageType } from "../util/types";

import "../style/sidebar.css";

const Sidebar: React.FC<{}> = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar_list">
        {Object.keys(PageType).map((section) => (
          <li>
            <NavLink
              to={`/${section.toLowerCase()}`}
              className={({ isActive, isPending }) =>
                [isPending ? "pending" : "", isActive ? "active" : ""].join(" ")
              }
            >
              {section}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
