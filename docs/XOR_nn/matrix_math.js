const X = math.matrix([	[1, 1, 1, 1],
						[0, 1, 0, 1],
						[0, 0, 1, 1] ]);

const Y = math.matrix([[0, 1, 1, 0]]);

var Theta1, Theta2;
var A, A0, H;

var Delta1, Delta2;

var derivatives1, derivatives2;

// Randomizer helper function

function rand(r) {
	return random(-r, r);
}

// Set random weights and biases

function init_weights(r) {
	Theta1 = math.matrix([  [rand(r), rand(r), rand(r)],
							[rand(r), rand(r), rand(r)] ]);

	Theta2 = math.matrix([[rand(r), rand(r), rand(r)]]);
}

// Apply sigmoid to matrix

function sigma(m) {
	return m.map(function (value, index, matrix) {
		return 1 / (1 + math.exp(-value));
	})
}

// Forward propagation calculation

function forward_propagate() {
	A = sigma(math.multiply(Theta1, X));
	
	// Add row of ones - not the most beautiful way, I'm sure :-/
	A0 = math.matrix([[1, 1, 1, 1], A.toArray()[0], A.toArray()[0]]);

	H = sigma(math.multiply(Theta2, A0));
}

function backpropagate() {
	Delta2 = math.subtract(H, Y);
	derivatives1 = math.multiply(Delta2, math.transpose(A0));

	var theta2 = Theta2.subset(math.index(0, [1, 2]));
	var sigma_derivative = math.dotMultiply(A, math.subtract(math.ones(2, 4), A));
	
	Delta1 = math.dotMultiply(math.multiply(math.transpose(theta2), Delta2), sigma_derivative);
}

function gradient_descent(alpha) {
	forward_propagate();
	backpropagate();

	Theta1 = math.subtract(Theta1, math.dotMultiply(alpha, derivatives1));
	Theta2 = math.subtract(Theta2, math.dotMultiply(alpha, derivatives2));
}