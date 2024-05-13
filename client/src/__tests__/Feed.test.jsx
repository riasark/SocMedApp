import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios'; // Mock axios
import Feed from '../components/Feed';

// Mock axios get method
jest.mock('axios');

describe('Feed Component', () => {
  // Mock data for testing
  const mockPosts = [
    {
      _id: '1',
      author: 'user1',
      hobby: 'Art',
      content: 'This is a test post.',
      timestamp: new Date().toISOString(),
      comments: [],
      likes: 0,
    },
    // Add more mock posts if needed
  ];

  const mockUsers = [
    {
      _id: 'user1',
      username: 'user1',
      pfp: 'troy',
    },
    // Add more mock users if needed
  ];

  const mockHobbies = [
    {
      _id: 'Art',
      name: 'Art',
    },
    // Add more mock hobbies if needed
  ];

  beforeEach(() => {
    // Mock axios.get implementation for different URLs
    axios.get.mockImplementation((url) => {
      if (url === 'http://localhost:3030/users/123/hobbyfeed') {
        return Promise.resolve({ data: mockPosts });
      } else if (url === 'http://localhost:3030/users') {
        return Promise.resolve({ data: mockUsers });
      } else if (url === 'http://localhost:3030/hobbies') {
        return Promise.resolve({ data: mockHobbies });
      }
    });
  });

  test('renders posts correctly', async () => {
    const { getByText } = render(<Feed />);
    
    // Wait for data fetching
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Assert that the posts are rendered
    expect(getByText('@user1')).toBeInTheDocument();
    expect(getByText('Art')).toBeInTheDocument();
    expect(getByText('This is a test post.')).toBeInTheDocument();
  });

});
