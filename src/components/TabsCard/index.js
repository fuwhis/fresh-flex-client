import React, { useState } from 'react';
import { Card, Tabs } from 'antd';
import LoginForm from '../LoginForm/index.js';

const { TabPane } = Tabs;

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
    tab2: <p>signup</p>,
  };

  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabChange = key => {
    setActiveTab(key);
  };
  const callbackFn = (key) => {
    console.log(key);
  }
  return (
    <Card
      style={{ width: '400' }}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={key => {
        handleTabChange(key);
      }}
    >
      {contentList[activeTab]}
    </Card>

    // <Card
    //   style={{ width: 'auto', margin: '10% 10% 10% 10%' }}
    // >
    //   <Tabs defaultActiveKey="1" onChange={callbackFn}>
    //     <TabPane tab="Sign In" key="1">
    //       <LoginForm />
    //     </TabPane>
    //     <TabPane tab="Sign Up" key="2">
    //       Signup
    //     </TabPane>
    //   </Tabs>
    // </Card>


  );
}
export default TabsCard;