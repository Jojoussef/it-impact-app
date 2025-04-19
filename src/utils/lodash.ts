import _cloneDeep from 'lodash/cloneDeep';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _merge from 'lodash/merge';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _set from 'lodash/set';
import _throttle from 'lodash/throttle';
import _uniqBy from 'lodash/uniqBy';

/**
 * Lodash utility functions
 * This file provides type-safe wrappers around common lodash functions
 */

// Import only the specific lodash functions we need to keep bundle size small

// Re-export with proper TypeScript typing
export const get = _get;
export const set = _set;
export const debounce = _debounce;
export const throttle = _throttle;
export const cloneDeep = _cloneDeep;
export const isEqual = _isEqual;
export const isEmpty = _isEmpty;
export const merge = _merge;
export const omit = _omit;
export const pick = _pick;
export const uniqBy = _uniqBy;
