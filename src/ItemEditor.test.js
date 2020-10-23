import React from 'react';
import { render } from '@testing-library/react';
import ItemEditor from './ItemEditor';

test('renders learn react link', () => {
  const { getByText } = render(<ItemEditor />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
