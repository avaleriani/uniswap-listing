import Component from "./index";
import renderer from "react-test-renderer";
import { testItem } from "utils/tests/data";

describe("Watchlist Button", () => {
  it("renders component", () => {
    const component = renderer.create(<Component pair={testItem} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
