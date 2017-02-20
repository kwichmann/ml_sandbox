var num_points = 11;
var scal = 30;

var xrange = [-1, 20];
var yrange = [-1, 14];


function setup() {
	var canvas_div = select("#canvas")
	var canvas = createCanvas((xrange[1] - xrange[0]) * scal, (yrange[1] - yrange[0]) * scal);
	canvas_div.child(canvas);
	
	colorMode(HSB);

	// Generate dots
	for (var i = 0; i < num_points; i++) {
		var hu = map(i, 0, num_points, 0, 360);
		var c = color(hu, 255, 255);
		dots.push(new Dot(c));
	}
}

function draw() {
	background(0, 0, 78);

	draw_axes();

	if (dragging && active_dot !== -1) {
		dots[active_dot].pos.x = xinvscale(mouseX);
		dots[active_dot].pos.y = yinvscale(mouseY);
	} else {
		set_active();
	}
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].show();
	}
}

function xscale(x) {
	return map(x, xrange[0], xrange[1], 0, width);
}

function yscale(y) {
	return map(y, yrange[0], yrange[1], height, 0);
}

function xinvscale(x) {
	return map(x, 0, width, xrange[0], xrange[1]);
}

function yinvscale(y) {
	return map(y, height, 0, yrange[0], yrange[1]);
}

function draw_axes() {
	stroke(0, 0, 0);
	strokeWeight(1);

	// x axis
	line(xscale(xrange[0]), yscale(0), xscale(xrange[1]), yscale(0));
	// ticks
	for (var i = Math.floor(xrange[0]); i < xrange[1]; i++) {
		line(xscale(i), yscale(0) - 0.1 * scal, xscale(i), yscale(0) + 0.1 * scal);
	}

	// y axis
	line(xscale(0), yscale(yrange[0]), xscale(0), yscale(yrange[1]));
	// ticks
	for (var i = Math.floor(yrange[0]); i < yrange[1]; i++) {
		line(xscale(0) - 0.1 * scal, yscale(i), xscale(0) + 0.1 * scal, yscale(i));
	}
}

