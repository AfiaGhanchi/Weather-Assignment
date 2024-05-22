var weather = prompt("enter your weather : sunny,rainy,cloudy or windy");
document.write("<body style= 'height:69vh;background-image: linear-gradient(to right,  rgb(10, 255, 255) , rgb(10, 30, 148));' oerflow:hidden;>" +
  "</body>");
if (weather == "sunny") {
  document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
    "<img src='sun.png' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; margin-top:30px font-size:40px; font-weight: bold;  color: rgb(255, 218, 6); '>" +
    " Sunny😰🥴" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"

  );

}

else if (weather == "rainy") {
  document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
    "<img src='rainy.png' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; mt-5 font-size:40px; font-weight: bold; color: rgb(16, 16, 146);'>" +
    " Rainy☔😊" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"

  );
}

else if (weather == "cloudy") {
  document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
    "<img src='cloudy.jpeg' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; margin-top:30px font-size:40px; font-weight: bold; color: deepskyblue;'>" +
    " Cloudy🤩" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"

  );
}

else if (weather == "windy") {
  document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
    "<img src='wind.png' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; margin-top:30px font-size:40px; font-weight: bold;  color: lightslategray;'>" +
    " Windy😶‍🌫🍃" +

    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"

  );
}



else {
  document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
    "<img src='emoji.png' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +

    "<h1 style='margin:auto; margin-top:30px font-size:40px; font-weight: bold;  color: rgb(195, 17, 17);text-align: center; '>" +
    " Weather Not Found 🧐😒" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"

  );
}