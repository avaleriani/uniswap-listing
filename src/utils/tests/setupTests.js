const constants = require("./../../utils/constants");
import "@testing-library/jest-dom/extend-expect";
import * as NextImage from "next/image";

beforeAll(() => {
  jest.mock("next/image", () => {
    return () => <></>;
  });

  // Test have a fixed date in order to not have to update the snapshot as time passes on time sensitive tests.
  const now = new Date(constants.TEST_DATE);
  jest.spyOn(Date, "now").mockImplementation(() => now.getTime());

  jest.mock("next/image", () => {
    return () => <></>;
  });

  jest.mock("next/image", () => {
    return () => <></>;
  });
});

// Test if Date is set correctly

describe("Date set for testing", () => {
  it("Date.now() should match date constant", () => {
    expect(Date.now()).toBe(new Date(constants.TEST_DATE).getTime());
  });
});
