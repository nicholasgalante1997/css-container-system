import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const divs = [1,2,3,4,5,6,7,8,9,10,11,12];

const App = () => (
  <React.Fragment>
  <div className="gallery-grid">
    {divs.map(d => <div>{d}</div>)}
  </div>
  <div className="flex-grid">
    <div className="col col-9">1</div>
    <div className="col col-3">2</div>
    <div className="col col-3">3</div>
    <div className="col col-9">4</div>
  </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("app"));
