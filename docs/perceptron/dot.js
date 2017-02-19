var dots = [];

var active_size = 20;
var inactive_size = 10;

var active_dot = -1;
var dragging = false;

function Dot(c, classification) {
	this.classification = classification;

	this.pos = createVector(random(-siz / 2, siz / 2), random(-siz / 2, siz / 2));
	this.col = c;
	this.active = false;
	this.current_size = inactive_size;

	this.show = function() {
		push();
		translate(siz / 2, siz / 2);

		stroke(0);
		strokeWeight(1);
		// Thicker, white stroke while dragging
		if (dragging && this.active) {
			stroke(255);
			strokeWeight(2);
		}

		fill(this.col);
		
		// Change dot size in relevant direction ...
		if (this.active) {
			this.current_size += 1;
		} else {
			this.current_size -= 1;
		}
		// ... but limit it
		this.current_size = constrain(this.current_size, inactive_size, active_size);

		ellipse(this.pos.x, this.pos.y, this.current_size, this.current_size);

		pop();
	}

	this.classify = function() {
		return Math.sign(w.dot(this.pos) + b);
	}
}

function set_active() {
	// Set all to inactive
	for (i = 0; i < dots.length; i++) {
		dots[i].active = false;
	}
	active_dot = -1;

	// Set the first dot (if any) close to the cursor to be active
	for (var i = 0; i < dots.length; i++) {	
		if (dist(mouseX - siz / 2, mouseY - siz / 2, dots[i].pos.x, dots[i].pos.y) <= inactive_size) {
			dots[i].active = true;
			active_dot = i;
			return undefined;
		}
	}
}

function mouseClicked() {
	if (active_dot === -1) {
		dragging = false;
	}
	dragging = !dragging;
}