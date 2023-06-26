import React from 'react';
import { Select, Space } from 'antd';

export const BlockContext = React.createContext();

const Block = ({ setSelectedBlock, options }) => {
  const handleChange = (value) => {
    console.log(`selected block: ${value}`);
    setSelectedBlock(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Вид работ"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Block;