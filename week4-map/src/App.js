import React,{Component} from "react";
import {Map} from "./components/Map";
import Sidebar from "./components/Sidebar";


function App() {

  const places = [
    {
      name: "뿡어당",
      address: "서울 성북구 보문로34길 94",
    },
    {
      name: "쵸이양식",
      address: "서울 성북구 동소문로20나길 24",
    },
    {
      name: "펠어커피 성신여대점",
      address: "서울 성북구 동소문로17길 17",
    }
  ];

  return (
    <div className="container">
      <Map />
      <Sidebar places={places} onSelect={() => {}} />
    </div>
    
  );
}

export default App;
