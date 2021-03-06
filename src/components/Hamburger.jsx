import React from "react";
import { slide as Hamburger } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Hamburger {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">About</a>

      <a className="menu-item" href="/services">Services</a>

      <a href="mailto:dortyrussell@gmail.com">
        <section className="hamburger-contact">
          <svg className="hamburger-contact-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
          <p>Dortyrussell@gmail.com</p>
        </section></a>

      <section className="hamburger-contact">
        <svg className="hamburger-contact-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" /></svg>
        <p><a href="tel:808-561-7608">808-561-7608</a></p></section>

    </Hamburger>
  );
};
