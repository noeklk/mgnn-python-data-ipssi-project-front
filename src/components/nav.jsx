import React from 'react';

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul>
          <li><button onClick={() => this.props.changePage(1)}>Question 1</button></li>
          <li><button onClick={() => this.props.changePage(2)}>Question 2</button></li>
          <li><button onClick={() => this.props.changePage(3)}>Question 3</button></li>
          <li><button onClick={() => this.props.changePage(4)}>Question 4</button></li>
          <li><button onClick={() => this.props.changePage(5)}>Question 5</button></li>
          <li><button onClick={() => this.props.changePage(6)}>Question 6</button></li>
          <li><button onClick={() => this.props.changePage(7)}>Question 7</button></li>
          <li><button onClick={() => this.props.changePage(8)}>Question 8</button></li>
          <li><button onClick={() => this.props.changePage(9)}>Question 9</button></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;