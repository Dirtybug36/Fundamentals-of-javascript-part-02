"use strict"; //if we dont use the strict mode,the console won't show us the exact bug
/*let hasDriverLiscence = false;
const passTest = true;
if (passTest) hasdriverLiscence = true;
if (hasDriverLiscence) console.log('yeah!!!');


function logger() {
    console.log("my name is bimarsha");
}
//calling/running/invoking function
logger();
logger();
logger();
logger();

function cockTail(whiskey, vodka) {
    const glasS = `one cup of cocktail has ${whiskey} ml of whiskey and ${vodka} ml of vodka`;
    //do you know what i did mistake for half hour?? i used ´´ instead of `` fuck!!!
    return glasS;
}
const coctail = cockTail(5, 10);
console.log(coctail);
const mockTail = cockTail(10, 10);
console.log(mockTail);


//function declaration
function ageDiff(birthYear) {
    return 2022 - birthYear;
}
const year = ageDiff(1996);


//almost both are same


//function expression
const ageDiff2 = function ageDiff(birthYear) {
    return 2022 - birthYear;
}
const year1 = ageDiff2(1998);
console.log(year, year1);
//function expression is better to use that declaration because we can optimize our code in more structured way

//Arrow function

const calcAge = birthYear => 2022 - birthYear;
const age1 = calcAge(1996);
console.log(age1);
//for a one line code we dont have to use return value but..
//lets calculate how much time i have for the retirement
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 70 - age;
    return `${firstName} has ${retirement} years for retirement`;
    //we can only omit  return if we only have one line of code

}
console.log(yearUntilRetirement(1996, "bimarsha"));
console.log(yearUntilRetirement(1992, "bikram"));
console.log(yearUntilRetirement(1985, "binod"));

//function calling another function

function cutFruitPieces(shake) {
    return shake * 2;
}
function milkShake(banana, watermelon) {
    const bananaPieces = cutFruitPieces(banana);
    const watermelonPieces = cutFruitPieces(watermelon);
    const glassOfShake = `milkshake of ${bananaPieces} bananas and ${watermelonPieces} watermelon.`
    return glassOfShake;
}
console.log(milkShake(2, 1));



////////////////////////////////////////////////////
CODING CHALLANGE 5
//VERY VERY IMPORTANT
back to the two gymnastic teams, the Dolphines and the
Koalas! Therer is a new gymnastics discipline, which works
differently.

Each team complete 3 Times and then the avereage of the
3 scores is calculated(so one average score per team).

A team ONLY wins if it has at least DOUBLE the average
score of the other team.Otherwise, no team wins!!!

1. Create an arrow function "calcAverage" to
calculate the average of 3 scores.

2. Use the function to calculate the average
for the both teams

3.Create a function "checkWinner" that takes the
average score of each team as Parameters
("avgDolphins" and "avgKoalas"), and then logs the winner
to the console, together with the victory points,
    according to the rule above.
        Example: "koalas win (30 vs. 13)".

4. Use the "chechWinner" funtion to determine the
winner for both DATA 1 and DATA "2"

5.Ignore draws this Time.

Test DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Test data 2: Dolphines score 85, 54 and 41. koalas score 23, 34 and 27


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(1, 2, 3));

//TEST DATA 1
let averageDholphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(averageDholphins, averageKoalas);


let winners = function (averageDholphins, averageKoalas) {
    if (averageDholphins >= 2 * averageKoalas) {
        console.log(`Dholphins win ${averageDholphins} vs ${averageKoalas}`)
    }
    else if (averageKoalas >= 2 * averageDholphins) {
        console.log(`Koalas win ${averageKoalas} vs ${averageDholphins}`)
    }
    else {
        console.log("NO one wins!!!!")
    }
}
winners(averageDholphins, averageKoalas);
winners(100, 500);
//we dont use let to override the previous values
averageDholphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(averageDholphins, averageKoalas);
winners = function (averageDholphins, averageKoalas) {
    if (averageDholphins >= 2 * averageKoalas) {
        console.log(`Dholphins win ${averageDholphins} vs ${averageKoalas}`)
    }
    else if (averageKoalas >= 2 * averageDholphins) {
        console.log(`Koalas win ${averageKoalas} vs ${averageDholphins}`)
    }
    else {
        console.log("NO one wins!!!!")
    }
}
winners(averageDholphins, averageKoalas);


//ARRAYS

const family0 = "baba";
const family1 = "mummy";
const family2 = "binod";
const family3 = "bikram";


const family = ['baba', 'mummy', 'binod', 'bikram'];
console.log(family);

const dob = new Array(1996, 1994, 1993);

console.log(family[1]);
console.log(family[family.length - 2]);
family[2] = 'bimarsha';
console.log(family);

const bimarsha = ['bimarsha', 'basyal', 2022 - 1996, 'sushiman', family];
console.log(bimarsha);

//Exercise
const calcAge = function (birthyear) {
    return 2022 - birthyear;
}
const years = [1996, 1995, 1992, 1980];
//console.log(calcAge(years));
//it shows NaN because we tried to
//subtract array with the number
const age1 = calcAge(years[1]);
const age2 = calcAge(years[0]);
const age3 = calcAge(years[3]);
console.log(age1, age2, age3)

const ages = [calcAge(years[1]), calcAge(years[0]), calcAge(years[3])];

const family = ['baba', 'mummy', 'binod', 'bikram'];
//add elements
family.push('agasthye'); //adds at the last
console.log(family);
family.unshift('bimarsha');
console.log(family);

//remove element
family.pop(); //last
console.log(family);
family.shift(); //first
console.log(family);

console.log(family.indexOf('binod')); //shows the position
console.log(family.indexOf('bikram')); //shows the position

console.log(family.includes('binod'));//shows boolean i.e true/false

if (family.includes('baba')) {
    console.log('you have a family called baba')
}

////////////////////////////////////
//CODING CHALLANGE 6 (ARRAYS)
///////////////////////////////////




Steven is still building his tip calculator, using the same
rule as before: tip 15 % of the bill.if the bill value is
between 50 and 300 ans if the value is different the tip
is 20 %.

1.write a function 'calcTip' that takes any bill value
as an input and returns the corresponding tip,
calculated based on the rules above(you can check out
the code from first tip calculator  challange if you
need to). Use the function type you like the Most.
Test the function using a bill value of 100.

2.and now lets use the arrays! so create an array
'bills' containing the test data below.

3.Create an array 'tips' containing the tip value for
each bill,calculated from the function you created before.

4.BONUS:create an array 'total'containing the
total value,so the bill + tip.BONUS

TEST DATA:125,555 and 44

//so what is happing here??
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
//paila chae bill vanni function assign garyo jasle chae tips calculate garxa..50 ra 300 ko bich ma xa vane 15% natra 20%
//
const bills = [125, 555, 44]//yo chae total hamilae diyeko bills aru vayo

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// calcTip(bills) is direct k garexa vane,harek bill ko tips calculate garexa
//yesko satto individually ni garna milxa tesko laagi calcTips(bill),bill ko satta ma 125,555,44 rakhna milxa,tara yaha direct array funct use garexa

console.log(bills, tips);
//[125, 555, 44] (3) [18.75, 111, 8.8]

/////////////////////////
// OBJECT
///////////////////////

const bimarsha = {
    firstName: 'Bimarsha',
    lastName: 'Basyal',
    age: 2022 - 1996,
    job: 'sushiman',
    family: ['baba', 'mummy', 'binod', 'bikram']
};
console.log(bimarsha);
//to retrieve the specific data we can use~
console.log(bimarsha.age);
//or
console.log(bimarsha['job']);
//we can any of the two to obtain the information according to the situation

const nameKey = 'Name'; // common from my first and last name
console.log(bimarsha['first' + nameKey]);
console.log(bimarsha['last' + nameKey]);
//we cannot use bimarsha.'first'+nameKey
//ok lets suppose someuser want to know my some information
//prompt to ask a question
const question = prompt('what do you want to know about me????? you can choose between my firstName,lastName,age,job,family');
console.log(bimarsha[question]);
//the input that we put eg job will be searched from the bimarsha

if (bimarsha[question]) {
    console.log(bimarsha[question]);
}
else {
    console.log('I dont know!!!!! You only can choose between my firstName,lastName,age,job,family')
}
//if i want to add more information then
bimarsha.location = 'portugal'
//OR
bimarsha['Gmail'] = 'vimarsha.buddy@gmail.com'
console.log(bimarsha)

//CHALLANGE
//"bimarsha has 4 members in the family and his best one is mummy"
console.log(`${bimarsha.firstName} has ${bimarsha.family.length} members in the family and his best one is ${bimarsha.family[1]}`);


const bimarsha = {
    firstName: 'Bimarsha',
    lastName: 'Basyal',
    birthYear: 1996,
    job: 'sushiman',
    family: ['baba', 'mummy', 'binod', 'bikram'],
    hasDriverLiscence: false,

    //calcAge: function (birthYear) {
    //  return 2022 - birthYear;
    // calcAge: function () {
    //   console.log(this);
    // return 2022 - this.birthYear;

    //this value is calling bimarsha so we can write this instead of bimarsha
    //we use this because even if we have to change the name(bimarsha) we dont
    // have to change in all places. DRY formula
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} years old ${this.job} ,he has  ${this.family.length} family members and he have ${this.hasDriverLiscence ? 'a' : 'no'} driver liscence`;
    }
};

console.log(bimarsha.calcAge());//we only need to calculate this once
//if we need to copy the same multiple times then we can use the below method
console.log(bimarsha.age);
console.log(bimarsha.age);
console.log(bimarsha.age);

/////////////////
//CHALLANGE
/////////////////
//"Bimarsha is a 26 year old sushiman and he has no driver's liscence"
console.log(bimarsha.getSummary());//() is very important to return the value



/////////////////////////////////////////////////////
//CHALLANGE 7 (OBJECTS)
////////////////////////////////////////////////////


Lets go back to the Mark and John comparing their BMIs!
This time, lets use objects to implement the calculation.
    Remember: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1.
For each of them, create an object with properties for their
full name, mass and height(marl miller and john smith)

2.
Create a 'calcBMI' method on each object to calculate the
BMI(the same method on both objects).Store the BMI value to a
property, and also return it from the method.BMI
3.
Log to the console who has the higher BMI, together with full
name and the respective BMI,
    Example: "John's Bmi (28.3)is higher than Mark's(23.9)!!! "

Test Data: Marks weights 78kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

*/

/*
const mark = {
    firstName: 'Mark',
    lastName: 'miller',
    markHeight: 1.69,
    markWeight: 78,
    calcBMI: function () {
        this.mBmi = this.markWeight / this.markHeight ** 2
        return this.mBmi;
    }
}
mark.calcBMI();//this bracket is very impotant
console.log(mark.mBmi);//27.309

const john = {
    firstName: 'John',
    lastName: 'smith',
    johnHeight: 1.95,
    johnWeight: 92,
    calcBMI: function () {
        this.jBmi = this.johnWeight / this.johnHeight ** 2
        return this.jBmi;
    }
}
john.calcBMI();
console.log(john.jBmi);//24.19

if (mark.mBmi > john.jBmi) {
    console.log(`${mark.firstName}'s ${mark.mBmi} BMI is greater than ${john.firstName}`)
}
else {
    console.log(`${john.firstName} 's ${john.jBmi} BMI is greater than ${mark.firstName}`)
}


//Teachers Method
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 93,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);//dnt use this here
//we use mark.bmi because we used this.bmi to calculate the BMI and we used mark.bmi instead of this.bmi
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than${john.fullName}'s BMI`)

}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI `)
}
*/
//////////////////////////////////////////
//loop
/////////////////////////////////////////

//console.log('Lifting weight repition 1');
//console.log('Lifting weight repition 2');
//console.log('Lifting weight repition 3');
//console.log('Lifting weight repition 4');
//console.log('Lifting weight repition 5');
//console.log('Lifting weight repition 6');
//console.log('Lifting weight repition 7');
//console.log('Lifting weight repition 8');
//console.log('Lifting weight repition 9');
//console.log('Lifting weight repition 10');

//for loops keeps repitiong until the statement is true
//for (let rep = 1; rep <= 10; rep++) {//rep++ is very imp
//  console.log(`Lifting weight repition ${rep}`);
//}
/*
const bimarsha = [
    'Bimarsha',
    'Basyal',
    1996,
    'sushiman',
    ['baba', 'mummy', 'binod', 'bikram']
]
//if we want to loop from backwards then
for (let i = bimarsha.length - 1; i >= 0; i--) {
    console.log(bimarsha[i]);
}
 
for (let exercise = 1; exercise < 5; exercise++) {
    console.log(`-------Starting exersice number ${exercise}`)
    for (let rep = 1; rep < 9; rep++) {
        console.log(`Exercise: ${exercise} Lifting weight repitition ${rep}`)
    }
}
const year = [1996, 1994, 1990, 1985];
const age = [];//without this error shows age is not defined
for (let i = 0; i < year.length; i++) {
    age.push(2022 - year[i]);//dont forget to put i
}
console.log(age);

//continue and break 
const bimarsha = [
    'Bimarsha',
    'Basyal',
    1996,
    'sushiman',
    ['baba', 'mummy', 'binod', 'bikram']]
for (let i = 0; i < bimarsha.length; i++) {
    if (typeof bimarsha[i] !== 'string') continue; //continue will override the numbers and arrays which results to skip them
    console.log(bimarsha[i], typeof bimarsha[i]);
    //if we want to show the strings only..it doesnt show any boolean, numbers or array
    //Bimarsha string,Basyal string,sushiman string
}
//while loop
let rep = 1;
while (rep <= 10) {
    console.log('while:lifting weights repitition');
    rep++;//if you dont write this then your browser gonna CRASH!!!!!
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}



////////////////////////////////////////////////////
//CHALLANGE 8 LOOP
///////////////////////////////////////////////////
Lets improve stevenns tip calculator even more, this time using loops!!!

1.
Create an array 'bills' containing all 10 test bill values

2.
Create an empty arrays for the tips and the totals('tips and totals')

3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate tips and
total values('bill+tips') for every bill value in the bills array.Use a for loop to 
perform the 10 calculaiton


TEst data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

hint: call calctip in the loop and use the push method to add values to the 
tips and total arrays!!!!

*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20
}
///////MY ANSWER/////////////
const tip = [
    calcTip(bills[0])
    , calcTip(bills[1])
    , calcTip(bills[2])
    , calcTip(bills[3])
    , calcTip(bills[4])
    , calcTip(bills[5])
    , calcTip(bills[6])
    , calcTip(bills[7])
    , calcTip(bills[8])
    , calcTip(bills[9])
];
//console.log(bills, tip);
const tipsTotal = [];
for (let i = 0; i < tip.length; i++) {
    tipsTotal.push(tip[i] + bills[i]);
}

console.log(tipsTotal);
//(10) [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]

//teachers method....very very important
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total);
//(10) [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum= sum+arr[i];
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
calcAverage([2, 3, 7]);
console.log(calcAverage[2, 3, 7]);
console.log(calcAverage(total));
console.log(calcAverage(tips));

//////very,very important///////


