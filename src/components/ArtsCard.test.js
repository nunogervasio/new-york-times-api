import React from "react";
import { shallow } from "enzyme";
import ArtsCard from "./ArtsCard";

describe("ArtsCard", () => {
  const props = { headline: "", summary: "", img_url: "", section: "" };
  const artsCard = shallow(<ArtsCard {...props} />);

  it("renders properly", () => {
    expect(artsCard).toMatchSnapshot();
  });
});
