function diagnostics_sketch(s) {
	var yr = (yrange[1] - yrange[0]) * 1.3;
	s.xrange = xrange;
	s.yrange = [-yr / 2, yr / 2];

	s.setup = function() {
		var diagnostics_div = s.select("#diagnostics")
		diagnostics = s.createCanvas((xrange[1] - xrange[0]) * scal, (yrange[1] - yrange[0]) * scal);
		diagnostics_div.child(diagnostics);
	}

	s.draw = function() {
		s.background(200);
		draw_axes(s);

		s.strokeWeight(5);
		var res = regression();

		for (var i = 0; i < num_points; i++) {
			
			if (res == undefined) {
				var residual = 0;
			} else {
				var residual = dots[i].pos.y - yhat(dots[i].pos.x);
			}
			s.stroke(dots[i].col);
			var x_pos = xscale(s, dots[i].pos.x)
			s.line(x_pos, s.height / 2, x_pos, yscale(s, residual));
		}
	}	
}
