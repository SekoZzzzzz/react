import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';

export const EndContext = React.createContext();

const End = ({ setSelectedEnd }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    setSelectedEnd(date); // Добавлено сохранение выбранной даты в родительском компоненте
    console.log(date);
  };

  useEffect(() => {
    const storedSelectedEnd = localStorage.getItem('selectedEnd');
    if (storedSelectedEnd) {
      try {
        const parsedSelectedEnd = JSON.parse(storedSelectedEnd);
        setSelectedDate(parsedSelectedEnd);
      } catch (error) {
        console.error('Error parsing selectedEnd from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const serializedSelectedEnd = JSON.stringify(selectedDate);
      localStorage.setItem('selectedEnd', serializedSelectedEnd);
    } catch (error) {
      console.error('Error serializing selectedEnd to localStorage:', error);
    }
  }, [selectedDate]);

  return (
    <DatePicker onChange={handleChange} value={selectedDate} placeholder="Дата снятия" />
  );
};

export default End;

