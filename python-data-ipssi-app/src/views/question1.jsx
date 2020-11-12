import React from 'react';
import img from './../assets/img/bdd.jpg';

class Question1 extends React.Component {
  render(){
    const txt = "CREATE DATABASE IF NOT EXISTS `airport-analytics` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;\n\nUSE `airport-analytics`;\n\nCREATE TABLE airlines\n(\ncarrier VARCHAR(2) PRIMARY KEY,\n`name` VARCHAR(50)\n);\n\nCREATE TABLE planes\n(\ntailnum VARCHAR(6) PRIMARY KEY,\n`type` VARCHAR(30),\n`year` SMALLINT,\nmanufacturer VARCHAR(50),\nmodel VARCHAR(30),\nengines TINYINT,\nseats SMALLINT,\nspeed SMALLINT,\nengine VARCHAR(30)\n);\n\nCREATE TABLE airports\n(\nfaa VARCHAR(3) PRIMARY KEY,\n`name` VARCHAR(100),\nlat FLOAT,\nlon FLOAT,\nalt SMALLINT,\ntz SMALLINT,\ndst CHAR,\ntzone VARCHAR(30)\n);\n\nCREATE TABLE weather\n(\norigin VARCHAR(3),\n`year` SMALLINT,\n`month` TINYINT,\n`day` TINYINT,\n`hour` TINYINT,\ntemp FLOAT,\ndewp FLOAT,\nhumid FLOAT,\nwind_dir SMALLINT,\nwind_speed FLOAT,\nwind_gust FLOAT,\nprecip FLOAT,\npressure FLOAT,\nvisib FLOAT,\ntime_hour DATETIME,\nPRIMARY KEY (`year`, `month`, `day`, hour, origin),\nFOREIGN KEY origin_fk(origin) REFERENCES airports(faa)\n);\n\nCREATE INDEX `month_index` ON weather(`month`);\nCREATE INDEX `day_index` ON weather(`day`);\nCREATE INDEX `hour_index` ON weather(`hour`);\nCREATE INDEX `origin_index` ON weather(`origin`);\n\nCREATE TABLE flights\n(\n`year` SMALLINT,\n`month` TINYINT,\n`day` TINYINT,\ndep_time SMALLINT,\nsched_dep_time SMALLINT,\ndep_delay SMALLINT,\narr_time SMALLINT,\nsched_arr_time SMALLINT,\narr_delay SMALLINT,\ncarrier VARCHAR(2),\nflight SMALLINT,\ntailnum VARCHAR(6),\norigin VARCHAR(3),\ndest VARCHAR(3),\nair_time SMALLINT,\ndistance SMALLINT,\nhour TINYINT,\nminute TINYINT,\ntime_hour DATETIME,\nFOREIGN KEY tailnum_fk(tailnum) REFERENCES planes(tailnum),\nFOREIGN KEY carrier_fk(carrier) REFERENCES airlines(carrier),\nFOREIGN KEY dest_fk(dest) REFERENCES airports(faa),\nFOREIGN KEY origin_airports_fk(origin) REFERENCES airports(faa),\nFOREIGN KEY year_fk(`year`) REFERENCES weather(`year`),\nFOREIGN KEY month_fk(`month`) REFERENCES weather(`month`),\nFOREIGN KEY day_fk(`day`) REFERENCES weather(`day`),\nFOREIGN KEY hour_fk(hour) REFERENCES weather(hour),\nFOREIGN KEY origin_weather_fk(origin) REFERENCES weather(origin)\n);\n\nCREATE TABLE airline_airport\n(\nid INT AUTO_INCREMENT,\nairline_carrier VARCHAR(2) NOT NULL,\nairport_faa VARCHAR(3) NOT NULL,\nPRIMARY KEY (id, airline_carrier, airport_faa),\n    CONSTRAINT `constr_airline_airport_airline_fk`\n    FOREIGN KEY `airline_fk` (airline_carrier) REFERENCES airlines (carrier)\n     ON DELETE CASCADE ON UPDATE CASCADE,\nCONSTRAINT `constr_airline_airport_airport_fk`\n    FOREIGN KEY `airport_fk` (airport_faa) REFERENCES airports (faa)\n     ON DELETE CASCADE ON UPDATE CASCADE\n);"
    
    return (
      <main className="question1">
          <h1>Le shémat de la base de donnée</h1>
          <img src={img} />
          <h1>Les requêtes </h1>
          <pre>
            {txt}
          </pre>
      </main>
    );
  }
}

export default Question1;