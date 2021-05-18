/* eslint-env jest */
import React from 'react';
import { render } from 'test/test-utils';
import Resume from 'pages/resume';
import { resumeData } from 'store/resume';

const renderResume = () => {
  return render(<Resume />);
};

describe('Renders:', () => {
  it('Experience', () => {
    const { getByTestId } = renderResume();
    resumeData.experienceSection.positions.forEach((position) => {
      const companyLink = getByTestId(`${position.company}-link`);
      expect(companyLink).toBeInTheDocument();
      expect(companyLink).toHaveTextContent(position.company.toUpperCase());
    });
  });
});
