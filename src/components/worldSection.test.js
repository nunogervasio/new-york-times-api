import React from "react";
import { shallow } from "enzyme";
import WorldSection from "./WorldSection";

describe("WorldSection", () => {
  const worldSection = shallow(<WorldSection />);

  it("renders properly", () => {
    expect(worldSection).toMatchSnapshot();
  });
  it("renders SectionCard", () => {});
  it("renders PaginationComponent", () => {});
  it("handlePageChange", () => {});
});
