import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";

describe("Content", () => {
  const content = shallow(<Content />);

  it("renders properly", () => {
    expect(content).toMatchSnapshot();
  });
  it("renders MostViewed", () => {});
  it("renders TopStoriesArts", () => {});
  it("renders TopStories", () => {});
  it("renders TopStoriesScience", () => {});
  it("renders TopStoriesTech", () => {});
});
