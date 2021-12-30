const getWeather = async () => {
  // console.log("METHOD CHECK");

  let city = document.querySelector("#input").value || "mumbai";
  let appid = "7023923dd26a725da995c75b65864de5";
  let units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;

  let response = await fetch(url);
  let result = await response.json();

  // console.log(result);
  console.log(city, result.main.temp);

  // UI RENDER
  let parent = document.querySelector("#parent");
  let childs = parent.innerHTML;
  let newchild = `<h3>${city} - ${result.main.temp}</h3>`;

  parent.innerHTML = newchild + childs;
};
