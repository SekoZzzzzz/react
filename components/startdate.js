import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
export const StartContext = React.createContext();
const Start = ({setSelectedStart}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    setSelectedStart(date);
    console.log(date);
  };
  useEffect(() => {
    const storedSelectedStart = localStorage.getItem('selectedEnd');
    if (storedSelectedStart) {
      try {
        const parsedSelectedEnd = JSON.parse(storedSelectedStart);
        setSelectedDate(parsedSelectedEnd);
      } catch (error) {
        console.error('Error parsing selectedEnd from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const serializedSelectedStart = JSON.stringify(selectedDate);
      localStorage.setItem('selectedEnd', serializedSelectedStart);
    } catch (error) {
      console.error('Error serializing selectedEnd to localStorage:', error);
    }
  }, [selectedDate]);

  return (
    <DatePicker onChange={handleChange} value={selectedDate} placeholder="Дата назначения" />
  );
};

export default Start;
