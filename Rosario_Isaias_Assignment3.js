// alert("JavaScript works!");

// Isaias Rosario
// Term 1308
// SDI Project 3
// Code to Flowchart

// Start

// Global Variables
var monster = "Big Blue Monster",
	monsterHealth = 100,
	hideArr = ["Car", "Bus", "Truck"]
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
	var chaseTxt =  " is chasing us!"
	console.log("Is it really " + tof + " that a " + monster + chaseTxt);
	
	return tof;
};

// Array Function
var hideOptions = function (arrArg){
	var arr = arrArg;
	for(i = 0; i < 2; i++){
		console.log("We can hide behind the " + arr[i] + " or, ");
		for(ii = 0; ii < 1; ii++){
			console.log("Is it really safe to take cover here?");
		};
	};
	console.log("We can hide behind the " + arr[2] + ".");
	console.log("Ok this " + arr[2] + " looks like a safe cover spot.")
	
	return arr;
};

// Object Function
var gunChoices = function (obj){
	console.log("We have 3 guns to choose from " + obj.pistol + ", " +
				obj.riffle + ", and the " + obj.shotgun + ".");
				
	return obj;
};

// Main Code

var isMonsterChase = monsterChase(true); // returns boolean value
 
console.log("Ahh its " + isMonsterChase + " there is a " + monster +
			" out here lets find a gun to protect ourselves!");

var allGuns = gunChoices(shootGun.selectGun) // return object value

var shooterName = shooterGunUsed(shooterNames.shooters[0].shooterName,
				shooterNames.shooters[1].shooterName); // returns string value

isSafetyOn(shootGun.safety);

console.log("Where can we hide?");

var weHide = hideOptions(hideArr); // returns array value

console.log

console.log(shooterName + " noticed that the " + shootGun.selectGun.pistol +
			" has a total power boost of " + shootGun.gunPower() + ".");

// Finish

