import React from "react";
// import Header from "../Header";
import data from "./data";
import Card from "./Card";
const index = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="mainbody">
      {/* <Header /> */}

      <section className="cards-list">{cards}</section>
    </div>
  );
};

export default index;
