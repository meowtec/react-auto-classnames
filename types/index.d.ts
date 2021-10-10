import { createElement } from 'react';
import { CJSX } from './jsx-namespace';

export const jsx: typeof createElement;
export namespace jsx {
  namespace JSX {
    interface Element extends CJSX.Element {}
    interface ElementClass extends CJSX.ElementClass {}
    interface ElementAttributesProperty
      extends CJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends CJSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends CJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T>
      extends CJSX.IntrinsicClassAttributes<T> {}
    type IntrinsicElements = CJSX.IntrinsicElements;
  }
}
