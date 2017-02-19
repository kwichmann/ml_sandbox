var training = false;

function keyPressed() {
	if (keyCode === 83) {
		train();
	}

	if (keyCode === 32) {
		training = !training;
	}
}

function train() {
	for (var i = 0; i < dots.length; i++) {
		var predict = dots[i].classify();
		var actual = dots[i].classification;
		if (predict !== actual) {
			w.sub(dots[i].pos.copy().mult(predict));
			b -= predict * 100;
		} 
	}
}