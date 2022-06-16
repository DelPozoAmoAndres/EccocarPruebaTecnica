import 'react-native';
import React from 'react';

import { fireEvent, render } from "@testing-library/react-native";

import { Section } from "../components/Section";

let component;
const navigate = jest.fn();
const dataExample = require("./movieDataExameple.json")

describe("<Section />", () => {
    beforeEach(() => {
        component = render(<Section title={"Popular - Movies"} data={dataExample.results.slice(0,10)} key="section1" testID={"section1"} navigation={{navigate}}/>)
    });

    it("Renderiza correctamente", () => {
        expect(component).toBeDefined();
        for(var i;i<10;i++){
            expect(component.getByTestId("element"+i)).toBeDefined()
        }
    })

    it("Redirección a los detalles de un contenido multimedia",() => {
        fireEvent.press(component.getByTestId("element0"))
        expect(navigate).toBeCalled()
    })

})