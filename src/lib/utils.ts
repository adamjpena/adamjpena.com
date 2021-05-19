import { startCase, camelCase } from 'lodash';

export const titleCase = (x) => startCase(camelCase(x));
