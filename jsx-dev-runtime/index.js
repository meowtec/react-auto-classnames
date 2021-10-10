import { Fragment, jsxDEV as jsxDEV_ } from 'react/jsx-dev-runtime';
import { transformProps } from '../utils';

function jsxDEV(type, props, key) {
  return jsxDEV_(type, transformProps(props), key);
}

export { Fragment, jsxDEV };
