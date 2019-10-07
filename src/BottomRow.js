import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [qtr, setQtr] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtr}</div>
      </div>
      <button className="homeButtons__touchdown" onClick={() => {
        if(down < 4) {
          setDown(down + 1)
        } else {
          setDown(1)
        }
          }}>Advance Down</button>
      <button className="homeButtons__touchdown" onClick={() => {
        if(qtr< 4) {
          setQtr(qtr + 1)
        } else {
          setQtr(1)
        }
          }}>Advance qtr</button>
    </div>
  );
};

export default BottomRow;
