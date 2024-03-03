import * as React from "react";

import "../style/todo.css"

const Todo: React.FC<{}> = () => {
  return (
    <div className="wip">
      <h2 className="todo">Working on it! Please come back soon...</h2>
      <img
        className="pfp"
        src="pfp.png"
        alt="An image of me working that's not loading"
      ></img>
    </div>
  );
};

export default Todo;
