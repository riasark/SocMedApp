import React from 'react';
import { render } from '@testing-library/react';
import CalendarDay from '../components/CalendarDay';

describe('CalendarDay', () => {
  it('renders day number', () => {
    const { getByText } = render(<CalendarDay d={{ day: 10 }} />);
    expect(getByText('10')).toBeInTheDocument();
  });


  it('renders inactive day when active is false', () => {
    const { container } = render(<CalendarDay d={{ day: 20, active: false }} />);
    expect(container.firstChild).toHaveClass('inactive');
  });

  it('renders today class when it is the current day', () => {
    // Mocking today as the 25th day of the month
    const originalDate = global.Date;
    global.Date = jest.fn(() => new originalDate('2024-05-25T00:00:00Z'));
    const { container } = render(<CalendarDay d={{ day: 25, active: true }} />);
    expect(container.firstChild).toHaveClass('calendar__date');
    global.Date = originalDate; // Restore original Date object
  });
});
