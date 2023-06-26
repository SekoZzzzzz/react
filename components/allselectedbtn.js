import React from 'react';
import { Button, Space } from 'antd';


const BtnAll = ({ onClick }) => {


  return (
    <Space wrap>
      <Button type="primary" onClick={onClick}>
        Заполнить всё
      </Button>
    </Space>
  );
};

export default BtnAll;
