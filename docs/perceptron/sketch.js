var num_points = 5;
var siz = 500;
var w, b;

function setup() {
	var canvas_div = select("#canvas")
	var canvas = createCanvas(siz, siz);
	canvas_div.child(canvas);
	
	// Randomly initialize weights and bias
	w = createVector(random(siz) - siz / 2, random(siz) - siz / 2);
	b = random(-siz, siz);

	// Generate dots
	for (var i = 0; i < num_points; i++) {
		dot1 = new Dot(color(0, 0, 255), 1);
		dots.push(dot1);
		dot2 = new Dot(color(255, 0, 0), -1);
		dots.push(dot2);
	}
}

	function draw() {
	background(200, 200, 255);	// positive - blue
	decision_boundary();		// negative - red

	if (dragging && active_dot !== -1) {
		dots[active_dot].pos.x = mouseX - siz / 2;
		dots[active_dot].pos.y = mouseY - siz / 2;
	} else {
		set_active();
	}
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].show();
	}

	if (training) {
		train();
	}
}

function decision_boundary() {
	// Set center as origin 
	push();
	translate(siz / 2, siz / 2);
	
	// Draw negative region
	noStroke();
	fill(255, 200, 200);
	beginShape();
	// Check for vertical line
	if (w.y === 0) {	
		vertex(-b / w.x, -siz / 2);
		vertex(-b / w.x, siz / 2);
	} else {
		var left_y = -(b + w.x * (-siz / 2)) / w.y;
		var right_y = -(b + w.x * (siz / 2)) / w.y;
		vertex(-siz / 2, left_y);
		vertex(siz / 2, right_y);
	}
	// Which side to color?
	if (w.x < 0) {
		vertex(width + siz / 2, -siz / 2);
		vertex(-siz / 2 - 1, -siz / 2);
	} else {
		vertex(width + siz / 2, siz / 2);
		vertex(-siz / 2 - 1, siz / 2);
	}
	endShape(CLOSE);
		// Boundary line
	stroke(0);
	strokeWeight(4);
	// Check for vertical line
	if (w.y === 0) {
		line(-b / w.x, -siz / 2, -b / w.x, siz / 2);
	} else {
		line(-siz / 2, left_y, siz / 2, right_y);
	}

	pop();
}