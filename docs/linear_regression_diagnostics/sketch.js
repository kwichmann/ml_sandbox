var num_points = 11;
var scal = 30;

var xrange = [-1, 20];
var yrange = [-1, 14];

var main = new p5(main_sketch, "main");
var diagnostics = new p5(diagnostics_sketch, "diagnostics");

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
	s.line(xscale(s, s.xrange[0]), yscale(s, 0), xscale(s, s.xrange[1]), yscale(s, 0));
	// ticks
	for (var i = Math.floor(s.xrange[0]); i < s.xrange[1]; i++) {
		s.line(xscale(s, i), yscale(s, 0) - 0.1 * scal, xscale(s, i), yscale(s, 0) + 0.1 * scal);
	}

	// y axis
	s.line(xscale(s, 0), yscale(yrange[0]), xscale(s, 0), yscale(yrange[1]));
	// ticks
	for (var i = Math.floor(yrange[0]); i < yrange[1]; i++) {
		s.line(xscale(s, 0) - 0.1 * scal, yscale(s, i), xscale(s, 0) + 0.1 * scal, yscale(s, i));
	}
}

