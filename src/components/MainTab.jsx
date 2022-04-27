import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
export const MainTab = () => {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Details" title="Details">
        </Tab>
        <Tab eventKey="profile" title="Profile">
        </Tab>
    </Tabs>
  )
}