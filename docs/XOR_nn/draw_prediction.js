function draw_prediction() {
	noStroke();

	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var pred = predict(map(i, 0, 20, -0.5, 1.5), map(j, 0, 20, 1.5, -0.5));
			fill(map(pred, 0, 1, 0, 255));
			rect(map(i, 0, 20, 300, 500), map(j, 0, 20, 25, 225), 10, 10);
		}
	}
}