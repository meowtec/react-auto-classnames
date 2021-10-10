/**
 * the old `createElement` for build tool or React 16 which does not support automatic jsx-runtime.
 */

import React from 'react';
import { hasOwnProperty, slice, transformProps } from './utils';

export function createElement(type, props) {
    if (props == null || !hasOwnProperty.call(props, 'className')) {
        return React.createElement.apply(undefined, arguments);
    }
    var args = slice.call(arguments);
    args[1] = transformProps(props);
    return React.createElement.apply(undefined, args);
}

export var Fragment = React.Fragment;
