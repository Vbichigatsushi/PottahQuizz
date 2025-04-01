class CQuestions {

	constructor(character) {
	    this.character = character;
	}

	isWizard() {
		return this.character.wizard ? "Your character is a wizard" : "Your character isn't a wizard";
	}

	whatSpecies() {
		return this.character.species != "" ? "Your character is a(n) " + this.character.species : -1
	}

	whichHouse(){
		return this.character.house != "" ? "Your character is from the " + this.character.house + " house" : -1
	}

	isAlive(){
		return this.character.alive ? "Your character is still alive" : "Your character is dead";
	}
}