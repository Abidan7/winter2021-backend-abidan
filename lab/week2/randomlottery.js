// Student Name: Jose Abidan Ramirez


var getPowerballNumbers = ("random", "powerball");
var properResults = [];
var getRandomNumbers = 0;
var contains = false;

function getRandomNumbers(r) {
  if (!(r instanceof Array)) return false;
  var rv=[];
  
  for (var i=0,m=r.length;i<m;i++)
    rv.push(Math.floor((Math.random()*r[i]) +1));
  return rv;
}

function getPowerballNumbers(getRandomNumbers,luckyPowerBall) {
  return getRandomNumbers([69,69,69,69,69]),luckyPowerBall[26];}
  for (i = 1; i < 7; i++)
  { do
  
  {
    (getRandomNumbers = Math.floor((Math.random() * (i != 5 ? 69 : 69)) + 1));
    contains = properResults.indexOf(getRandomNumbers) > -1;
      
    (luckyPowerBall = Math.floor((Math.random() * (i != 6 ? 26 : 26)) + 1));
    contains = properResults.indexOf(luckyPowerBall) > -1;
  } while(contains)
         
  properResults.push("Your lottery numbers are: ", getRandomNumbers, luckyPowerBall);
}

  