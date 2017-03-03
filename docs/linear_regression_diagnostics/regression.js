function design_matrix() {
	var x = [];
	for (var i = 0; i < dots.length; i++) {
		x.push([1, dots[i].pos.x]);
	}
	return math.matrix(x);
}

function y_vector() {
	var y = [];
	for (var i = 0; i < dots.length; i++) {
		y.push([dots[i].pos.y]);
	}
	return math.matrix(y);
}

function regression() {
	var x = design_matrix();
	var y = y_vector();

	// Use math.js to solve the normal equations
	var xt = math.transpose(x);
	var xtx = math.multiply(xt, x);
	var inverse = math.inv(xtx);
	var beta = math.multiply(math.multiply(inverse, xt), y);

	return [math.subset(beta, math.index(0, 0)), math.subset(beta, math.index(1, 0))];
}

function regression_line(s) {
	reg = regression();

	s.stroke(0, 0, 0);
	s.strokeWeight(2);
	s.line(xscale(s, s.xrange[0]), yscale(s, yhat(s.xrange[0])), xscale(s, s.xrange[1]), yscale(s, yhat(s.xrange[1])));
}