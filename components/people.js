import React, { useState } from 'react';
import { Select } from 'antd';
import JSONDATA from '../data/people.json';
import INN from './inn';
export const PeopleContext = React.createContext();

  const People = ({selectedPeople, setSelectedPeople, selectedINN, setSelectedINN}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedPeople(value);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const options = JSONDATA[0].map((item) => ({
    value: item.PartnerName,
    label: item.PartnerName,
  }));

  return (
    <PeopleContext.Provider value={selectedPeople}>
      <Select
        showSearch
        placeholder="Исполнитель"
        optionFilterProp="children"
        onChange={handleChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
      
    </PeopleContext.Provider>
  );
};

export default People;






