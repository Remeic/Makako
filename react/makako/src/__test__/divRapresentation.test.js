import ReactDOM from "react-dom";
import { createReactElement } from "../componentGenerator/reactFactory";

it("Rapresentation of Div", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Div"
  };

  let element = createReactElement(json);
  const container = document.createElement("div");
  ReactDOM.render(element, container);
  expect(container.innerHTML).toBe("<div></div>");
});

it("Rapresentation of Div with one Children - with Content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Div",
    children: [
      {
        acf_fc_layout: "Paragraph",
        content: "Hello World!",
        id: 2
      }
    ]
  };

  let element = createReactElement(json);
  const container = document.createElement("div");
  ReactDOM.render(element, container);
  expect(container.innerHTML).toBe("<div><p>Hello World!</p></div>");
});

it("Rapresentation of Div with multiple Children - with Content", () => {
  let json = {
    id: 1,
    acf_fc_layout: "Div",
    children: [
      {
        acf_fc_layout: "Paragraph",
        content: "Hello World!",
        id: 2
      },
      {
        acf_fc_layout: "Paragraph",
        content: "Gas!",
        id: 2
      }
    ]
  };

  let element = createReactElement(json);
  const container = document.createElement("div");
  ReactDOM.render(element, container);
  expect(container.innerHTML).toBe("<div><p>Hello World!</p><p>Gas!</p></div>");
});
