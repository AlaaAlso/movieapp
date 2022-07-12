import { Rate } from "antd";
import React from "react";

function Ratee(props) {
  return (
    <div>
      <span>
        <Rate
          onChange={props.setValue}
          value={props.value}
          style={{ fontSize: "12px" }}
        />
      </span>
    </div>
  );
}

export default Ratee;
