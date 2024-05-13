import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import WriteComment from '../components/WriteComment';

// Mock axios post request
jest.mock('axios');

describe('WriteComment component', () => {
  it('should render input field and submit button', () => {
    const { getByPlaceholderText } = render(<WriteComment />);
    expect(getByPlaceholderText('Add a comment...')).toBeInTheDocument();
  });

  it('should update comment state on input change', () => {
    const { getByPlaceholderText } = render(<WriteComment />);
    const input = getByPlaceholderText('Add a comment...');
    fireEvent.change(input, { target: { value: 'Test comment' } });
    expect(input.value).toBe('Test comment');
  });

  it('should submit comment when submit button is clicked', async () => {
    const { getByPlaceholderText, getByRole } = render(<WriteComment />);
    const input = getByPlaceholderText('Add a comment...');
    const submitButton = getByRole('button', {
        name: /submit/i
      })

    fireEvent.change(input, { target: { value: 'Test comment' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.request).toHaveBeenCalledTimes(1);
      expect(axios.request).toHaveBeenCalledWith({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3030/posts/comment',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ id: undefined, content: 'Test comment' }),
      });
    });
  });
});
