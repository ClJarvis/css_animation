// Populate the star field
const numOfStars = 100;

//
for (let i = 0; i < numOfStars; i++) {
  let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
      star.style.top = xy[0] +'px';
      star.style.left = xy[1] + 'px';
    document.body.append(star);
}

const numOfStarsFade = 100;

//
for (let i = 0; i < numOfStarsFade; i++) {
  let star = document.createElement("div");
    star.className = "star2";
    var xy = getRandomPosition();
      star.style.top = xy[0] +'px';
      star.style.left = xy[1] + 'px';
    document.body.append(star);
}



function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("bouncing-loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


