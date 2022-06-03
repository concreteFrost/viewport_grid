import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import Navbar from './../components/Navbar/Navbar';

describe("App components",()=>{
  test("Renders React App", () => {
    render(<App />);
    const element = screen.getByText("Rows")
    expect(element).toBeInTheDocument();
  });
})

