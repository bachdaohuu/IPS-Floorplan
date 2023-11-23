import React from "react";
import Room301 from "./Room301";
import Room302 from "./Room302";
import Room303 from "./Room303";
import Room304 from "./Room304";

function Classroom(props) {
  return (
    <div id="kitchen">
      <Room301 />
      <Room302 />
      <Room303 />
      <Room304 />
    </div>
  );
}

export default Classroom;