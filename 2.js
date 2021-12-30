const getWeather = async () => {
  let city = document.querySelector("#input").value || "mumbai";
  let appid = "7023923dd26a725da995c75b65864de5";
  let units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${appid}&units=${units}`;

  let response = await fetch(url);
  let result = await response.json();

  // console.log(result.list);

  for (let item of result.list) {
    console.log(item);
    let date = new Date(item.dt * 1000);
    let temp = item.temp.day;

    // UI RENDER
    let parent = document.querySelector("#parent");
    let childs = parent.innerHTML;
    let newChild = `<h3>${city} ${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} =>  ${temp}</h3>`;

    parent.innerHTML = newChild + childs;
  }
};
