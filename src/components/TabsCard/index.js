import React, { useState } from 'react';
import { Card } from 'antd';
import LoginForm from '../LoginForm/index.js';

function TabsCard() {
  const tabList = [
    {
      key: 'signIn',
      tab: 'Sign in'
    },
    {
      key: 'signUp',
      tab: 'Sign up'
    }
  ];

  const contentList = {
    signIn: <p>signin</p>,
    signUp: <p>signup</p>,
  };

  const [activeTab, setActiveTab] = useState('signIn');
  const handleTabChange = key => {
    setActiveTab(key);
  };

  return (
    <Card
      style={{ width: 'auto' }}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={key => {
        handleTabChange(key);
      }}
    >
      {contentList[setActiveTab]}
    </Card>
  );
}
export default TabsCard;