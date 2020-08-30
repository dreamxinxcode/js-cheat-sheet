class Pizza {
	constructor(size, crust) {
		this.size = size,
		this.crust = crust,
		this.toppings = ['cheese'];
	}
	addTopping(topping) {
		this.toppings.push(topping);
	}
}

let pizza1 = new Pizza('large', 'thin');
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza('medium', 'thin');
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
