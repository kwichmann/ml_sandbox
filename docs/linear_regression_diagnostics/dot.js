var dots = [];

var active_size = 20;
var inactive_size = 10;

var active_dot = -1;
var dragging = false;

function Dot(c) {
	this.pos = main.createVector(main.random(xrange[0], xrange[1]), main.random(yrange[0], yrange[1]));
	this.col = c;
	this.active = false;
	this.current_size = inactive_size;

	this.show = function() {
		main.stroke(0);
		main.strokeWeight(1);
		// Thicker, white stroke while dragging
		if (dragging && this.active) {
			main.stroke(255);
			main.strokeWeight(2);
		}

		main.fill(this.col);
		
		// Change dot size in relevant direction ...
		if (this.active) {
			this.current_size += 1;
		} else {
			this.current_size -= 1;
		}
		// ... but limit it
		this.current_size = main.constrain(this.current_size, inactive_size, active_size);

		main.ellipse(xscale(main, this.pos.x), yscale(main, this.pos.y), this.current_size, this.current_size);
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
		if (main.dist(main.mouseX, main.mouseY, xscale(main, dots[i].pos.x), yscale(main, dots[i].pos.y)) <= inactive_size) {
			dots[i].active = true;
			active_dot = i;
			return undefined;
		}
	}
}