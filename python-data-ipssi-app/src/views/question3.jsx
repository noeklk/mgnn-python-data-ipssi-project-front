import React from 'react';
import url from './../constantes/url';

class Question3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : {query : "", timeZone : 0}
    }
  }

  componentDidMount(){
    fetch(url + "question-3")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : {
          query : data.query,
          timeZone : data.result[0].tzone_count
        }
      })
    })
  }

  render(){
    return (
      <main className="question3">
        <h1>Après la requête suivante dans notre api python :</h1>
        <pre>{this.state.data.query}</pre>
        <h1>Notre base de donnée nous informe qu'il y a {this.state.data.timeZone} zones aux USA où on ne passe pas à l'heure d'été</h1>
      </main>
    );
  }
}

export default Question3;