import { Div } from "../components";
import {createParagraphReactElement} from "./paragraphGenerator";
import React from "react";



it('Create Div element from empty JSON', () => {
  let element = createParagraphReactElement({});
  expect(element).toBe("")
});
it('Create Div element from undefined JSON', () => {
  let element = createParagraphReactElement(undefined);
  expect(element).toBe("")
});
it('Create Div element from empty JSON', () => {
  let element = createParagraphReactElement({});
  expect(element).toBe("")
});