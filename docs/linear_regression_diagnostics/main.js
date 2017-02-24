function main_sketch(s) {
	s.xrange = xrange;
	s.yrange = yrange;

	s.setup = function() {
		console.log(s);

		// Set up main canvas
		s.createCanvas((s.xrange[1] - s.xrange[0]) * scal, (s.yrange[1] - s.yrange[0]) * scal);
		s.background(0);
	
		//colorMode(HSB);

		// Generate dots
		for (var i = 0; i < num_points; i++) {
			var hu = s.map(i, 0, num_points, 0, 360);
			var c = s.color(hu, 255, 255);
			dots.push(new Dot(c));
		}
	}

	s.draw = function() {
		s.background(0, 0, 78);

		draw_axes(s);
		// regression_line();

		if (dragging && active_dot !== -1) {
			dots[active_dot].pos.x = constrain(xinvscale(s, s.mouseX), s.xrange[0], s.range[1]);
			dots[active_dot].pos.y = constrain(yinvscale(s, s.mouseY), s.yrange[0], y.range[1]);
		} else {
			set_active();
		}
	
		for (var i = 0; i < dots.length; i++) {
			dots[i].show();
		}
	}
	
}