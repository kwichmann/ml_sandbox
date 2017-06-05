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

	weight_color(math.subset(Theta1, math.index(0, 2)));
	line(50, 100, 150, 200);

	weight_color(math.subset(Theta1, math.index(1, 1)));
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
	stroke(0);
	fill(255);

	ellipse(50, 100, 40, 40);
	ellipse(50, 200, 40, 40);
	ellipse(150, 100, 40, 40);
	ellipse(150, 200, 40, 40);
	ellipse(250, 150, 40, 40);

}
