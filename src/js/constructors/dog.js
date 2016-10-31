function Dog (choices) {

	var choice = choices || {};	
	this.status = "normal";
	this.color = "black";
	
	
if (choice.hungry === undefined) {
	this.hungry = true;
} else {
	this.hungry = choice.hungry;
	}
	
}

export { Dog };
