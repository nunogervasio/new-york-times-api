import React from "react";
import { shallow } from "enzyme";
import MostViewed from "./MostViewed";

describe("MostViewed", () => {
  const mostViewed = shallow(<MostViewed />);

  it("renders properly", () => {
    expect(mostViewed).toMatchSnapshot();
  });
  it("renders MostViewedCard", () => {});
});
