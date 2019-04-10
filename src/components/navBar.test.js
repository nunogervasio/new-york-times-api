import React from "react";
import { shallow } from "enzyme";
import navBar from "./navBar";

describe("navBar", () => {
  const nav_bar = shallow(<navBar />);

  it("renders properly", () => {
    expect(nav_bar).toMatchSnapshot();
  });
});
