import { render } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it.skip('renders the page', () => {
    render(<Home />);
    expect(document.querySelector('h1')?.textContent).toBe('Main Page');
  });
});

