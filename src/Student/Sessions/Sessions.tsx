import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SessionsStyle.css';
import SessionBox from '../Dashboard/components/SessionBox';

type Session = {
  id: string;
  title: string;
  date: string;
  status: "active" | "completed" | "upcoming";
};

const allSessions: Session[] = [
  { id: '1', title: 'VR Training', date: '2025-05-20', status: 'active' },
  { id: '2', title: 'Team Debrief', date: '2025-05-22', status: 'completed' },
  { id: '3', title: 'Mindfulness', date: '2025-05-25', status: 'upcoming' },
];

const Sessions: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const filteredSessions = allSessions.filter(
    (session) => session.date === formatDate(selectedDate)
  );

  const bookedDates = allSessions.map((session) => session.date);

  return (
    <div className="sessions-container">
      <h1 className="calendar-title">Sessions</h1>
      <Calendar
        onChange={(date) => setSelectedDate(date as Date)}
        value={selectedDate}
        tileClassName={({ date, view }) =>
          view === 'month' && bookedDates.includes(formatDate(date)) ? 'highlight' : undefined
        }
      />

      <h2 className="session-heading">
        Booked Sessions on {formatDate(selectedDate)}
      </h2>

      <SessionBox sessions={filteredSessions} />
    </div>
  );
};

export default Sessions;
