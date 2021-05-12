/* eslint-env jest */
import React from "react";
import { render } from "../../test/test-utils";
import ReactDOM from "react-dom";
import Resume from "./Resume";
import { resumeData } from "../store/resume";

const renderResume = (opts = {}) => {
  return render(<Resume {...opts} />);
};

describe("Renders:", () => {
  it("Experience", () => {
    const { getByTestId } = renderResume();
    resumeData.experienceSection.positions.forEach((position) => {
      const companyLink = getByTestId(`${position.company}-link`);
      expect(companyLink).toBeInTheDocument();
      expect(companyLink).toHaveTextContent(position.company.toUpperCase());
    });
  });
});
