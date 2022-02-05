import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--bg-light-grey);
    font-family: "Anonymous Pro", monospace;
    color: var(--blue-main-txt);
  }
  * {
    box-sizing: border-box;
  }
  .wrapper {
    margin: 0 auto;
    width: 50%;
  }
  a {
    color: var(--blue-main-txt);
    text-decoration: none;
    font-weight: 700;
  }
  a:hover {
    text-decoration: underline overline var(--electric-yellow);
  }
  h2 {
    font-weight: 700;
    font-size: 2em;
  }

  // MEDIA QUERIES 
  @media (max-width: 1245px) {
    .wrapper {
      width: 60%;
    }
  }
  @media (max-width: 1024px) {
    .wrapper {
      width: 70%;
    }
  }
  @media (max-width: 930px) {
    .wrapper {
      width: 90%;
    }
    main .bloc2 {
      flex-direction: column;
      font-size: 1em;
    }
    main .bloc2 > div {
      padding: 15px 0;
    }
    main .bloc2 div.bloc2__day:not(:last-child) {
      border: none;
      border-bottom: 2px solid var(--electric-yellow);
    }
  }
`;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loadingWeatherData, setLoadingWeatherData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,nl&units=metric&cnt=5&APPID=ea3fa8eae2abb2173ddb7902ade3a2d0`
        );

        if (response.status === 200) {
          setWeatherData(response.data);
          setLoadingWeatherData(false);
        }
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  // Function for date
  const gettingDate = (offset) => {
    const actualDate = new Date(new Date().getTime() + offset * 1000);
    const dayNumber = actualDate.getDate();
    const day = actualDate.getDay();
    const month = actualDate.getMonth();

    let dayName;
    let monthName;

    switch (day) {
      case 0:
        dayName = "Sun";
        break;
      case 1:
        dayName = "Mon";
        break;
      case 2:
        dayName = "Tue";
        break;
      case 3:
        dayName = "Wed";
        break;
      case 4:
        dayName = "Thu";
        break;
      case 5:
        dayName = "Fri";
        break;
      case 6:
        dayName = "Sat";
        break;
      default:
        monthName = "-";
    }

    switch (month) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "april";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "October";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;
      default:
        monthName = "----";
    }

    const sentence = dayName + " " + dayNumber + " " + monthName;
    return sentence;
  };

  return loadingWeatherData ? (
    <div className="loading">
      <span>🌈 En cours de chargement...</span>
    </div>
  ) : (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <div className="wrapper">
          <div className="bloc1">
            <div className="bloc1__1">
              <h2>{weatherData.city.name}</h2>
              <p>{gettingDate(weatherData.city.timezone)}</p>
            </div>

            <div className="bloc1__1bis">
              <p>{weatherData.list[0].main.temp.toFixed(0)}°</p>
            </div>

            <div className="bloc1__2">
              <p>
                Max. {weatherData.list[0].main.temp_max.toFixed(0)}° / Min.{" "}
                {weatherData.list[0].main.temp_min.toFixed(0)}°
              </p>
              {weatherData.list[0].weather.map((el) => {
                return (
                  <div key={el.id}>
                    <img
                      src={`http://openweathermap.org/img/w/${el.icon}.png`}
                      alt={el.main}
                    />
                    <p>{el.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bloc1__3">
              <p>
                💨 Wind:{" "}
                <span>
                  {((weatherData.list[0].wind.speed * 3600) / 1000).toFixed(0)}{" "}
                  km/h
                </span>
              </p>
              <p>
                💦 Humidity:{" "}
                <span>{weatherData.list[0].main.humidity.toFixed(0)} %</span>
              </p>
            </div>
          </div>

          <Card weatherData={weatherData} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
