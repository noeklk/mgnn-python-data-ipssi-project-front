import './assets/style/App.css';
import React from 'react';
import Home from './views/home';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
