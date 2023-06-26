import React from 'react';
import { Select, Space } from 'antd';

export const SectionContext = React.createContext();

const Section = ({ setSelectedSection, options }) => {
  const handleChange = (value) => {
    console.log(`selected section: ${value}`);
    setSelectedSection(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Секция"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Section;