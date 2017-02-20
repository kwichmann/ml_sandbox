var dots = [];

var active_size = 20;
var inactive_size = 10;

var active_dot = -1;
var dragging = false;

function Dot(c) {
	this.pos = createVector(random(xrange[0], xrange[1]), random(yrange[0], yrange[1]));
	this.col = c;
	this.active = false;
	this.current_size = inactive_size;

	this.show = function() {
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

		ellipse(xscale(this.pos.x), yscale(this.pos.y), this.current_size, this.current_size);
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
		if (dist(mouseX, mouseY, xscale(dots[i].pos.x), yscale(dots[i].pos.y)) <= scal) {
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