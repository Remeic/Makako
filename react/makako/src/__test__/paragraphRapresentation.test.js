
import ReactDOM from "react-dom";
import { createReactElement } from "../componentGenerator/reactFactory";

it("Rapresentation of Paragraph - no Content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
  };

  let element = createReactElement(json);
  const container = document.createElement('div');
  ReactDOM.render(element,container);
  expect(container.innerHTML).toBe(
    "<p></p>"
  )
})

it("Rapresentation of Paragraph - with Content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
    content: "Hello World!"
  };

  let element = createReactElement(json);
  const container = document.createElement('div');
  ReactDOM.render(element,container);
  expect(container.innerHTML).toBe(
    "<p>Hello World!</p>"
  )
})


it("Rapresentation of Paragraph - with Content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
    content: "Hello World!"
  };

  let element = createReactElement(json);
  const container = document.createElement('div');
  ReactDOM.render(element,container);
  expect(container.innerHTML).toBe(
    "<p>Hello World!</p>"
  )
})

it("Rapresentation of Paragraph - with Content and Class", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Paragraph",
    content: "Hello World!",
    class: "red-text"
  };

  let element = createReactElement(json);
  const container = document.createElement('div');
  ReactDOM.render(element,container);
  expect(container.innerHTML).toBe(
    '<p class="red-text">Hello World!</p>'
  )
})

