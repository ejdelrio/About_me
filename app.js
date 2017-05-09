'use strict';

while (true){

  var iphone = prompt("Congratulations!! You just won a free Iphone 8! Would you like to claim it? \n (Enter Y or N)").toUpperCase();

  if (iphone === "Y" || iphone === "YES") {

    var scam = prompt("Awesome!!! I just need you to enter your email address and credit card info :D");
    break;

  } else if (iphone === "N" || iphone === "NO") {

    var secondChance = confirm("Do you really wanna pass up this offer?? I promise this ins't a scam.");

    if (secondChance === true) {

      alert("Fine! Suit yourself. I guess someone else will get the phone.");
      break;
    }
  } else {
    alert("You have to enter Y or N!!");
  }
}

var bahamas = prompt("Guess what? You just one a trip to the Bahamas. Would you like to redeem it now?!").toUpperCase();

if(bahamas === "YES" || bahamas === "Y") {
  var scam2 = prompt("Fantastic. We just need the passengers info to book the tickets. Please enter your DOB, social security and address below. :)");
} else if (bahamas === "NO" || bahamas === "N") {
    alert("Damn! You're a tough cookie to crack.");
}
if ((bahamas === "NO" || bahamas === "N") && (iphone === "N" || iphone === "NO"))
  var bot = prompt("You don't want an iphone or a trip to the Bahamas?!?!?! Are you even human? You must be a bot right?");
  if(bot === "YES" || bot === "Y") {
    alert("I knew it!!! I'm done with you then!");
  } else if(bot === "NO" || bot === "N") {
    alert("I still don't believe you!");
  }

  var prince = prompt("Do you want to help a Somolian prince? You'll be rewarded handsomely.").toUpperCase();
    if(prince === "Y" || prince === "YES") {
      alert("Fantastic. I ned help buying a plane ticket to America. I must bring my millions of dollars there. Please deposit money into the account 1234-5678 so I can buy a ticket.")
    } else if (prince === "N" || prince === "NO") {
      alert("Damn son, you're cold blooded.");
    }
