(function(){

  var secondHand = document.getElementsByClassName("clock__second")[0];
  var minuteHand = document.getElementsByClassName("clock__minute")[0];
  var hourHand = document.getElementsByClassName("clock__hour")[0];
  var clock = document.getElementsByClassName("clock")[0];
  var cityButton = document.getElementsByClassName("clock__city-button")[0];
  var clockTitle = document.getElementsByClassName("clock__title")[0];
  var index = 0;
  var city = 'LONDON';
  var cities = ["NEW YORK", "FREETOWN", "TOKYO", "LONDON"];

  cityButton.addEventListener("click", nextCity);

  function getTime(){
    var timeNow = new Date();
    var now = new Date ( timeNow );
    var alt = {
      "LONDON": 0,
      "NEW YORK": 5,
      "FREETOWN": 1,
      "TOKYO": 16
    };
    now.setHours( timeNow.getHours() - alt[city] );
    return now;
  }

  function setDate(){
    var now = getTime();
    var seconds = now.getSeconds();
    var secondDegrees = ((seconds / 60) * 360) + 90;

    if (seconds === 0){
      secondHand.classList.add('no-transition');
    } else {
      secondHand.classList.remove('no-transition');
    }

    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';

    var minutes = now.getMinutes();
    var minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';

    var hours = now.getHours();
    if (hours > 12){ hours -= 12};
    var hourDegrees = (hours * 30) + ((minuteDegrees - 90) / 12) + 90;
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
  }

  setInterval(setDate, 1000);

  window.setTimeout(function () {
    clock.classList.remove('off-screen');
  }, 1000);

  function nextCity(){
    var textnode = document.createTextNode(cities[index]);
    clockTitle.replaceChild(textnode, clockTitle.childNodes[0]);
    city = cities[index];
    index = index === 3 ? 0 : index += 1;
    cityButton.innerHTML = cities[index] + ' &rarr;';
  }

})();
