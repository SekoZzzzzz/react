import React from 'react';
import { Button, Space } from 'antd';

const Filter = ({ onClick }) => {
  return (
    <Space wrap>
      <Button  onClick={onClick} style={{width: 150}}>
        Применить
      </Button>
    </Space>
  );
};

export default Filter;