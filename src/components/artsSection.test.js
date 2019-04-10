import React from "react";
import { shallow } from "enzyme";
import ArtsSection from "./ArtsSection";

describe("ArtsSection", () => {
  const artsSection = shallow(<ArtsSection />);

  it("renders properly", () => {
    expect(artsSection).toMatchSnapshot();
  });

  it("renders SectionCard", () => {});
  it("renders PaginationComponent", () => {});
  it("handlePageChange", () => {});
});
