import React from 'react';
import { Button, Space } from 'antd';

const Btn = ({ onClick, disabled }) => {
  return (
    <Space wrap>
      <Button type="primary" onClick={onClick} disabled={disabled}>
        Сохранить в БД
      </Button>
    </Space>
  );
};

export default Btn;

