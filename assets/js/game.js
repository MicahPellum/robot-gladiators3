var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//logging multiple values at once
console.log(playerName, playerAttack, playerHealth, playerMoney);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

var fight = function(enemyName) {
    while(enemyHealth > 0) {

    for(var i =0; i < enemyNames.length; i++) {
        debugger;
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
    }

    // if a player choose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
        );


  // check enemy's health
  if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// remove player's health by subtractiong the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
enemyName + " attacked" + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
);

// check players health
if (playerHealth <= 0) {
    window.alert(player + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
} 
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    } 
// if no (false), ask question again by running fight () again
else {
    fight ();
    }

}
}
}
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }

//fight ();

// Game States//
// "WIN" - Player robot has defeated all enemy-robots
//  *  Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" -  Player robot's health is zero or less
