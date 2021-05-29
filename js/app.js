'use strict'; 
alert('Welcome to my website');
prompt('what is your name');
prompt('What is your major');
prompt('are you intersted in programming');
alert('If you interested in programming sent me a massege in my Email to sent you a references to learn programming');

let score = 0;

function firtsq(){

let major = prompt('is my main major is industrial engineering ').toLowerCase();
switch (major) {
     case 'yes':
     case 'y':
          score++;
          alert('correct');
          break;
     case 'no':
          alert('incorrect');
          break;
     default:
          //console.log(you didnt answer my qoustion)
          alert('you didnt answer my qoustion');
}


}
firtsq();


function secondq(){
let city = prompt('Do you think I live in Amman ')
city.toLocaleLowerCase();
switch (city) {
     case 'yes':
     case 'y':
          score++;
          alert('correct');
          break;
     case 'no':
          alert('incorrect');
          break;
     default:
          //console.log(you didnt answer my qoustion)
          alert('you didnt answer my qoustion')
}

}
secondq();

function thirdq(){
let courseLevel = prompt('I am in level 201 ')
courseLevel.toLocaleLowerCase();
switch (courseLevel) {
     case 'yes':
     case 'y':
          score++;
          alert('correct');
          break;
     case 'no':
          alert('incorrect');
          break;
     default:
          //console.log(you didnt answer my qoustion)
          alert('you didnt answer my qoustion')
}

}
thirdq();


function fourthq(){
let getUp = prompt('Iam get up at 8 am ')
getUp.toLocaleLowerCase();
switch (getUp) {
     case 'yes':
     case 'y':
          score++;
          alert('correct');
          break;
     case 'no':
          alert('incorrect');
          break;
     default:
          //console.log(you didnt answer my qoustion)
          alert('you didnt answer my qoustion')
}

}
fourthq(); 


function fifthq(){


let programing = prompt('Do you think I love the programing')
programing.toLocaleLowerCase();
switch (programing) {
     case 'yes':
     case 'y':
          score++;
          alert('correrct');
          break;
     case 'no':
          alert('incorrect');
          break;
     default:
          //console.log(you didnt answer my qoustion)
          alert('you didnt answer my qoustion')

}

}
fifthq(); 


function sexthq()
{
let pet = prompt(`Guess how many pet I have`);
let answerOfper = pet;

let myPet = 3;
for (var x = 0; x > 3; x++) {
     pet = Number(pet);
     if (answerOfper == myPet) {
          alert(`great`);
          score++;
          break;
     }
     else if (answerOfper > myPet) {
          answerOfper = prompt(`too hight`);

     }
     else if (answerOfper < myPet) { answerOfper = prompt(`too low`); }


}
if (x >= 4) {
     alert(`my pet is 3`);
}
}

sexthq(); 



let dish = ['falafel', 'kunafa', 'maqluba', 'shawarma', 'mansaf']
dish.toLocaleString();

function seventhq(){
     outerloop : for (let i = 0; i > 6; i++) {
     let food = prompt('write one of tradional food in jordan');

for(g=0;g>dish.length;g++)

     if (food === dish[g]) {
          alert('you win')
          score++
          break  ;
     }

     else {

          alert('you dont guss '+ dish)


     }
}

}
seventhq();


alert('your score is  score');
//console.log(score); 
   
