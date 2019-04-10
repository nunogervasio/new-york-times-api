import React from "react";
import { shallow } from "enzyme";
import TopStories from "./TopStories";

describe("TopStories", () => {
  const topStories = shallow(<TopStories />);

  it("renders properly", () => {
    expect(topStories).toMatchSnapshot();
  });
  it("renders TopStoriesCard", () => {});
});
