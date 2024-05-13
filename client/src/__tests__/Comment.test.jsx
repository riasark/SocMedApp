import React from 'react';
import { render } from '@testing-library/react';
import Comment from '../components/Comment';

describe('Comment Component', () => {
  it('renders the comment text correctly', () => {
    const commentText = 'This is a test comment.';
    const { getByText } = render(<Comment comment={commentText} />);
    expect(getByText(commentText)).toBeInTheDocument();
  });

  it('renders the comment with correct CSS classes', () => {
    const commentText = 'This is another test comment.';
    const { container } = render(<Comment comment={commentText} />);
    const commentDiv = container.firstChild;

    expect(commentDiv).toHaveClass('rounded-bl-lg');
    expect(commentDiv).toHaveClass('border-b');
    expect(commentDiv).toHaveClass('border-l');
    expect(commentDiv).toHaveClass('p-2');
    expect(commentDiv).toHaveClass('mx-2');
    expect(commentDiv).toHaveClass('inline-block');
  });

  it('renders the comment text with correct CSS class', () => {
    const commentText = 'This is yet another test comment.';
    const { getByText } = render(<Comment comment={commentText} />);
    const commentTextElement = getByText(commentText);
    expect(commentTextElement).toHaveClass('text-sm');
    expect(commentTextElement).toHaveClass('leading-5');
    expect(commentTextElement).toHaveClass('text-[#6b7280]');
  });
});
