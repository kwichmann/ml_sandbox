var num_points = 4;
var siz = 200;

var k;
var k_slider;

function setup() {
	var canvas_div = select("#canvas")
	var canvas = createCanvas(siz, siz);
	canvas_div.child(canvas);
	
	k_slider = createSlider(1, 2 * num_points - 1, 1);

	// Generate dots
	for (var i = 0; i < num_points; i++) {
		dot1 = new Dot(color(0, 0, 255), 1);
		dots.push(dot1);
		dot2 = new Dot(color(255, 0, 0), -1);
		dots.push(dot2);
	}
}

function draw() {
	background(200);

	k = k_slider.value();
	predict();

	if (dragging && active_dot !== -1) {
		dots[active_dot].pos.x = mouseX;
		dots[active_dot].pos.y = mouseY;
	} else {
		set_active();
	}
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].show();
	}
}