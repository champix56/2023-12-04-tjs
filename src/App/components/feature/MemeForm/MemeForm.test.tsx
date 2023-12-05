import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeForm from './MemeForm';
import { emptyMeme } from 'orsys-tjs-meme'
describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<MemeForm meme={emptyMeme} />);
    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});