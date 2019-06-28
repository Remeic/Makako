import React from "React";
import {createReactElement} from "../componentGenerator/reactFactory"
import {components} from "../components";
import {createDivReactElement} from "../componentGenerator/divGenerator";

it('Create element from empty JSON', () => {
    let element = createReactElement({});
    expect(element).toBe("")
});

it('Create element from undefined JSON', () => {
    let element = createReactElement(undefined);
    expect(element).toBe("")
});

it('Create element from JSON - Div', () => {
    let json = {
        id:1,
        acf_fc_layout: "Div",
    };
    let element = createReactElement(json);
    const stub = React.createElement(components["Div"],{});
    expect(element).toMatchObject(stub)
});
it('Create element from JSON - Paragraph', () => {
    let json = {
        id:1,
        acf_fc_layout: "Paragraph",
        content: "ciao"
    };
    let element = createReactElement(json);
    const stub = React.createElement(components["Paragraph"],{"content":"ciao"});
    expect(element).toMatchObject(stub);
});

it('Create element from JSON - Paragraph with content', () => {
    let json = {
        id:1,
        acf_fc_layout: "Paragraph",
        content: "Hello World"
    };
    let element = createReactElement(json);
    const stub = React.createElement(components["Paragraph"],{});
    expect(element).toMatchObject(stub)
});

it('Create element from JSON - Paragraph with content', () => {
    let json = {
        id:1,
        acf_fc_layout: "Div",
        children: [{
            acf_fc_layout: "Paragraph",
            content: "Ciao"
        }] 
    };

    let element = createReactElement(json);
    const stub = React.createElement(components["Paragraph"],{});
    expect(element).toMatchObject(stub)
});

