import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('renders the page', () => {
    render(<Home />);
    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
