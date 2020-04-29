import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>808-561-7608  </p>
        <p>Dortyrussell@gmail.com</p>
      </div>
      <div>
      <h4 id="copyright">©2019 Normil Media LLC</h4>
        {/* <h4>Made with <a href="http://katiepgray.surge.sh/">♥</a> KG</h4> */}
        </div>
    </div>
  )
}