import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React from "react";
import SlideShower from "../components/SlideShower";
import "react-tabs/style/react-tabs.css";

const Actions = () => {
  const approvedStudents = [
    {
      name: "Kalkidan Eshetu",
      grade: "Amharic 11",
      img: "/kal.jpg",
      id: "s-1678680690929",
      father: "Eshetu Tufa",
      phoneNumber: "0911033253",
      location: "Bishoftu",
      parentImg: "/father.jpg",
    },
    {
      name: "Fenet gossa",
      grade: "Afaan Oromo 9",
      img: "/fenet.jpg",
      id: "s-1678680690929",
      father: "Gossa Hunde",
      phoneNumber: "0978786426",
      location: "Ambo",
      parentImg: "/father.jpg",
    },
  ];
  return (
    <div className="p-5">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Registered Students</Tab>
          <Tab>Approved Students</Tab>
        </TabList>

        <TabPanel>
          <div className="bg-[#fbfbfb] h-[85vh]">
            <SlideShower />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {approvedStudents.map((student) => (
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
