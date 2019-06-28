import { Div } from "../components";
import {createDivReactElement} from "../componentGenerator/divGenerator";
import React from "react";


it('Create Div element from empty JSON', () => {
  let element = createDivReactElement({});
  expect(element).toBe("")
});

it('Create Div element from undefined JSON', () => {
  let element = createDivReactElement(undefined);
  expect(element).toBe("")
});

it('Create Div element from valid JSON - only Components', () => {
  let json = {
            id:1,
            acf_fc_layout: "Div",
        };

  let element = createDivReactElement(json);
  let stub = React.createElement(Div,{})
  expect(element).toStrictEqual(stub)
});

it('Create Div element from valid JSON - with Classes', () => {
  let json = {
        id:1,
        acf_fc_layout: "Div",
        class: "body"
    };

  let element = createDivReactElement(json);
  let stub = React.createElement(Div,{className: "body"});
  expect(element).toStrictEqual(stub)
});


it('Create Div element from valid JSON - with Children', () => {
  let json = {
        id:1,
        acf_fc_layout: "Div",
        class: "body",
        children: [
          {
            id:2,
            acf_fc_layout:"Paragraph"
          }
        ]
    };

  let element = createDivReactElement(json);
  let stub = React.createElement(Div,{className: "body"});
  expect(element).toStrictEqual(stub)
});