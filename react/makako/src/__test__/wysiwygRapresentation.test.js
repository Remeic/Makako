import ReactDOM from "react-dom";
import { createReactElement } from "../componentGenerator/reactFactory";

it("Rapresentation of Paragraph - no Content", () => {
  let json = {
    "acf_fc_layout": "Wysiwyg",
    "id": 1,
    "content": "<p><a href=\"http://google.com\">Google</a></p>\n",
  };

  let element = createReactElement(json);
  const container = document.createElement('div');
  ReactDOM.render(element,container);
  expect(container.innerHTML).toBe(
    "<div><p><a href=\"http://google.com\">Google</a></p><br></div>"
  )
})
