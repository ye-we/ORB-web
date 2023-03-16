import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React from "react";
import SlideShower from "../components/SlideShower";
import "react-tabs/style/react-tabs.css";

const Actions = () => {
  return (
    <div className="p-5">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Registered Students</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className="bg-[#fbfbfb] h-[85vh]">
            <SlideShower />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Actions;
