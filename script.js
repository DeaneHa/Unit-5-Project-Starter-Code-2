let submitButton= document.querySelector(".submitButton");
 
submitButton.onclick = function() {
let input1= document.querySelector(".input1").value;
let input2= document.querySelector(".input2").value;

console.log(input1);
console.log(input2);


if (input1==="Yes" && input2==="Correct"){
//document.querySelector(".pageOne").style.display="none";
  document.querySelector(".result").innerHTML="You picked " + input1 + " and " + input2 + ". You are..." + " I'd say congratulations on getting Zeus but then again the guy isn't all that good.";
document.querySelector(".resultImage").src="https://www.giantbomb.com/a/uploads/scale_small/1/17172/1443469-zeus_by_thegryph.jpg";
}

else if (input1==="No" && input2==="Correct"){
// document.querySelector(".pageOne").style.display="none";
  document.querySelector(".result").innerHTML="You picked " + input1 + " and " + input2 + ". You are..." + " Hera, the queen of all gods and mother of marriage, welcome! Do make sure to keep a mussle on that temper of yours!";
document.querySelector(".resultImage").src="https://i.pinimg.com/564x/a4/ac/b7/a4acb75918a5e2b965986b6a4222dd8c.jpg";
}

else if (input1==="Yes" && input2==="Incorrect"){
 // document.querySelector(".pageOne").style.display="none";
  document.querySelector(".result").innerHTML="You picked " + input1 + " and " + input2 + ". You are..." + " The beloved and beautiful Pysche, the goddess of Soul who was betrayed by her lover.";
  document.querySelector(".resultImage").src="https://greekgodsandgoddesses.net/wp-content/uploads/2022/01/psyche-goddess-of-the-soul.jpg";
}

else if (input1==="No" && input2==="Incorrect"){
// document.querySelector(".pageOne").style.display="none";
  document.querySelector(".result").innerHTML= "You picked " + input1 + " and " + input2 + ". You are..." + " The mighty warrior, Achilles!";
  document.querySelector(".resultImage").src="https://i0.wp.com/interestingliterature.com/wp-content/uploads/2021/01/Achilles.jpg?resize=213%2C300&ssl=1"
}

  else {
    document.querySelector(".result").innerHTML="oops, try again!"
  }

};


// Store each input as a variable (there should be two input boxes - one for each answer) [ ]
// 2. Store the button as a variable (there should be ONE button) [ ]
// 3. Create a click handler [ ]
// 4. Use the .value property to store user input [ ]
// 5. Add console.log to test if the code is being stored [ ]
// 6. Write a conditional statement with else-if to include all 4 possible results [ ]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]