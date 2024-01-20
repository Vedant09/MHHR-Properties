import React from 'react'
import Navbar from "./Navbar"
import data from "./data"
import Card from "./Card"
const index = () => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })  
  return (
    <div className="mainbody">
    <Navbar pagetitle="Properties Page"/>

    <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}

export default index