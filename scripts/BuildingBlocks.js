var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

function randRGB () {
	var i, c = [];
	for (i = 0; i < 3; i++){
		c[i] = Math.round(Math.random() * 255);
	}
	return ["rgb(", c.join(','), ")"].join("");
};

var initialX = 0;
var initialY = 490;

window.setInterval(function() {

  if (initialY >= 0) {
    Tile({
      xpos: initialX,
      ypos: initialY,
      color: randRGB()
    }).draw(ctx);

    if (initialX <= 490) {
      initialX += 10;
    } else {
      initialX = 0;
      initialY -= 10;
    }
  }

},1);
