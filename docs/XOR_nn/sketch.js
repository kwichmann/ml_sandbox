function setup() {
	createCanvas(525, 250)
	init_weights(0.5);
}

function draw() {
	background(200);
	draw_network();
	draw_prediction();
	gradient_descent(1);
}

function mouseClicked() {
	init_weights(0.5);
}