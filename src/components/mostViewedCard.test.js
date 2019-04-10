import React from "react";
import { shallow } from "enzyme";
import MostViewedCard from "./MostViewedCard";

describe("MostViewedCard", () => {
  const props = {
    headline: "",
    summary: "",
    pub_date: "",
    img_url: "",
    section: ""
  };
  const mostViewedCard = shallow(<MostViewedCard {...props} />);

  it("renders properly", () => {
    expect(mostViewedCard).toMatchSnapshot();
  });
});
