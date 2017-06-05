function calc_means() {
	var x_acc = 0;
	var y_acc = 0;

	for (var i = 0; i < num_points; i++) {
		x_acc += dots[i].pos.x;
		y_acc += dots[i].pos.y;
	}

	return [x_acc / num_points, y_acc / num_points]
}
