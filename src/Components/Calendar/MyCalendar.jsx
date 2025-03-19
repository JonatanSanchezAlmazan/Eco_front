import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

const MyCalendar = ({ reservations }) => {
  const [value, setValue] = useState(null);

  const accommodationReservations = reservations.filter((r) => r.exitDate && r.entryDate);

  const activityReservations = reservations.filter((r) => r.entryDate && !r.exitDate);

  const dateRanges = accommodationReservations.map((reservation) => {
    const entryDate = new Date(reservation.entryDate.split('/').reverse().join('-'));
    const exitDate = new Date(reservation.exitDate.split('/').reverse().join('-'));
    return { entryDate, exitDate };
  });

  const activityDates = activityReservations.map((reservation) => {
    const entryDate = new Date(reservation.entryDate.split('/').reverse().join('-'));
    return entryDate;
  });

  useEffect(() => {
    if (dateRanges.length > 0) {
      const minDate = new Date(Math.min(...dateRanges.map((range) => range.entryDate.getTime())));
      const maxDate = new Date(Math.max(...dateRanges.map((range) => range.exitDate.getTime())));
      setValue([minDate, maxDate]);
    }
  }, [reservations]);
  return (
    <Calendar
      onChange={setValue}
      value={value}
      tileClassName={({ date }) => {
        let className = '';

        if (dateRanges.some((range) => date >= range.entryDate && date <= range.exitDate)) {
          className = 'highlight-range';
        }

        if (activityDates.some((activityDate) => date.toDateString() === activityDate.toDateString())) {
          className = 'highlight-activity';
        }
        return className;
      }}
    />
  );
};

export default MyCalendar;
