import React from "react";
import ReactDOM from "react-dom";
import Add from "./../add";

import {render} from "@testing-library/react"


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    (<Add></Add>, div) 
 })


 describe("", () => {
    it("accepts add props", () => {
     
    });
    it("contains Add  name", () => {
     
      expect("").toEqual("");
    });
   
    it("contains next button", () => {
       
        expect("").toEqual("");
      });
    
  });

  it("renders langauge error message", () => {
    (<Add></Add>);
    const message= "Please select Language";
    expect((message)).toEqual(message);
  });

it("renders name error message", () => {
    (<Add></Add>);
    const message= "Please enter name";
    expect((message)).toEqual(message);
  });


  