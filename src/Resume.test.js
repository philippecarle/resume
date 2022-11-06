import { render, screen } from '@testing-library/react';
import Resume from './Resume';

test('renders Full Resume', () => {
  render(<Resume />);
  const linkElement = screen.getByText(/Philippe Carle/i);
  expect(linkElement).toBeInTheDocument();
});
