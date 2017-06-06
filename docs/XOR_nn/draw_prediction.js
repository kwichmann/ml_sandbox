function draw_prediction() {
	noStroke();
	var sz = sz_slider.value();

	for (var i = 0; i < 40; i++) {
		for (var j = 0; j < 40; j++) {
			var pred = predict(map(i, 0, 40, -sz, 1 + sz), map(j, 0, 40, 1 + sz, -sz));
			fill(map(pred, 0, 1, 0, 255));
			rect(map(i, 0, 40, 300, 500), map(j, 0, 40, 25, 225), 5, 5);
		}
	}

	// Draw data points
	stroke(200, 200, 255);

	fill(255);
	ellipse(map(0, -sz, 1 + sz, 300, 500), map(0, -sz, 1 + sz, 25, 225), 10, 10);
	ellipse(map(1, -sz, 1 + sz, 300, 500), map(1, -sz, 1 + sz, 25, 225), 10, 10);
	
	fill(0);
	ellipse(map(0, -sz, 1 + sz, 300, 500), map(1, -sz, 1 + sz, 25, 225), 10, 10);
	ellipse(map(1, -sz, 1 + sz, 300, 500), map(0, -sz, 1 + sz, 25, 225), 10, 10);
}