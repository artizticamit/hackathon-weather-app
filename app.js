let button = document.querySelector('.button');

let inputValue = document.querySelector('.inputValue');

let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let img = document.querySelector('.icon');
let image = document.querySelector('#weather-icon');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3dd6054a997e81b42676a55bfe7b496f')
  .then(response=> response.json())
  .then(data => {
      console.log(data);
      // let date = data['dt'];
      // let parsedDate = new Date(date*1000);
      // console.log(parsedDate.toUTCString());
      let countryName = data['sys']['country'];
      let nameValue = data['name'];
      let tempValue = data['main']['temp']-273;
      let descValue = data['weather'][0]['description'];
      let icon = data['weather'][0]['icon'];
      name.innerHTML  = nameValue+" ,"+countryName;
      temp.innerHTML = Math.round(tempValue*100)/100 + " Degree";
      desc.innerHTML = descValue;
      // time.innerHTML = date;
      // time.innerHTML = new Date().toLocaleString("en-US", {timeZone: "Asia/colombo"});
      image.src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      
  })

  
  .catch(err => alert("wrong city name!"))
})
inputValue.addEventListener('keyup', function(event){
  if(event.keyCode === 13)
  {
    event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3dd6054a997e81b42676a55bfe7b496f')
  .then(response=> response.json())
  .then(data => {
      console.log(data);
      // let date = data['dt'];
      // let parsedDate = new Date(date*1000);
      // console.log(parsedDate.toUTCString());
      let countryName = data['sys']['country'];
      let nameValue = data['name'];
      let tempValue = data['main']['temp']-273;
      let descValue = data['weather'][0]['description'];
      let icon = data['weather'][0]['icon'];
      name.innerHTML  = nameValue+" ,"+countryName;
      temp.innerHTML = Math.round(tempValue*100)/100 + " Degree";
      desc.innerHTML = descValue;
      // time.innerHTML = date;
      // time.innerHTML = new Date().toLocaleString("en-US", {timeZone: "Asia/colombo"});
      image.src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      
  })

  
  .catch(err => alert("wrong city name!"))
    

  }
})