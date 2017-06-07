var lr_slider, sz_slider;

// Set currently active data point
var cx = 0;
var cy = 0;
var active = 0;

function setup() {
	var canvas = createCanvas(525, 250)
	select("#canvas").child(canvas);

	lr_slider = createSlider(0, 2, 1, 0.05);
	select("#learning_rate").child(lr_slider);

	sz_slider = createSlider(0.2, 5, 2, 0.1);
	select("#prediction_size").child(sz_slider);

	var reset_button = createButton("Reset");
	select("#reset").child(reset_button);	
	reset_button.mousePressed(initialize);

	initialize();
}

function draw() {
	background(60, 60, 70);
	gradient_descent(lr_slider.value());
	draw_network();
	draw_prediction();

}

function keyPressed() {

	// Change currently active data point
	if (key == "x" || key == "X") {
		cx = 1 - cx;
	}
	if (key == "y" || key == "Y") {
		cy = 1 - cy;
	}
	active = cx + 2 * cy;
}

function initialize() {
	init_weights(0.5);
}