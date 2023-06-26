import React from 'react';
import { Select, Space } from 'antd';

export const WorkContext = React.createContext();

const Work = ({ setSelectedWork, options }) => {
  const handleChange = (value) => {
    console.log(`selected work: ${value}`);
    setSelectedWork(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Работа"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Work;