// alert("JavaScript works!");

// Isaias Rosario
// Term 1308
// SDI Project 3
// Code to Flowchart

// Start

// Global Variables
var monster = "Big Blue Monster",
	monsterHealth = 100
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
	
		var gunShotPower = this.power[0] + this.powerBoost;
		
		return gunShotPower;
	
	}, // method accessor
	"setBoost": function(newBoost){
	
		this.powerBoost = newBoost;
	
	} // method mutator
	
}; // end shootGun Object

// Safety on Procedure
var isSafetyOn = function (safety){

	if(safety === true){
		if(shootGun.selectGun.pistol === "Pistol"){
			console.log("The safety is on for the " + shootGun.selectGun.pistol +
						" lets turn it off and start shooting.");
		} else {
			console.log("This is not a " + shootGun.selectGun.pistol + ".");
		};
	} else {
		console.log("The safety is off on this " + shootGun.selectGun.pistol +
					" lets start shooting.");
	};

};

// String Function
var shooterGunUsed = function(shooter1, shooter2){
	console.log(shooter1 + " and " + shooter2 + " both chose a " +
				shootGun.selectGun.pistol + " to shoot with." );
				
	return shooter1;
}; 

// Boolean Function
var monsterChase = function(tof){
	console.log("Is it really " + tof + " that a " + monster + " is chasing us!");
	
	return tof;
};

// Main Code

var isMonsterChase = monsterChase(true);
 
console.log("Ahh its " + isMonsterChase + " there is a " + monster +
			" out here lets find a gun to protect ourselves!");

var shooterName = shooterGunUsed(shooterNames.shooters[0].shooterName,
				shooterNames.shooters[1].shooterName); // returns string

isSafetyOn(shootGun.safety);

console.log(shooterName + " noticed that the " + shootGun.selectGun.pistol +
			" has a total power boost of " + shootGun.gunPower() + ".");

// Finish

