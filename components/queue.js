import React from 'react';
import { Select, Space } from 'antd';

export const QueueContext = React.createContext();

const Queue = ({ setSelectedQueue, options }) => {
  const handleChange = (value) => {
    console.log(`selected queue: ${value}`);
    setSelectedQueue(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Очередь"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Queue;

