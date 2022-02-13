import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const divs = [1,2,3,4,5,6,7,8,9,10,11,12];

const App = () => (
  <React.Fragment>
  <div className="gallery-grid">
    {divs.map(d => <div>{d}</div>)}
  </div>
  <hr/>
  <div className="flex-grid">
    <div className="col col-9">1</div>
    <div className="col col-3">2</div>
    <div className="col col-3">3</div>
    <div className="col col-9">4</div>
  </div>
  <hr />
  <div className="grid-2d">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("app"));
