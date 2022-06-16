import 'react-native';
import React from 'react';

import { render,waitFor } from "@testing-library/react-native";

import { Home } from "../views/Home";

let component;

const dataExample = require("./movieDataExameple.json")

describe("<Home />", () => {

  it("Renderiza correctamente", async () => {

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(dataExample)
    }))
    component=render(<Home/>)
    await waitFor(() => {
      expect(component).toBeDefined()
    })    
    expect(component.getByTestId("section1")).toBeDefined()
    expect(component.getByTestId("section2")).toBeDefined()
    expect(component.getByTestId("section3")).toBeDefined()
    expect(component.getByTestId("section4")).toBeDefined()
    expect(global.fetch).toHaveBeenCalled();
  })
})