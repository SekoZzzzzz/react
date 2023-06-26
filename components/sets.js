import React from 'react';
import { Select, Space } from 'antd';

export const SetsContext = React.createContext();

const Sets = ({ setSelectedSets, options }) => {
  const handleChange = (value) => {
    console.log(`selected sets: ${value}`);
    setSelectedSets(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Комплекс работ"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Sets;