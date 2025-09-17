// src/components/Footer.jsx
import React from 'react';

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <p>© Vihangana Roosarani. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
