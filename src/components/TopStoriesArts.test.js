import React from "react";
import { shallow } from "enzyme";
import TopStoriesArts from "./TopStoriesArts";

describe("TopStoriesArts", () => {
  const topStoriesArts = shallow(<TopStoriesArts />);

  it("renders properly", () => {
    expect(topStoriesArts).toMatchSnapshot();
  });
  it("renders ArtsCard", () => {});
});
