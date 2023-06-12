import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

const shah = (val) => {
  console.log(val);
  return (<Card
  key ={val.id}
    imgsrc={val.imgsrc}
    title ={val.title}
    name = {val.name}
    link = {val.link}
   />);
};
ReactDom.render(
  <>
  <h1 className="heading_style">Top 5 Series. Mah Fav</h1>

{Sdata.map(shah)}
   
  </>,
  document.getElementById("root")
);
