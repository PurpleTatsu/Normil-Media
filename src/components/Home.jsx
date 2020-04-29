import React from 'react';

export default function Home(props) {
  return (
    <div>
      <div id="hero">
        <p>A trusted partner for all of your media and communications needs.</p>
        {/* Photo by Sean O. on Unsplash  */}
      </div>
      <div id="services">
        <h1>Our Services</h1>
        <div id="services-info">
          <div className="services-decorative" id="content-development"><p>Content Development</p></div>
          <div className="services-decorative" id="copy-editing"><p>Copy Editing</p></div>
          <div className="services-decorative" id="marketing"><p>Marketing and Media Campaign Development</p></div>
          <div className="services-decorative" id="proposal-writing"><p>Proposal Writing</p></div>
          <div className="services-decorative" id="research"><p>Research</p></div>
          <div className="services-decorative" id="strategic-communications"><p>Strategic Communications</p></div>
          <div className="services-decorative" id="writing"><p>Writing</p></div>
        </div>
      </div>


    </div>
  )
}