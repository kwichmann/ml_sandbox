function main_sketch(s) {
	s.xrange = xrange;
	s.yrange = yrange;

	s.setup = function() {

		// Set up main canvas
		s.createCanvas((s.xrange[1] - s.xrange[0]) * scal, (s.yrange[1] - s.yrange[0]) * scal);
		s.background(0);
		
		// Dot colors
		var dot_cols = [s.color(255), s.color(128),
			s.color(255, 0, 0), s.color(0, 255, 0), s.color(0, 0, 255),
			s.color(255, 150, 150), s.color(150, 255, 150), s.color(150, 150, 255),
			s.color(255, 255, 0), s.color(255, 0, 255), s.color(0, 255, 255)];

		// Generate dots
		for (var i = 0; i < num_points; i++) {
			dots.push(new Dot(dot_cols[i]));
		}

		// Set up buttons etc.
		gui_setup();
	}

	s.draw = function() {
		s.background(200);

		draw_axes(s);
		regression_line(s);

		if (dragging && active_dot !== -1) {
			dots[active_dot].pos.x = s.constrain(xinvscale(s, s.mouseX), s.xrange[0], s.xrange[1]);
			dots[active_dot].pos.y = s.constrain(yinvscale(s, s.mouseY), s.yrange[0], s.yrange[1]);
		} else {
			set_active();
		}
	
		for (var i = 0; i < dots.length; i++) {
			dots[i].show();
		}

		// Show stats
		var reg_line_div = s.select("#reg_line");
		var reg_coef = regression();
		reg_line_div.html("Regression line: y = " + math.floor(reg_coef[1] * 100 + .5) / 100 + "x + " + math.floor(reg_coef[0] * 100 + .5) / 100);

		var means_div = s.select("#means");
		var means = calc_means();
		means_div.html("Mean x value: " + math.floor(means[0] * 100 + .5) / 100 + ".   Mean y value: " + math.floor(means[1] * 100 + .5) / 100);
	}
	
	// For dragging points

	s.mouseClicked = function() {
		if (active_dot === -1) {
			dragging = false;
		}
		dragging = !dragging;
	}
}