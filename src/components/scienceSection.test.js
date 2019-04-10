import React from "react";
import { shallow } from "enzyme";
import ScienceSection from "./ScienceSection";

describe("ScienceSection", () => {
  const scienceSection = shallow(<ScienceSection />);

  it("renders properly", () => {
    expect(scienceSection).toMatchSnapshot();
  });
  it("renders SectionCard", () => {});
  it("renders PaginationComponent", () => {});
  it("handlePageChange", () => {});
});
