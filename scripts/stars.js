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



function getRandonPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randonY = Math.floor(Math.random()*y);
  return [randomX, randomY];
}
