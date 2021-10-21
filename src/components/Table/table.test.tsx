import Component from "./index";
import renderer from "react-test-renderer";

describe("Table", () => {
  it("renders component", () => {
    const component = renderer.create(
      <Component
        totalItems={10}
        header={["Link to Etherscan", "Tx Type", "Token Amount", "Timestamp"]}
        offset={30}
        setOffset={() => false}>
        <div />
        <div />
        <div />
        <div />
      </Component>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
