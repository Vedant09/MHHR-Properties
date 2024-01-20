import React from "react"
import { NavlinkList } from "../../utils/navlinks"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="https://img1.wsimg.com/isteam/ip/67d030cf-8d33-4ff0-ba1a-c4634ba6d410/blob-93e2f18.png/:/rs=w:180,h:180,cg:true,m/cr=w:180,h:180/qt=q:95" className="card--image" alt="MHHR logo" />
            <div className="nav-links">
            {
                NavlinkList.map((ele, index) => {
                    return (
                        <div>{ele.title}</div>
                        
                    )
                    })
            }

            </div>
           
        </div>
    )
}