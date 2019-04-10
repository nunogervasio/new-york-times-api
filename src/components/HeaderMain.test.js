import React from "react";
import { shallow } from "enzyme";
import HeaderMain from "./HeaderMain";

describe("HeaderMain", () => {
  const headerMain = shallow(<HeaderMain />);

  it("renders properly", () => {
    expect(headerMain).toMatchSnapshot();
  });
});
