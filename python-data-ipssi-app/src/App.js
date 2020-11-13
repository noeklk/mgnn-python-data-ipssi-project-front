import './assets/style/App.css';
import React from 'react';
import Question1 from './views/question1';
import Question2 from './views/question2';
import Question3 from './views/question3';
import Question4 from './views/question4';
import Question5 from './views/question5';
import Question6 from './views/question6';
import Question8 from './views/question8';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      page : 1
    }
  }

  changePage = (num) => {
    this.setState({page : num})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Nav changePage={this.changePage} />
        {this.state.page === 1 ? <Question1/> : ""}
        {this.state.page === 2 ? <Question2/> : ""}
        {this.state.page === 3 ? <Question3/> : ""}
        {this.state.page === 4 ? <Question4/> : ""}
        {this.state.page === 5 ? <Question5/> : ""}
        {this.state.page === 6 ? <Question6/> : ""}
        {this.state.page === 8 ? <Question8/> : ""}

        <Footer/>
      </div>
    );
  }
}

export default App;
