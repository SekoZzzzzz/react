import React from 'react';
import { Select, Space } from 'antd';

export const ProjectContext = React.createContext();

const Project = ({ setSelectedProject, options }) => {
  const handleChange = (value) => {
    console.log(`selected corpus: ${value}`);
    setSelectedProject(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="Проект"
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Project;

