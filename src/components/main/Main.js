import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="form">
        <p className="select-text">Select Currency:</p>
        <form>
          <div className="form-control">
            <label htmlFor="currency">AFYA</label>
            <input
              type="number"
              name="currency"
              id="currency"
              placeholder="0.00000001"
            />
          </div>
          <div className="btn-group">
            <button className="btn ">send</button>
            <button className="btn ">receive</button>
          </div>
        </form>
      </div>
      <div className="recent">
        <p className="recent-text">Recent Activity</p>
        <div className="table">
          <div className="list">
            <div className="circle">o</div>
            <p>HIV Blood Draw Test</p>
            <p>A100</p>
          </div>
          <div className="list">
            <div className="circle">o</div>
            <p>TB Radiology XRay</p>
            <p>A30</p>
          </div>
          <div className="list">
            <div className="circle">o</div>
            <p>Blood Pressure Check</p>
            <p>A10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
