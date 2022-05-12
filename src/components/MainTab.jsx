import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Details from "../analyst/Details";
import Favorites from "../analyst/Favorites";
export const MainTab = () => {
  return (
    <div>
      <h2>Analst View</h2>
      <Tabs defaultActiveKey="Details" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Details" title="Details">
            <Details />
          </Tab>
          <Tab eventKey="Favorites" title="Favorites">
            <Favorites />
          </Tab>
      </Tabs>
    </div>
  )
}