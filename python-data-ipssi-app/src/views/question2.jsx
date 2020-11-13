import React from 'react';
import url from './../constantes/url';
import { Bar } from 'react-chartjs-2';

class Question2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : {query : "", result : {airlines_count : 0, airports_count : 0, airports_distinct_tzone_count : 0, flights_distinct_dest_count : 0, planes_count : 0}}
    }
  }

  componentDidMount(){
    fetch(url + "question-2")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : {
          query : data.query,
          result : data.result[0]
        }
      })
    })
  }

  render(){
    const data = {
      labels: ['compagnies aériennes', 'aéroports', 'fuseaux horaires ', 'destinations', 'avions'],
      datasets: [
        {
          data: [this.state.data.result.airlines_count, this.state.data.result.airports_count, this.state.data.result.airports_distinct_tzone_count, this.state.data.result.flights_distinct_dest_count, this.state.data.result.planes_count],
          label : "Nombre",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
    return (
      <main className="question2">
        <h1>Après la requête suivante dans notre api python :</h1>
        <pre>{this.state.data.query}</pre>
        <h1>Notre base de donnée nous informe qu'il y a : </h1>
        <div className="result">
          <p>- {this.state.data.result.airlines_count} compagnies aériennes</p>
          <p>- {this.state.data.result.airports_count} aéroports</p>
          <p>- {this.state.data.result.airports_distinct_tzone_count} fuseaux horaires pour l'ensemble de tous aéroports</p>
          <p>- {this.state.data.result.flights_distinct_dest_count} destinations</p>
          <p>- {this.state.data.result.planes_count} avions</p>
        </div>
        <Bar
          data={data}
          height="110"
        />
      </main>
    );
  }
}

export default Question2;