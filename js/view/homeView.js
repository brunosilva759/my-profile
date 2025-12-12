function render(weatherCard) {

  let inputValue

  const card = document.querySelector('.weatherCard');
  if (!card) {
    console.error('Weather card element not found');
    return;
  }

  const button = document.querySelector('#searchBtn');


  button.addEventListener(`click`, async e => {
    e.preventDefault();
    console.log(inputValue);
    
  })


  const input = document.querySelector('#cityInput');

  input.addEventListener(`input`, async e => {
    inputValue = e.target.value;
   
  });

  card.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = weatherCard.location.name;

  const subheading = document.createElement('h3');
  subheading.textContent = `${weatherCard.location.name}, ${weatherCard.location.country}`;

  const icon = document.createElement('img');
  icon.src = `https:${weatherCard.current.condition.icon}`;
  icon.alt = weatherCard.current.condition.text;

  const condition = document.createElement('p');
  condition.innerHTML = `<strong>Condition:</strong> ${weatherCard.current.condition.text}`;

  const temp = document.createElement('p');
  temp.innerHTML = `<strong>Temperature:</strong> ${weatherCard.current.temp_c}°C`;

  const humidity = document.createElement('p');
  humidity.innerHTML = `<strong>Humidity:</strong> ${weatherCard.current.humidity}%`;

  const wind = document.createElement('p');
  wind.innerHTML = `<strong>Wind:</strong> ${weatherCard.current.wind_kph} km/h`;

  card.appendChild(heading);
  card.appendChild(subheading);
  card.appendChild(icon);
  card.appendChild(condition);
  card.appendChild(temp);
  card.appendChild(humidity);
  card.appendChild(wind);


}

export default { render };
