function diagnostics_sketch(s) {
	var xr = xrange[1] - xrange[0];
	s.xrange = [-xr / 2, xr / 2];
	s.yrange = yrange;

	function setup() {
		var diagnostics_div = s.select("#diagnostics")
		diagnostics = s.createCanvas((s.xrange[1] - s.xrange[0]) * scal, (s.yrange[1] - s.yrange[0]) * scal);
		diagnostics_div.child(diagnostics);

		s.colorMode(HSB);
	}

	
}