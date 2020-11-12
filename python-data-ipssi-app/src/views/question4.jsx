import React from 'react';
import url from './../constantes/url';
import { Bar } from 'react-chartjs-2';

class Question4 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : {
        query1 : "",
        query2 : "",
        query3 : "",
        query4 : "",
        query5 : "",
        result1 : {airport_name : "", flights_count : 0},
        result2 : [],
        result3 : [],
        result4 : [],
        result5 : [],
      }
    }
  }

  componentWillMount(){
    fetch(url + "question-4")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : {
          query1 : data.query_4_1,
          query2 : data.query_4_2_1_most,
          query3 : data.query_4_2_2_least,
          query4 : data.query_4_3_1_most,
          query5 : data.query_4_3_2_least,
          result1 : data.result_4_1[0],
          result2 : data.result_4_2_1_most,
          result3 : data.result_4_2_2_least,
          result4 : data.result_4_3_1_most,
          result5 : data.result_4_3_2_least
        }
      })
    })
  }

  render(){
    const {result4, result5} = this.state.data;
    const planeNameList1 = result4.map(plane => plane.tailnum);
    const planeNameList2 = result5.map(plane => plane.tailnum);
    const planeCountList1 = result4.map(plane => plane.flights_count);
    const planeCountList2 = result5.map(plane => plane.flights_count);

    const data = {
      labels: planeNameList1,
      datasets: [
        {
          data: planeCountList1 ,
          label : "nombre de vols",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
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

    const data2 = {
      labels: planeNameList2,
      datasets: [
        {
          data: planeCountList2,
          label : "nombre de vols",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
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
      <main className="question4">
        <h1>Après les requêtes suivantes dans notre api python :</h1>
        <p>Pour trouver l'aéroport le plus fréquenté</p>
        <pre>{this.state.data.query1}</pre>
        <p>Pour les 10 destionations les plus prisées</p>
        <pre>{this.state.data.query2}</pre>
        <p>Pour les 10 destionations les moins prisées</p>
        <pre>{this.state.data.query3}</pre>
        <p>Pour les 10 avions les plus utilisés</p>
        <pre>{this.state.data.query4}</pre>
        <p>Pour les 10 avions les moins utilisés</p>
        <pre>{this.state.data.query5}</pre>
        <h1>Nous avons les résultats suivants :</h1>
        <p>L'aéroport le plus fréquenté est {this.state.data.result1.airport_name}, avec {this.state.data.result1.flights_count} vols.</p>
        <p>Les 10 destionations les plus prisées sont : </p>
        <ul>
          {this.state.data.result2.map((city) => {
            return(
            <li>{city.airport_name}</li>
            )
          })}
        </ul>
        <p>Les 10 destionations les moins prisées sont : </p>
        <ul>
          {this.state.data.result3.map((city) => {
            return(
            <li>{city.airport_name}</li>
            )
          })}
        </ul>
        <p>Les 10 avions les plus utilisés sont : </p>
        <ul>
          {result4.map((fly, index) => {
            return(
            <li>Numéro {index+1}, Avec {fly.flights_count} vols, l'avion {fly.tailnum}, il s'agit du modèle {fly.plane_model} du fabriquant {fly.plane_manufacturer}</li>
            )
          })}
        </ul>
        <Bar
          data={data}
          height="110"
        />
        <p>Les 10 avions les moins utilisés sont : </p>
        <ul>
          {result5.map((fly, index) => {
            return(
              <li>Numéro {index+1}, Avec {fly.flights_count} vols, l'avion {fly.tailnum}, il s'agit du modèle {fly.plane_model} du fabriquant {fly.plane_manufacturer}</li>
            )
          })}
        </ul>
        <Bar
          data={data2}
          height="110"
        />
      </main>
    );
  }
}

export default Question4;