import { Fragment, jsx as jsx_, jsxs as jsxs_ } from 'react/jsx-runtime';
import { transformProps } from '../utils';

function jsx(type, props, key) {
  return jsx_(type, transformProps(props), key);
}

function jsxs(type, props, key) {
  return jsxs_(type, transformProps(props), key);
}

export { Fragment, jsx, jsxs };
