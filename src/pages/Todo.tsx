import * as React from "react";

const Todo: React.FC<{}> = () => {
  return (
    <div className="wip">
        <p>TODO: Finish this website... someday</p>
        <img className="pfp"
          src="pfp.png"
          alt="An image of me working that's not loading"
        ></img>
      </div>
  )
};

export default Todo;
