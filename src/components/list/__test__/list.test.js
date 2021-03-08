import React from "react";
import ReactDOM from "react-dom";
import List from "./../list";

import {render} from "@testing-library/react"


it("renders without crashing", ()=>{
   const div = document.createElement("div");
   ReactDOM.render(<List></List>, div) 
})


