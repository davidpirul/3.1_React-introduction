import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../stylesheets/Header.css';

function Header(){
  return (
    <div className='Header'>
      <h1><Badge bg="secondary">SETUPS PARA OFICINA</Badge></h1>
    </div>
  );
}

export default Header;