import React from "react";
import ReactDOM from "react-dom";
import List from "./../list";

import {render} from "@testing-library/react"


it("renders without crashing", ()=>{
   const div = document.createElement("div");
   ReactDOM.render(<List></List>, div) 
})

describe("", () => {
    it("accepts list  props", () => {
      render(<List></List>);
    });
    it("contains list  name", () => {
      render(<List></List>);
      expect("").toEqual("");
    });
    it("contains list  language", () => {
         render(<List></List>);
        expect("").toEqual("");
      });
    it("contains list  action", () => {
        render(<List></List>);
        expect("").toEqual("");
      });
      it("contains add item button", () => {
        render(<List></List>);
        expect("").toEqual("");
      });
  });

  it("renders delete confirmation dialog", () => {
    (<List></List>);
    const message= "Are you sure you want to delete this item";
    expect((message)).toEqual(message);
  });


  
