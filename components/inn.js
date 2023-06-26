import React, { useContext, useState } from 'react';
import { Select, Space } from 'antd';
import JSONDATA from '../data/people.json';
import { PeopleContext } from './people';
export const INNContext = React.createContext();

const INN = ({ selectedPeople, selectedINN, setSelectedINN }) => {


  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedINN(value);
  };

  const options = JSONDATA[0]
    .filter((item) => item.PartnerName === selectedPeople)
    .map((item) => ({
      value: item.INN,
      label: item.INN,
    }));

  const defaultValue = options.length > 0 ? options[0].value : '';

  return (
    <INNContext.Provider value={selectedINN}>
      <Space wrap>
        <Select
          defaultValue={defaultValue}
          style={{ width: 120 }}
          options={options}
          onChange={handleChange}
        />
      </Space>
    </INNContext.Provider>
  );
};

export default INN;














