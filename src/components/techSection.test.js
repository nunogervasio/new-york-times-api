import React from "react";
import { shallow } from "enzyme";
import techSection from "./techSection";

describe("techSection", () => {
  const tech_section = shallow(<techSection />);

  it("renders properly", () => {
    expect(tech_section).toMatchSnapshot();
  });
  it("renders SectionCard", () => {});
  it("renders PaginationComponent", () => {});
  it("handlePageChange", () => {});
});
