import React from "react";
import { shallow } from "enzyme";
import TopStoriesTech from "./TopStoriesTech";

describe("TopStoriesTech", () => {
  const topStoriesTech = shallow(<TopStoriesTech />);

  it("renders properly", () => {
    expect(topStoriesTech).toMatchSnapshot();
  });
  it("renders TopStoriesCard", () => {});
});
