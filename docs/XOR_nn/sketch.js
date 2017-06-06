var lr_slider, sz_slider;

function setup() {
	var canvas = createCanvas(525, 250)
	select("#canvas").child(canvas);

	lr_slider = createSlider(0, 2, 1, 0.05);
	select("#learning_rate").child(lr_slider);

	sz_slider = createSlider(0.2, 5, 2, 0.1);
	select("#prediction_size").child(sz_slider);

	var reset_button = createButton("Reset");
	reset_button.mousePressed(initialize);

	initialize();
}

function draw() {
	background(200);
	draw_network();
	draw_prediction();
	gradient_descent(lr_slider.value());
}

function initialize() {
	init_weights(0.5);
}