const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function getNumber(prompt, callback) {
	rl.question(prompt, (input) => {
		const number = parseFloat(input);
		if (isNaN(number)) {
			console.log('Please enter a valid number.');
			getNumber(prompt, callback);
		} else {
			callback(number);
		}
	});
}

function calculator() {
	getNumber('Enter the first number: ', (num1) => {
		getNumber('Enter the second number: ', (num2) => {
			rl.question('Enter the operator (+, -, *, /): ', (operator) => {
				let result;
				switch (operator) {
					case '+':
						result = num1 + num2;
						break;
					case '-':
						result = num1 - num2;
						break;
					case '*':
						result = num1 * num2;
						break;
					case '/':
						result = num1 / num2;
						break;
					default:
						console.log('Invalid operator.');
						calculator();
						return;
				}
				console.log(`Result: ${result}`);
				rl.close();
			});
		});
	});
}

calculator();
