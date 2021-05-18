import React from 'react';
import styled, { css } from 'styled-components';
import { Grid as StyledCssGrid, Cell as StyledCssCell } from 'styled-css-grid';
import { map } from 'styled-components-breakpoint';

const isNumber = (val) => typeof val === 'number';

export const frGetter = (value) =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

export const Grid = styled(({ columns, margin, gap, columnGap, ...rest }) => (
  <StyledCssGrid {...rest} />
))`
  ${({ columnGap = false }) =>
    columnGap &&
    css`
      grid-column-gap: ${columnGap};
    `}
  ${({ gap = false }) =>
    gap &&
    css`
      grid-gap: ${gap};
    `}
  ${({ margin = false }) =>
    map(margin, (value) => {
      if (value === false) {
        return '';
      }

      return css`
        margin-left: ${value};
        margin-right: ${value};
      `;
    })}
  ${({ columns = 12 }) =>
    map(
      columns,
      (value) =>
        css`
          grid-template-columns: ${frGetter(value)};
        `,
    )}
  ${({ reverseDirection = false }) =>
    map(reverseDirection, (value) => {
      if (!value) {
        return '';
      }

      return css`
        direction: rtl;
      `;
    })}
`;

export const Cell = styled(({ width, push, padding, ...rest }) => (
  <StyledCssCell {...rest} />
))`
  direction: ltr;
  ${({ padding = false }) =>
    padding &&
    css`
      padding-left: ${padding}px;
      padding-right: ${padding}px;
    `}
  ${({ margin = false }) =>
    map(margin, (value) => {
      if (value === false) {
        return '';
      }

      return css`
        margin-left: ${value};
        margin-right: ${value};
      `;
    })}
  ${({ width = 1 }) =>
    map(
      width,
      (value) =>
        css`
          grid-column-end: span ${value};
        `,
    )}
  ${({ push = false }) =>
    map(push, (value) => {
      if (!push) {
        return '';
      }
      return css`
        grid-column-start: ${isNumber(value) ? value + 1 : value};
      `;
    })}
`;
