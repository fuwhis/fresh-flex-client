import React, { useState } from 'react';
import { Card } from 'antd';
import LoginForm from '../Form/Login/index.js';
import Registration from '../Form/Registration/index.js';

import './index.less';

function TabsCard() {
  const tabList = [
    {
      key: 'tab1',
      tab: 'Sign in'
    },
    {
      key: 'tab2',
      tab: 'Sign up'
    }
  ];

  const contentList = {
    tab1: <LoginForm />,
    tab2: <Registration />,
  };

  const [activeTab, setActiveTab] = useState('tab1');
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
      className="tabs"
    >
      {contentList[activeTab]}
    </Card>
  );
}
export default TabsCard;