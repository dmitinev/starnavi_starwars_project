import '@testing-library/jest-dom';
import 'whatwg-fetch';

global.IntersectionObserver = class {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

