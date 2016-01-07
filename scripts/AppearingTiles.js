var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

function randRGB () {
	var i, c = [];
	for (i = 0; i < 3; i++){
		c[i] = Math.round(Math.random() * 255);
	}
	return ["rgb(", c.join(','), ")"].join("");
};

window.setInterval(function() {
  Tile({
    xpos: Math.random() * 500,
    ypos: Math.random() * 500,
    color: randRGB()
  }).draw(ctx);
},10);
