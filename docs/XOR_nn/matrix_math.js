// Data points
const X = math.matrix([[1, 1, 1, 1], [0, 1, 0, 1], [0, 0, 1, 1]]);

// Corresponding XOR results
const Y = math.matrix([[0, 1, 1, 0]]);

// Weight/bias matrices
var Theta1, Theta2;

// Activations, activations with added row of ones, hypothesis
var A, A0, H;

// Errors in the hidden and output layers respectively
var Delta1, Delta2;

// Derivatives of the weight matrices
var derivatives1, derivatives2;

// Randomizer helper function

function rand(r) {
	return random(-r, r);
}

// Set random weights and biases

function init_weights(r) {
	Theta1 = math.matrix([[rand(r), rand(r), rand(r)], [rand(r), rand(r), rand(r)]]);
	Theta2 = math.matrix([[rand(r), rand(r), rand(r)]]);
}

// Sigmoid function

function sigmoid(z) {
	return 1 / (1 + math.exp(-z));
}

// Apply sigmoid to matrix

function sigma(m) {
	return m.map(function (value, index, matrix) {
		return sigmoid(value);
	})
}

// Forward propagation calculation

function forward_propagate() {
	A = sigma(math.multiply(Theta1, X));
	
	// Add row of ones - not the most beautiful way, I'm sure :-/
	A0 = math.matrix([[1, 1, 1, 1], A.toArray()[0], A.toArray()[1]]);

	H = sigma(math.multiply(Theta2, A0));
}

// Backpropagation calculation

function backpropagate() {

	// Calculate output layer errors and derivatives
	Delta2 = math.subtract(H, Y);
	derivatives2 = math.multiply(Delta2, math.transpose(A0));

	// Get Theta2 without bias and sigmoid derivaites
	var theta2 = Theta2.subset(math.index(0, [1, 2]));
	var sigma_derivative = math.dotMultiply(A, math.subtract(math.ones(2, 4), A));
	
	// Use to backpropagate to errors in hidden layer and calculate derivatives
	Delta1 = math.dotMultiply(math.multiply(math.transpose(theta2), Delta2), sigma_derivative);
	derivatives1 = math.multiply(Delta1, math.transpose(X));
}

// Update weights using gradient descent with learning rate alpha

function gradient_descent(alpha) {

	// Calculate derivatives
	forward_propagate();
	backpropagate();
	
	// Update
	Theta1 = math.subtract(Theta1, math.dotMultiply(alpha, derivatives1));
	Theta2 = math.subtract(Theta2, math.dotMultiply(alpha, derivatives2));
}

function predict(x1, x2) {
	// Single point version of forward propagation
	var x = math.matrix([[1], [x1], [x2]]);
	var a = sigma(math.multiply(Theta1, x));	
	var a0 = math.matrix([[1], a.toArray()[0], a.toArray()[1]]);
	var h = sigma(math.multiply(Theta2, a0));
	return h.toArray()[0];	
}