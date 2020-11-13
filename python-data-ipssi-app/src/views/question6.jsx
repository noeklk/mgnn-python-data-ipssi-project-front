import React from 'react';
import url from './../constantes/url';

class Question6 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : {
        query1 : "",
        query2 : "",
        query3 : "",
        query4 : "",
        result1 : "",
        result2 : "",
        result3 : "",
        result4 : "",
      }
    }
  }

  componentWillMount(){
    fetch(url + "question-6")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : {
          query1 : data.query_6_1,
          query2 : data.query_6_2_1,
          query3 : data.query_6_2_2,
          query4 : data.query_6_2_3,
          result1 : data.result_6_1[0],
          result2 : data.result_6_2_1[0],
          result3 : data.result_6_2_2[0],
          result4 : data.result_6_2_3[0],
        }
      })
    })
  }

  render(){
    return (
      <main className="question6">
          <h1>Après les requêtes suivantes dans notre api python :</h1>
          <p>Pour trouver les vols ayant atterri à Houston</p>
          <pre>{this.state.data.query1}</pre>
          <p>Pour trouver les vols Partant de New york pour Seattle</p>
          <pre>{this.state.data.query2}</pre>
          <p>Pour trouver combien de compagnies desservent cette destination</p>
          <pre>{this.state.data.query3}</pre>
          <p>Pour trouver combien d'avion unique</p>
          <pre>{this.state.data.query4}</pre>
          <h1>Notre base de donnée nous informe qu'il y a : </h1>
          <p>Il y a {this.state.data.result1.flights_count} vols ayant atterri à Houston</p>
          <p>Il y a {this.state.data.result2.flights_count} vols qui parte de New york vers Seattle</p>
          <p>Il y a {this.state.data.result3.airlines_count} compagnies qui desservent cette destination</p>
          <p>Il y a {this.state.data.result4.tailnum_count} avions unique</p>
      </main>
    );
  }
}

export default Question6;