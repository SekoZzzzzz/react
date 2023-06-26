import React from 'react';
import { Select, Space } from 'antd';

export const StageContext = React.createContext();

const Stage = ({ setSelectedStage, options }) => {
  const handleChange = (value) => {
    console.log(`selected stage: ${value}`);
    setSelectedStage(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Этап работы"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Stage;