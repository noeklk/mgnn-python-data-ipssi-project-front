import React from 'react';
import logo from './../assets/img/avion-blanc.png'
class Header extends React.Component {
  render(){
    return (
      <header>
          <img src={logo} />
          <h1>Trafic Aérien</h1>
      </header>
    );
  }
}

export default Header;