
const apiKey = '05fb8a4a953fabbda2db99c7be00ad10'; // Replace with your OpenWeatherMap API key
//const city = 'London'; // Replace with the desired city

// Construct the API URL
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data
const getWeather = (q) => {
  cityname.innerHTML = q
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then((response) => {
      
      console.log(response); 

      temp.innerHTML = response.main.temp
      temp5.innerHTML = response.main.temp
      feels_like.innerHTML = response.main.feels_like
      temp_min.innerHTML = response.main.temp_min
      temp_max.innerHTML = response.main.temp_max
      pressure.innerHTML = response.main.pressure
      humidity.innerHTML = response.main.humidity
      humidity5.innerHTML = response.main.humidity
      description.innerHTML = response.weather[0].description
      speed.innerHTML = response.wind.speed
      speed5.innerHTML = response.wind.speed
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });

}
submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(q.value)
})
getWeather("delhi")

//const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Define the city object with its properties
const cityObject = {
  name: 'hyderabad', 
  temp: null,
  feels_like: null,
  temp_min: null,
  temp_max:null,
  pressure:null,
  humidity: null,
  description: null,
  speed: null,
  
};

// Construct the API URL
const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityObject.name}&appid=${apiKey}&units=metric`;

// Fetch weather data
fetch(apiUrl1)
  .then(response => response.json())
  .then((response) => {
      
    console.log(response); 

    temp1.innerHTML = response.main.temp
    feels_like1.innerHTML = response.main.feels_like
    temp_min1.innerHTML = response.main.temp_min
    temp_max1.innerHTML = response.main.temp_max
    pressure1.innerHTML = response.main.pressure
    humidity1.innerHTML = response.main.humidity
    description1.innerHTML = response.weather[0].description
    speed1.innerHTML = response.wind.speed
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
  const cityObject1 = {
    name: 'Patna', 
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max:null,
    pressure:null,
    humidity: null,
    description: null,
    speed: null,
    
  };
  
  // Construct the API URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityObject1.name}&appid=${apiKey}&units=metric`;
  
  // Fetch weather data
  fetch(apiUrl)
    .then(response => response.json())
    .then((response) => {
        
      console.log(response); 
  
      temp2.innerHTML = response.main.temp
      feels_like2.innerHTML = response.main.feels_like
      temp_min2.innerHTML = response.main.temp_min
      temp_max2.innerHTML = response.main.temp_max
      pressure2.innerHTML = response.main.pressure
      humidity2.innerHTML = response.main.humidity
      description2.innerHTML = response.weather[0].description
      speed2.innerHTML = response.wind.speed
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
  
    const cityObject2 = {
      name: 'Kolkata', 
      temp: null,
      feels_like: null,
      temp_min: null,
      temp_max:null,
      pressure:null,
      humidity: null,
      description: null,
      speed: null,
      
    };
    
    // Construct the API URL
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityObject2.name}&appid=${apiKey}&units=metric`;
    
    // Fetch weather data
    fetch(apiUrl2)
      .then(response => response.json())
      .then((response) => {
          
        console.log(response); 
    
        temp3.innerHTML = response.main.temp
        feels_like3.innerHTML = response.main.feels_like
        temp_min3.innerHTML = response.main.temp_min
        temp_max3.innerHTML = response.main.temp_max
        pressure3.innerHTML = response.main.pressure
        humidity3.innerHTML = response.main.humidity
        description3.innerHTML = response.weather[0].description
        speed3.innerHTML = response.wind.speed
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
      const cityObject3= {
        name: 'Bangalore', 
        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max:null,
        pressure:null,
        humidity: null,
        description: null,
        speed: null,
        
      };
      
      // Construct the API URL
      const apiUrl3 = `https://api.openweathermap.org/data/2.5/weather?q=${cityObject3.name}&appid=${apiKey}&units=metric`;
      
      // Fetch weather data
      fetch(apiUrl3)
        .then(response => response.json())
        .then((response) => {
            
          console.log(response); 
      
          temp4.innerHTML = response.main.temp
          feels_like4.innerHTML = response.main.feels_like
          temp_min4.innerHTML = response.main.temp_min
          temp_max4.innerHTML = response.main.temp_max
          pressure4.innerHTML = response.main.pressure
          humidity4.innerHTML = response.main.humidity
          description4.innerHTML = response.weather[0].description
          speed4.innerHTML = response.wind.speed
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
      