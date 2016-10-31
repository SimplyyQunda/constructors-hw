function Person (choices) {
	
	this.pet = function(dog){
		dog.status = 'happy';
	};
	this.feed = function(dog){
		dog.hungry = false;
	};

	var choice = choices || {};	

if (choice.cool === undefined) {
	this.cool= false;
} else {
	this.cool = choice.cool;
	}
	
};
	




export { Person };
