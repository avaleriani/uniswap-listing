import Component from "./index";
import renderer from "react-test-renderer";
import { testItem } from "utils/tests/data";

describe("Token Pair", () => {
  it("renders component", () => {
    const component = renderer.create(<Component token0={testItem.token0} token1={testItem.token1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
