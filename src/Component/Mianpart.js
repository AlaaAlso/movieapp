import React from "react";

function Mianpart() {
  return (
    <div className="moviestyle">
      <div>
        <h1 style={{ margin: "150px 100px 0 100px" ,  color: "#351c32" }} >Online Movie Time</h1>
        <p style={{ fontSize: "12px", margin: "10px 150px 0 100px", color: "#351c32" }} >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <img src="./img/cover4.jpg" alt="cover" style={{ width: "600px" }} />
      </div>
    </div>
  );
}

export default Mianpart;
