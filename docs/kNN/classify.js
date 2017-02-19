function predict() {
	loadPixels();

	for (px = 0; px < width; px++) {
		for (py = 0; py < height; py++) {
			var count = k_closest(px, py);
			if (count > 0) {
				var pix_index = (px + width * py) * 4;
				pixels[pix_index] = 200;
				pixels[pix_index + 1] = 200;
				pixels[pix_index + 2] = 255;
				pixels[pix_index + 3] = 255;
			}
			if (count < 0) {
				var pix_index = (px + width * py) * 4;
				pixels[pix_index] = 255;
				pixels[pix_index + 1] = 200;
				pixels[pix_index + 2] = 200;
				pixels[pix_index + 3] = 255;	
			}
		}
	}

	updatePixels();
}

function k_closest(x, y) {
	var dists = [];
	for (var i = 0; i < dots.length; i++) {
		var dx = (x - dots[i].pos.x);
		var dy = (y - dots[i].pos.y);
		var d2 = dx * dx + dy * dy;
		dists.push([d2, dots[i].classification]);
	}

	dists.sort(function(a, b) {return a[0] - b[0];});

	var sum = 0;
	for (var i = 0; i < k; i++) {
		sum += dists[i][1];
	}

	return sum;
}