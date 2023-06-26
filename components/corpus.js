import React from 'react';
import { Select, Space } from 'antd';

export const CorpusContext = React.createContext();

const Corpus = ({ setSelectedCorpus, options }) => {
  const handleChange = (value) => {
    console.log(`selected corpus: ${value}`);
    setSelectedCorpus(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Корпус"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Corpus;