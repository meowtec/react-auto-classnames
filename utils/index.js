import clsx from 'clsx';

export var hasOwnProperty = Object.prototype.hasOwnProperty;

export var slice = Array.prototype.slice;

export function assign(target, source) {
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

export function transformProps(props) {
  if (props && hasOwnProperty.call(props, 'className')) {
    var newProps = assign({}, props);
    newProps.className = clsx(props.className);
    return newProps;
  }
  return props || {};
}
import clsx from 'clsx';

export var hasOwnProperty = Object.prototype.hasOwnProperty;

export var slice = Array.prototype.slice;

export function assign(target, source) {
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

export function transformProps(props) {
  if (props && hasOwnProperty.call(props, 'className')) {
    var newProps = assign({}, props);
    newProps.className = clsx(props.className);
    return newProps;
  }
  return props || {};
}
