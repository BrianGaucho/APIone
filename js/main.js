

// alert("chelsea is loosing")

let numberOne =1
let numberTwo =5
let numberFour ="10"
let numberThree =15
let numberFive =6

console.log(typeof(numberOne));

// ADDITION
console.log(numberThree + numberTwo);

// SUBSTRACTION
console.log(numberThree - numberOne);

// MULTIPLICATION
console.log(numberThree * numberTwo);

// MODULUS
console.log(numberThree % numberFour);

// combined
console.log(numberOne + numberFour - numberTwo / numberFive * numberTwo );

console.log(numberOne.toString());

let stringVariable = numberOne.toString()

console.log(typeof(stringVariable));

let numVariable = parseInt(stringVariable)

console.log(typeof(numVariable));



let firststring = "we are learning javascript"

console.log(firststring)

console.log(typeof(firststring));

let numberofcharacters = firststring.length

console.log(numberofcharacters);


let cloud = `the doctor said, "you will live"`

console.log(cloud);




// concatination

let sentence = "class" +'' + "is" + ''+ "fun"

console.log(sentence);

let sentencetwo = `glaass ` + `broke ` + `into`

console.log(sentencetwo);

let firstpart = `were learning`

let lastpart = `javascript`

let three = firstpart + lastpart + "today" 

console.log(three);


let developers = ['Brian','john','Ham','amo']

console.log(developers);

let primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]

console.log(primeNumbers);

console.log(primeNumbers[4]);


console.log(developers[2]);

console.log(primeNumbers.length);

developers.push('rukia')

console.log(developers);

developers.push('hassan')

developers.push('faith')

developers.push('constance')

console.log(developers);

developers.pop('constance')

console.log(developers);

developers.unshift('constance')

console.log(developers);

developers.shift('constance')

console.log(developers);

developers.push('constance')

console.log(developers);

let combined = [developers  + primeNumbers]

console.log(combined);


// spread OPRERATOR


let clonedevelopers = [...developers]

console.log(clonedevelopers);


let ages = [19,21,25,22,19,18]

let gender = ['male','male','male','male','male','female']

let combinedgender = [...ages,...gender]

console.log(combinedgender);


primeNumbers.reverse()

console.log(primeNumbers);

primeNumbers.sort()

console.log(primeNumbers);

let presidents = ['Kenyatta','Moi','Kibaki','Uhuru','Ruto']

let opposition = ['Jaramogi','Matiba','kibaki','Raila','Ekuro']

let combinedresults = presidents.concat(opposition)

console.log(combinedresults);

console.log(primeNumbers);




// FUNCTION

function greetings(name) {
    console.log(name + 'hello world');

}

greetings('Juma ')

function addition(num1,num2,num3,num4,num5){
    console.log(num1 + num2 + num3 + num4 + num5);
}

addition(1000,100,300,500,1000)



// MAP METHOD ON ARRAYS

console.log(primeNumbers);

let newarray = primeNumbers.map((primeNumbers) =>{

    return primeNumbers * 2
})

console.log(newarray);

let evenNumbers = [2,4,6,8,10,12,14,16,18,20]

let productByFour = evenNumbers.map((evenNumbers) =>{
    return evenNumbers * 4
})

console.log(productByFour);



let animals = ['goat','cow','cat','dog']

let animaladd = animals.map((animal)=>{
    return animal + 's'
})

console.log(animaladd);



let nums = [4,9,16,25,36,49,64]

let numsquare = nums.map((num)=>{
    return num ** 2
})

console.log(numsquare);


let squareroot = nums.map((num)=>{
    return Math.sqrt(num)
})

console.log(squareroot);



// Remove ganira and ashivaka


let billionares = ['Elon','Jeff','Billgates','ganira','shivaka']


console.log(billionares);

billionares.pop()

console.log(billionares);

billionares.pop()

console.log(billionares);


// ADDING AND RETURNING AN ELEMENT TO AN ARRAY

let numbers = [1,2,3]

let newNumber = [4]

numbers.push(newNumber)

console.log(numbers.slice(-1)[0]);


// DESTRUCTURING ARRAYS

let fruits = ['mango','orange','apple']

let fruits1 = fruits[0]

let fruits2 = fruits[1]

let fruits3 = fruits[2]

console.log(fruits1);

console.log(fruits2);

console.log(fruits3);

// fruits = [fruits1,fruits2,fruits3]

// console.log(fruits);


console.log(navigator.appVersion);


// OBJECTS

let person = {
    firstName:'John',
    lastName:'Smith',
    location:'Nairobi',
    height:3.7,
    age:37,
    married:true,
    salary:null,
    netWorth:undefined,
    tribe:'Kamba',
    'life expectancy':100,
    hobbies: ['painting','cycling','watching','Dancing','Reading']
}

console.log(person);

console.log(person.firstName);

console.log(person.tribe);

console.log(person['life expectancy']);

console.log(person.hobbies[3]);



// ARRAY OF OBJECTS

let devClass = [
    {
        id: 01,
        name: 'Hassan Ondiek',
        gender: 'male',
        age: 23,
        married: 'false',
        profession: 'web developer',
        tribe: 'Luo',
        hobbies: ['football','video games']
    },

    {
        id: 02,
        name: 'John Ashivaka',
        gender: 'male',
        age: 23,
        married: 'false',
        profession: 'front end web developer',
        tribe: 'Luhya',
        hobbies: ['Swimming','watching football',]
    },

    {
        id: 03,
        name: 'Philip Mwendwa',
        gender: 'male',
        age: 19,
        married: 'false',
        profession: 'web developer',
        tribe: 'Kamba',
        hobbies: ['riding','football']
    },

    {
        id: 04,
        name: 'Simon Ojuku',
        gender: 'male',
        age: 18,
        married: 'false',
        profession: 'Undetaker',
        tribe: 'Kisii',
        hobbies: ['riding','football']
    },

    {
        id: 05,
        name: 'Hillary Mukaka',
        gender: undefined,
        age: 20,
        married: false,
        profession: 'web developer',
        tribe: 'Luhya',
        hobbies: ['swimming','football']
    },

    {
        id: 06,
        name: 'Abraham Mafuoli',
        gender: 'male',
        age: 30,
        married: true,
        profession: 'Sniper',
        tribe: 'Kamba',
        hobbies: ['hustling','reserching']
    },

    {
        id: 07,
        name: 'Fauz Swaleh',
        gender: 'male',
        age: 27,
        married: true,
        profession: 'web developer',
        tribe: 'Nubi',
        hobbies: ['riding','football']
    },

    {
        id: 08,
        name: 'Ann Ngugi',
        gender: 'female',
        age: 20,
        married: false,
        profession: 'Actress',
        tribe: 'Kikuyu',
        hobbies: ['Photography','Volunteering']
    },

    {
        id: 09,
        name: 'Mike Mutuku',
        gender: undefined,
        age: 35,
        married: true,
        profession: 'Austranuts',
        tribe: 'Alien',
        hobbies: ['travelling','video games']
    },

    {
        id: 010,
        name: 'Rukia Rashid Akinyi',
        gender: 'female',
        age: 110,
        married: true,
        profession: 'Film Producer',
        tribe: 'Digo',
        hobbies: ['listening to music','Photography','traveling']
    },

    {
        id: 011,
        name: 'Majoni Wadenya',
        gender: 'male',
        age: 100,
        married: true,
        profession: 'Advocate',
        tribe: 'Kikuyu',
        hobbies: ['swimming','coding']
    },

    {
        id: 012,
        name: 'Constance Khalumba Itolondo',
        gender: 'female',
        age: 70,
        married: true,
        profession: 'Journalist',
        tribe: 'Teso',
        hobbies: ['singing','drawing']
    },

    {
        id: 013,
        name: 'Ganira Denis',
        gender: 'male',
        age: 3,
        married: false,
        profession: 'kid',
        tribe: 'Giriama',
        hobbies: ['watching','sleeping']
    },

    {
        id: 014,
        name: 'Faith Victoria Sikuku',
        gender: 'female',
        age: 90,
        married: true,
        profession: 'chef',
        tribe: 'Maasai',
        hobbies: ['Travelling','Eating']
    },

    {
        id: 015,
        name: 'Brian Nyamweya',
        gender: 'male',
        age: 150,
        married: true,
        profession: 'Software Developer',
        tribe: 'Kisii',
        hobbies: ['Cycling','coding']
    }

]

console.log(devClass);


// MAPPING OVER THE ARRAY

let devNames = devClass.map((deve) =>{
    return deve.name

})

console.log(devNames);

let devAges = devClass.map((deve) =>{
    return deve.age
})

console.log(devAges);

console.log(devClass[2]);


let numbersum = nums.reduce((curr,acc,i,arr)=>{
    return acc + curr
},0)

console.log(numbersum);


let assign = [100,1000,2,3,10]

let assignSum = assign.reduce((curr,acc,i,arr) =>{
    return acc + curr
},0)

console.log(assignSum);

let digits = [10.33,7.5,8.19,20.98,30.99]

let digitSum = digits.reduce((curr,acc,i,arr)=>{
    return acc + curr
},0)

console.log(digitSum);

console.log(Math.round(digitSum));

// GETTING CURRENT TIME AND DATE

let today = new Date();

let hours = today.getHours()

let minutes = today.getMinutes()

console.log(today);

// MODERN DESTRUCTURING OF ARRAY

let [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p] = devClass
console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);

// FILTERING

let oddnumber = [1,3,5,7,9,11,13,15,17,19,21,23]

let newnumber = oddnumber.filter((oddnumber) => {
    return oddnumber> 3
})

console.log(newnumber);

 
// COMBINING FILTER/REDUCE AND MAP METHODS

let abovetwenty = devClass.filter((ages) =>{
    return ages.age > 20
    

}).map((ages) =>{

    return ages.age +10
    
}).reduce((acc,curr)=>{
    return acc + curr
},0)


console.log(abovetwenty);

// OBJECT DESTRUCTTURING

let bmw = {
    color: 'gold',
    engine: 'V12',
    seats: 4,
    automatic: false,
    accelarate() {
        console.log('i am accelerating!!');
    }
}

console.log(bmw);

console.log(bmw.accelarate());


// DESTRUCTTURING  Es5

// let color = bmw.color

// let engine = bmw.engine

// let seats = bmw.seats

// let automatic = bmw.automatic




// DESTRUCTURING IN Es6

let {color,engine,seats,automatic} = bmw

console.log(color,engine,seats,automatic);


// Greetings

// function greetings(name) {
//     console.log('hello'+name);

// }

// greetings(' friends')

function addition(num1,num2,num3,num4,num5){
    console.log(num1 + num2 + num3 + num4 + num5);
}

addition(150,100,20,115,250)


function multiplication(num1,num2,num3,num4,num5){
    console.log(num1 * num2 * num3 * num4 * num5);
}

multiplication(5,3,2,6,7,)


function divition(num1,num2,){
    console.log(num1 /num2);
}

divition(255,15)


function SUBSTRACTION(num1,num2,num3){
    console.log(num1 - num2 -num3);
}

SUBSTRACTION(100,25,30)


function modulus(num1,num2){
    console.log(num1 % num2);
}

modulus(585,10)

// addding an element into an array function 
        //    method one
let arr = []

function feedArr(Smith){
    return arr.push(Smith)
}
feedArr(1)

console.log(arr);

        //   method two

        function feedArr(){
            let arr = []
            arr.push()
            console.log(arr);
        }

        feedArr()



// ARROW FUNCTIONS

const Greetings = (friendsName) => {
    console.log(`Hello ${friendsName},how are you?`);
}

Greetings('Newyork')

const greetPeople = (friendsname) => console.log(`Hello ${friendsname}, how are you?`);

greetPeople(developers)



// FOR LOOP

for(let i = 0; i < 5+1; i ++){
    console.log('Hello world',i);
}


// IF Loop

let win = 0;

if(win<= 10){
    console.log(win);
}else {
    console.log('win is greater than 10');
}

// let Age = 20;

// if(Age> 18){
//     console.log(Age);
// }else{
//     console.log('User under eighteen');
// }

for(i=1; i< 10;i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

            // TIME
//    const time = () =>{
//     let date = new Date()

//     let year = date.getFullYear()
    

//    }

//    console.log(date);

let Nums = [2,3,4,5]

for(let i = 2; i <= Nums.length+1; i ++){
    console.log(i);
}

let sleepers = ['tim','tom','joe','ann','Peace']

for(let i = 0; i <= sleepers.length; i ++){
    console.log(sleepers);
}

    //    WHILE

let numS = 0

while(numS <= 20) {
    console.log(numS);

    numS++
}

//       DO WHILE

// let I = 0;
// const N = 5;


// do {
    // console.log(I);
    // I++;
// } while(I <= N);


    //   FOR IN
let teams = ['Man U','Arsenal','Totenam']

for(team in teams){
    console.log(team);
}


        // FOR OF
for(team of teams){
    console.log(team);
}


class Car{
    constructor(model,color,millage){
        this.model = model
        this.color = color
        this.millage = millage
    }
    walk(){
        console.log('I am walking');
    }
}

const BMW = new Car('x6','gold',10)

console.log(BMW);


// function showTime(){
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     let millisecons = date.getMilliseconds()

//     let time = `${hours} : ${minutes} : ${seconds} : ${millisecons}`

//     setTimeout(() => showTime(),1000)

//     console.log(time);
// }

// showTime()

// DOM manupilation

// QUERY SELECTOR

let div = document.querySelector('div')

console.log(div);

// Selector ALL

let all = document.querySelectorAll('div')

console.log(all);

// Using tagname

let tagname = document.getElementsByTagName('div')

console.log(tagname);

// Using classes

// let dove = document.getElementsByClassName('dove')

let dove = document.querySelector('.dove')

let speech = 'okrrruuoh!!!'

dove.textContent = speech

let secondDove = document.createElement('div')

console.log(secondDove);

dove.append(secondDove)

console.log(dove);


// Using IDs

// ADDING ELEMENTS IN TH E BROWSER

let gandhi = document.getElementById('gandhi')

console.log(gandhi);


let Names = devClass.map((names) =>{
    return names.name

})

gandhi.textContent = Names

let career = document.createElement('h1')

let profession = devClass.map((deve) =>{
    return deve.profession
})

career.textContent = profession

gandhi.append(career)

let years = document.createElement('p')

let age = devClass.map((deve) =>{
    return deve.age
})

years.textContent = age

gandhi.append(years)


console.log(devClass);


let img = document.createElement("img");

img.src = "Squirrel.jpg";

let src = document.getElementById("myImg");

src.appendChild(img);
