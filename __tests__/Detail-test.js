import 'react-native';
import React from 'react';

import { fireEvent, render } from "@testing-library/react-native";

import { Detail } from "../views/Detail";

let component;
const dispatch = jest.fn();

const dataExample = require("./movieDataExameple.json")

describe("<Detail />", () => {

    beforeEach(() => {
        component = render(<Detail navigation={{dispatch}} route={{params:{data:(dataExample.results)[0]}}}/>)
    });

    it("Renderiza correctamente",() => {
        expect(component).toBeDefined()
        expect(component.getByTestId("image")).toBeDefined()
        expect(component.getByTestId("title")).toBeDefined()
        expect(component.getByTestId("arrow-back")).toBeDefined()
        expect(component.getByTestId("synopsis")).toBeDefined()
        expect(component.getByTestId("vote_average")).toBeDefined()
        expect(component.getByTestId("vote_count")).toBeDefined()
        expect(component.getByTestId("release_date")).toBeDefined()
    })

    it("Vuelta a la vista home",()=>{
        fireEvent.press(component.getByTestId("arrow-back"))
        expect(dispatch).toBeCalled()
    })
})