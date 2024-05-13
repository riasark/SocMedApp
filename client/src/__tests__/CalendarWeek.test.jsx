import React from 'react';
import { render } from '@testing-library/react';
import CalendarWeek from './CalendarWeek';

describe('CalendarWeek', () => {
  const week = {
    day1: 1,
    day2: 2,
    day3: 3,
    day4: 4,
    day5: 5,
    day6: 6,
    day7: 7
  };

  const p_days = [/* array of previous days */];

  it('renders without crashing', () => {
    render(<CalendarWeek week={week} p_days={p_days} />);
  });

  it('renders 7 CalendarDay components', () => {
    const { getAllByTestId } = render(<CalendarWeek week={week} p_days={p_days} />);
    const calendarDays = getAllByTestId('calendar-day');
    expect(calendarDays.length).toBe(7);
  });

  it('passes correct props to CalendarDay components', () => {
    const { getByTestId } = render(<CalendarWeek week={week} p_days={p_days} />);
    const calendarDays = getByTestId('calendar-week').childNodes;

    for (let i = 0; i < calendarDays.length; i++) {
      const calendarDay = calendarDays[i];
      expect(calendarDay).toHaveAttribute('d', week[`day${i + 1}`].toString());
      expect(calendarDay).toHaveAttribute('pd', JSON.stringify(p_days));
    }
  });
});
