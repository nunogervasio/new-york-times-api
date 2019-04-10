import React from "react";
import { shallow } from "enzyme";
import TopStoriesCard from "./TopStoriesCard";

describe("TopStoriesCard", () => {
  const props = { headline: "", summary: "", pub_date: "", divider_icon: "" };
  const topStoriesCard = shallow(<TopStoriesCard {...props} />);

  it("renders properly", () => {
    expect(topStoriesCard).toMatchSnapshot();
  });
});
