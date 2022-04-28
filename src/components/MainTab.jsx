import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../admin/Details'
import Details from "../admin/Details";
export const MainTab = () => {
  return (
    <Tabs defaultActiveKey="Details" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Details" title="Details">
          <Details />
        </Tab>
        <Tab eventKey="Preferences" title="Preferences">
        </Tab>
    </Tabs>
  )
}