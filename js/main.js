window.addEventListener("load", Init);

function Init() {
  var apiKey = "18f1c87e444741aca30db0a569bba999";
  var category = ["sports", "entertainment", "science", "health", "technology"];
  var callbackFunction = [
    { news: sportsNews },
    { news: entertainmentNews },
    { news: scienceNews },
    { news: healthNews },
    { news: technologyNews }
  ];

  for (var i = 0; i < category.length; i++) {
    NewsRequest(category[i], apiKey, callbackFunction[i].news);
  }
    CurrencyRequest();

  var weatherAPIKey = "d663677633bd6cb690bbdea66fe5a981";
  var city = "Rivne";
  WeatherRequest(city, weatherAPIKey, RenderWeather);
}

function WeatherRequest(city, weatherAPIKey, callback) {
  var url = `http://api.openweathermap.org/data/2.5/forecast?id=7046809&APPID=${weatherAPIKey}`;
  http: https: var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  }
}

function NewsRequest(category, apiKey, callback) {
  var url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=${apiKey}`;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } 
    else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  }
}

function RenderWeather(weather){
  console.log(weather);
  var weatherElement = document.querySelector("#weather");
  for (var i = 0; i < 5; i++) {
  
  var weatherDiv = document.createElement("div");
  weatherDiv.className = "weather";
  
  var city = document.createElement("div");
  city.className = "city";
  city.innerHTML = `${weather.city.name} ${weather.city.country}`;
  
  var weatherBody = document.createElement("div");
  weatherBody.className = "weatherList";
  weatherBody.innerHTML = `${weather.list[i].dt.txt} ${weather.list[i].weather[0].description} ${weather.list[1].weather[0].icon}`;

  var weatherTemp = document.createElement("div");
  weatherTemp.className = "weatherTemp ";
  weatherTemp.innerHTML = `${weather.list[0].main.temp}`;

  weatherElement.appendChild(weatherDiv);
  weatherDiv.appendChild(city);
  weatherDiv.appendChild(weatherBody);
  weatherDiv.appendChild(weatherTemp);

  }
}

function sportsNews(news) {
  var sportElem = document.querySelector("#sport");
  for (var i = 0; i < 5; i ++){
    var h3 = document.createElement('h3');
    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);

    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);

    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function entertainmentNews(news) {
  var entertainmentElem = document.querySelector("#entertainment");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');
    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    entertainmentElem.appendChild(h3);

    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    entertainmentElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    entertainmentElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    entertainmentElem.appendChild(author);

    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    entertainmentElem.appendChild(publishedAt);
  }
}

function scienceNews(news) {
  var scienceElem = document.querySelector("#science");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');
    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    scienceElem.appendChild(h3);

    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    scienceElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    scienceElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    scienceElem.appendChild(author);

    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    scienceElem.appendChild(publishedAt);
  }
}

function healthNews(news) {
  var healthElem = document.querySelector("#health");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');
    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    healthElem.appendChild(h3);

    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    healthElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    healthElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    healthElem.appendChild(author);

    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    healthElem.appendChild(publishedAt);
  }
}

function technologyNews(news) {
  var technologyElem = document.querySelector("#technology");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');
    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    technologyElem.appendChild(h3);

    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    technologyElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    technologyElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    technologyElem.appendChild(author);

    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    technologyElem.appendChild(publishedAt);
  }
}

function CurrencyRequest() {
  var xhr = new XMLHttpRequest();
  var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } 
    else {
      var data = JSON.parse(xhr.responseText);
      ShowCurrency(data);
    }
  }
}

function ShowCurrency(data) {
  for (var i = 0; i < data.length; i++) {
    var result1 = document.querySelector(".result1");
    var ccy = document.createElement("p");
    ccy.className = "ccy";
    ccy.innerHTML = data[i].ccy;
    result1.appendChild(ccy);

    var result2 = document.querySelector(".result2");
    var base_ccy = document.createElement("p");
    base_ccy.className = "ccy";
    base_ccy.innerHTML = data[i].base_ccy;
    result2.appendChild(base_ccy);

    var result3 = document.querySelector(".result3");
    var buy = document.createElement("p");
    buy.className = "buy";
    buy.innerHTML = data[i].buy;
    result3.appendChild(buy);

    var result4 = document.querySelector(".result4");
    var sale = document.createElement("p");
    sale.className = "sale";
    sale.innerHTML = data[i].sale;
    result4.appendChild(sale);
  }
}