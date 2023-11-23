import React from "react";
import ESP32_Station from "./ESP32_Station";
import Stair from "./Stair";
import Classroom from "./Classroom";


function FloorPlan(props) {
  return (
    <div id="floorPlan">
      <div id="row-1">
        <ESP32_Station className="ESP32_Station" ESPNum={1} />
        <Stair />
        <Classroom />
        <ESP32_Station className="ESP32_Station" ESPNum={2} />
      </div>

      <div id="row-2">

      </div>
    </div>
  );
}

export default FloorPlan;