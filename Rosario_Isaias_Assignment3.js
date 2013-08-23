// alert("JavaScript works!");

// Isaias Rosario
// Term 1308
// SDI Project 3
// Code to Flowchart

// Start

// Global Variables
var monster = "Big Blue Monster",
	monsterPower = 100
	gunUsed = shootGun.selectGun.pistol
;
	

// Shoot Gun Object
var shootGun = {
	"safety": true,
	"power": [5, 10, 20],
	"powerBoost": 10,
	"selectGun": guns = {
		"pistol": "Pistol",
		"riffle": "Riffle",
		"shotgun": "Shotgun"
	}, // end guns object 
	"gunPower": function(){
	
		var gunShotPower = this.power[0]+this.powerBoost;
		
		return gunShotPower;
	
	}, // method accessor
	"setBoost": function(newBoost){
	
		this.powerBoost = newBoost;
	
	} // method mutator
	
}; // end shootGun Object


// Procedure

var pro = function (){

};

// Functions

// Main Code



// Console Log Output
console.log("The " + shootGun.selectGun.pistol + " has a total power boost of " + shootGun.gunPower());
console.log(shooterNames.shooters[0].shooterName);

// Finish

