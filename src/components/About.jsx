import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div>
      <div className="about">
        <div id="about">
          <h1>About Us</h1>
          <p>Normil Media is a media company dedicated to helping clients achieve and manage their media goals by providing best-in-class media, marketing and communications services.</p>
        </div>
        <div id="clients">
          <h2>Clients</h2>
          <div><img src="https://pbs.twimg.com/profile_images/2748628262/834747bb77e3b3cb701265fe90b39d4e_400x400.jpeg" alt="aadch"/></div>
          <div><img src="https://mediaconsultantshawaii.com/wp-content/uploads/2011/07/mediaconsultantshi-logoclever-e1340737791293.png" alt="media consultants" /></div>
          <div><img src="http://www.hawaiinurses.org/Portals/local50/HNALOGOsm.png?ver=2017-03-23-222309-440" alt="hawaii nurses"/></div>
          <div><img src="https://static1.squarespace.com/static/532cccc5e4b0e21c66540888/t/56a66ba4a976af914ffb38d9/1576716250191/?format=1500w" alt="ywca" /></div>
          <div><img src="https://github.com/PurpleTatsu/Normil-Media/blob/master/src/images/blue-export-group.jpg?raw=true" alt="blue export group"/></div>
          <div><img src="https://github.com/PurpleTatsu/Normil-Media/blob/master/src/images/first-palo-alto.png?raw=true" alt="first palo alto"/></div>
        </div>
      </div>
    </div>
  )
}



