const Card = ({ weatherData }) => {
  // Function for date & hour
  const convertDate = (str) => {
    const selectHour = str.split(" ");
    const hour = selectHour[1].substring(0, 5);

    const newStr = str.replace(" ", "T");

    let newDate = new Date(newStr);

    const dayNumber = newDate.getDate();
    const day = newDate.getDay();
    const month = newDate.getMonth();

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

    const sentence = dayName + " " + dayNumber + " " + monthName + " " + hour;
    return sentence;
  };

  return (
    <div className="bloc2">
      {weatherData.list.map((day, ind) => {
        // Not the firt because already displayed
        if (ind !== 0) {
          return (
            <div key={ind} className="bloc2__day">
              <p>{convertDate(day.dt_txt)}</p>
              {day.weather.map((detail) => {
                return (
                  <div key={detail.id}>
                    <img
                      src={`http://openweathermap.org/img/w/${detail.icon}.png`}
                      alt={detail.main}
                    />
                    <p>{detail.description}</p>
                  </div>
                );
              })}
              <p>
                Max. <span>{day.main.temp_max.toFixed(0)}°</span>
              </p>
              <p>
                Min. <span>{day.main.temp_min.toFixed(0)}°</span>
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Card;
