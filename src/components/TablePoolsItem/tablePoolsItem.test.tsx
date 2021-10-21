import Component from "./index";
import renderer from "react-test-renderer";
import { testItem } from "utils/tests/data";

describe("Table Pools item", () => {
  it("renders component", () => {
    const component = renderer.create(<Component item={testItem} onClick={() => false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
