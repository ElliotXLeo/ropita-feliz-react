import React from 'react';

const Footer = ({ currentDate }) => {
  return (
    <footer className="footer">
      <p>Todos los derechos reservados &copy; {currentDate}</p>
    </footer>
  );
}

export default Footer;

