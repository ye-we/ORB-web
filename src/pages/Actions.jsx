import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState } from "react";
import SlideShower from "../components/SlideShower";
import "react-tabs/style/react-tabs.css";

const Actions = () => {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const approve = (newStudent) => {
    setApprovedStudents((cur) => [...cur, newStudent]);
  };
  return (
    <div className="p-5">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Registered Students</Tab>
          <Tab>Approved Students</Tab>
        </TabList>

        <TabPanel>
          <div className="bg-[#fbfbfb] h-[85vh]">
            <SlideShower onApprove={approve} />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {approvedStudents?.map((student) => (
              <div className="flex justify-around w-[500px] p-3 shadow-lg m-auto mb-4">
                <img
                  src={`${student.img}`}
                  className="w-[250px] h-[400px] object-cover  mr-3"
                />
                <div>
                  <h1 className="text-xl">{student.name}</h1>
                  <h1 className="text-xl">{student.grade}</h1>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Actions;
