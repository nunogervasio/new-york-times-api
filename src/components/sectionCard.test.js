import React from "react";
import { shallow } from "enzyme";
import sectionCard from "./sectionCard";

describe("sectionCard", () => {
  const props = {
    headline: "",
    summary: "",
    pub_date: "",
    sub_section: "",
    divider_icon: "",
    byline: ""
  };
  const section_card = shallow(<sectionCard />);

  it("renders properly", () => {
    expect(section_card).toMatchSnapshot();
  });
});
