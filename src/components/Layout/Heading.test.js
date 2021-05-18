/* eslint-env jest */
import React from 'react';
import { render } from '../../test/test-utils';
import { Heading } from './';
import { resumeData } from 'store/resume';

const renderHeading = (opts = {}) => {
  return render(
    <Heading {...opts}>
      <span data-testid='child' />
    </Heading>,
  );
};

const headingLevels = [1, 2, 4];

describe('Renders:', () => {
  headingLevels.forEach((level) => {
    it(`H${level}`, () => {
      const { getByRole, getByTestId } = renderHeading({ level });
      resumeData.experienceSection.positions.forEach((position) => {
        expect(getByRole('heading', { level }));
        const child = getByTestId('child');
        expect(child).toBeInTheDocument();
      });
    });
  });
});
