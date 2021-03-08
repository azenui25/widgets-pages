import React from "react";
import ReactDOM from "react-dom";
import Modal from "./../modal";

import {render} from "@testing-library/react"


it("renders without crashing", ()=>{
   const div = document.createElement("div");
   ReactDOM.render(<Modal></Modal>, div) 
}) 

describe("", () => {
    it("accepts add props", () => {
     
    });
    it("contains cancel button", () => {
     
      expect("").toEqual("");
    });
    it("contains delete button", () => {
       
        expect("").toEqual("");
      });
    
  }); 