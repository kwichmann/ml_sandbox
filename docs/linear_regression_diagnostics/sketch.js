var num_points = 11;
var scal = 20;

var xrange = [-1, 20];
var yrange = [-1, 14];

var main = new p5(main_sketch, "main");
var diagnostics = new p5(diagnostics_sketch, "diagnostics");

var reg;

function xscale(s, x) {
	return s.map(x, s.xrange[0], s.xrange[1], 0, s.width);
}

function yscale(s, y) {
	return s.map(y, s.yrange[0], s.yrange[1], s.height, 0);
}

function xinvscale(s, x) {
	return s.map(x, 0, s.width, s.xrange[0], s.xrange[1]);
}

function yinvscale(s, y) {
	return s.map(y, s.height, 0, s.yrange[0], s.yrange[1]);
}

function draw_axes(s) {
	s.stroke(0, 0, 0);
	s.strokeWeight(1);

	// x axis
	// s.line(xscale(s, s.xrange[0]), yscale(s, 0), xscale(s, s.xrange[1]), yscale(s, 0));
	s.line(0, yscale(s, 0), s.width, yscale(s, 0));
	// ticks
	for (var i = Math.floor(s.xrange[0]); i < s.xrange[1]; i++) {
		s.line(xscale(s, i), yscale(s, 0) - 0.1 * scal, xscale(s, i), yscale(s, 0) + 0.1 * scal);
	}

	// y axis
	// s.line(xscale(s, 0), yscale(s.yrange[0]), xscale(s, 0), yscale(s.yrange[1]));
	s.line(xscale(s, 0), 0, xscale(s, 0), s.height);
	// ticks
	for (var i = Math.floor(s.yrange[0]); i < s.yrange[1]; i++) {
		s.line(xscale(s, 0) - 0.1 * scal, yscale(s, i), xscale(s, 0) + 0.1 * scal, yscale(s, i));
	}
}

// The fitted function
function yhat(x) {
	if (reg == undefined) {
		return 0;
	} else {
		return reg[0] + reg[1] * x;
	}
}

// All buttons etc. goes here:
function gui_setup() {
	var button_div = main.select("#buttons");
	
	var random_button = main.createButton("Randomize");
	button_div.child(random_button);
	random_button.mouseClicked(randomize_dots);

	var anscombe1_button = main.createButton("Anscombe 1");
	button_div.child(anscombe1_button);
	anscombe1_button.mouseClicked(anscombe1);

	var anscombe2_button = main.createButton("Anscombe 2");
	button_div.child(anscombe2_button);
	anscombe2_button.mouseClicked(anscombe2);
	
	var anscombe3_button = main.createButton("Anscombe 3");
	button_div.child(anscombe3_button);
	anscombe3_button.mouseClicked(anscombe3);
	
	var anscombe4_button = main.createButton("Anscombe 4");
	button_div.child(anscombe4_button);
	anscombe4_button.mouseClicked(anscombe4);

}

function randomize_dots() {
	for (var i = 0; i < num_points; i++) {
			dots[i].pos = main.createVector(main.random(xrange[0], xrange[1]), main.random(yrange[0], yrange[1]));
		}
}

function set_dots(l) {
	for (var i = 0; i < num_points; i++) {
		dots[i].pos = main.createVector(l[i][0], l[i][1]);
	}
}

function anscombe1() {
	set_dots(
		[[10, 8.04], [8, 6.95], [13, 7.58], [9, 8.81],
		[11, 8.33], [14, 9.96], [6, 7.24], [4, 4.26],
		[12, 10.84], [7, 4.82], [5, 5.68]]);
}

function anscombe2() {
	set_dots(
		[[10, 9.14], [8, 8.14], [13, 8.74], [9, 8.77],
		[11, 9.26], [14, 8.10], [6, 6.13], [4, 3.10],
		[12, 9.13], [7, 7.26], [5, 4.74]]);
}

function anscombe3() {
	set_dots(
		[[10, 7.46], [8, 6.77], [13, 12.74], [9, 7.11],
		[11, 7.81], [14, 8.84], [6, 6.08], [4, 5.39],
		[12, 8.15], [7, 6.42], [5, 5.73]]);
}

function anscombe4() {
	set_dots(
		[[8, 6.58], [8, 5.76], [8, 7.71], [8, 8.84],
		[8, 8.47], [8, 7.04], [8, 5.25], [19, 12.50],
		[8, 5.56], [8, 7.91], [8, 6.89]]);
}
