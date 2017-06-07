function draw_prediction() {
	noStroke();
	var sz = sz_slider.value();

	for (var i = 0; i < 40; i++) {
		for (var j = 0; j < 40; j++) {
			var pred = predict(map(i + 0.5, 0, 40, -sz, 1 + sz), map(j - 0.5, 0, 40, 1 + sz, -sz));
			fill(map(pred, 0, 1, 0, 255));
			rect(map(i, 0, 40, 300, 500), map(j, 0, 40, 225, 25), 5, 5);
		}
	}

	// Draw data points
	fill(255);

	if (active == 0) {
		stroke(0, 255, 0);
	}
	else {
		stroke(200, 200, 255);
	}		
	ellipse(map(0, -sz, 1 + sz, 300, 500), map(0, -sz, 1 + sz, 225, 25), 10, 10);

	if (active == 3) {
		stroke(0, 255, 0);
	}
	else {
		stroke(200, 200, 255);
	}
	ellipse(map(1, -sz, 1 + sz, 300, 500), map(1, -sz, 1 + sz, 225, 25), 10, 10);
	
	fill(0);
	if (active == 1) {
		stroke(0, 255, 0);
	}
	else {
		stroke(200, 200, 255);
	}
	ellipse(map(1, -sz, 1 + sz, 300, 500), map(0, -sz, 1 + sz, 225, 25), 10, 10);

	if (active == 2) {
		stroke(0, 255, 0);
	}
	else {
		stroke(200, 200, 255);
	}
	ellipse(map(0, -sz, 1 + sz, 300, 500), map(1, -sz, 1 + sz, 225, 25), 10, 10);
}