import React from "react";
import { shallow } from "enzyme";
import TopStoriesScience from "./TopStoriesScience";

describe("TopStoriesScience", () => {
  const topStoriesScience = shallow(<TopStoriesScience />);

  it("renders properly", () => {
    expect(topStoriesScience).toMatchSnapshot();
  });
  it("renders TopStoriesCard", () => {});
});
