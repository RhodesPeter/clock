(function(){

  var secondHand = document.getElementsByClassName("clock__second")[0];
  var minuteHand = document.getElementsByClassName("clock__minute")[0];
  var hourHand = document.getElementsByClassName("clock__hour")[0];

  function setDate(){
    var now = new Date();

    var seconds = now.getSeconds();
    var secondDegrees = ((seconds / 60) * 360) + 90;
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

})();
