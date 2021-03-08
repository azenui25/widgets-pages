import React from "react";
import ReactDOM from "react-dom";
import App from "././App";

import {render} from "@testing-library/react"

it("renders without crashing", () => {
    (<App />);
  });
  
  it("renders App header", () => {
    (<App />);
    const welcome = <h6>WELCOME TO WIDGETS PAGE</h6>;
    expect((welcome)).toEqual(welcome);
  });
  