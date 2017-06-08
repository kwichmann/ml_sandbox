function weight_color(weight) {
	var amount = map(math.abs(weight), 0, 10, 255, 0);
	if (weight > 0) {
		stroke(255, amount, amount);
	} else {
		stroke(amount, amount, 255);
	}
}

function draw_network() {
	// Draw weights
	strokeWeight(8);
	
	weight_color(math.subset(Theta1, math.index(0, 1)));
	line(50, 100, 150, 100);

	weight_color(math.subset(Theta1, math.index(1, 1)));
	line(50, 100, 150, 200);

	weight_color(math.subset(Theta1, math.index(0, 2)));
	line(50, 200, 150, 100);

	weight_color(math.subset(Theta1, math.index(1, 2)));
	line(50, 200, 150, 200);

	weight_color(math.subset(Theta2, math.index(0, 1)));
	line(150, 100, 250, 150);

	weight_color(math.subset(Theta2, math.index(0, 2)));
	line(150, 200, 250, 150);

	// Draw biases
	strokeWeight(6);

	weight_color(math.subset(Theta1, math.index(0, 0)));
	line(150, 50, 150, 100);

	weight_color(math.subset(Theta1, math.index(1, 0)));
	line(150, 150, 150, 200);

	weight_color(math.subset(Theta2, math.index(0, 0)));
	line(250, 100, 250, 150);

	// Draw neurons
	strokeWeight(2);
	stroke(0, 255, 0);
	
	neuron_color(X.subset(math.index(1, active)));
	ellipse(50, 100, 40, 40);

	neuron_color(X.subset(math.index(2, active)));
	ellipse(50, 200, 40, 40);

	neuron_color(A.subset(math.index(0, active)));
	ellipse(150, 100, 40, 40);

	neuron_color(A.subset(math.index(1, active)));
	ellipse(150, 200, 40, 40);

	neuron_color(H.subset(math.index(0, active)));
	ellipse(250, 150, 40, 40);

	// Draw input coordinate names
	fill(255);
	stroke(51);
	textSize(24);
	text("x", 10, 105);
	text("y", 10, 205);
}

function neuron_color(c) {
	col = map(c, 0, 1, 255, 0);
	fill(col);
}
