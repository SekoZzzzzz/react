import React from 'react';
import { Select, Space } from 'antd';

export const FloorContext = React.createContext();

const Floor = ({ setSelectedFloor, options }) => {
  const handleChange = (value) => {
    console.log(`selected floor: ${value}`);
    setSelectedFloor(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Этаж"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Floor;
