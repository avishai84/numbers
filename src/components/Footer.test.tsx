import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer components', () => {
  const { getByText } = render(<Footer />);
  const footerClass = getByText(/Created By Avishai, Isabel & Sienna/i);
  expect(footerClass).toBeInTheDocument();
});