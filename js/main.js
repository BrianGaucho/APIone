


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
        profession: 'Undertaker',
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


// // MAPPING OVER THE ARRAY

// let devNames = devClass.map((deve) =>{
//     return deve.name

// })

// console.log(devNames);

// let devAges = devClass.map((deve) =>{
//     return deve.age
// })

// console.log(devAges);

// console.log(devClass[2]);

 
// // COMBINING FILTER/REDUCE AND MAP METHODS

// let abovetwenty = devClass.filter((ages) =>{
//     return ages.age > 20
    

// }).map((ages) =>{

//     return ages.age +10
    
// }).reduce((acc,curr)=>{
//     return acc + curr
// },0)


// console.log(abovetwenty);



// // DOM manupilation

// // QUERY SELECTOR

// let div = document.querySelector('div')

// console.log(div);

// // Selector ALL

// let all = document.querySelectorAll('div')

// console.log(all);

// // Using tagname

// let tagname = document.getElementsByTagName('div')

// console.log(tagname);

// // Using classes

// // let dove = document.getElementsByClassName('dove')

// let dove = document.querySelector('.dove')

// let speech = 'okrrruuoh!!!'

// dove.textContent = speech

// let secondDove = document.createElement('div')

// console.log(secondDove);

// dove.append(secondDove)

// console.log(dove);


// // Using IDs

// // ADDING ELEMENTS IN TH E BROWSER

// let gandhi = document.getElementById('gandhi')

// console.log(gandhi);


// let Names = devClass.map((names) =>{
//     return names.name

// })

// gandhi.textContent = Names

// let career = document.createElement('P')

// let profession = devClass.map((deve) =>{
//     return deve.profession
// })

// career.textContent = profession

// gandhi.append(career)

// let years = document.createElement('p')

// let age = devClass.map((deve) =>{
//     return deve.age
// })

// years.textContent = age

// gandhi.append(years)


// console.log(devClass);




// const imageUrls = [
//     'kong.jpg',
//     'falcon.jpeg',
//     'horse.jpg',
//     'elephant.jpg',
//     'elephant.jpg',
//   ];
  
//   const container = document.querySelector('#image-container');
  
//   for (let i = 0; i < imageUrls.length; i++) {

//     const image = document.createElement('img');
//     image.src = imageUrls[i];
  
//     container.appendChild(image);
//   }


  for (i = 0; i < devClass.length; i++) {

    let body = document.querySelector('body')

     
    let container = document.createElement('div');

    let card =  document.createElement('div')

    let image = document.createElement('img')

    let name =  document.createElement('h1')

    let age =  document.createElement('h3')

    let profession =  document.createElement('h3')

    let tribe  =  document.createElement('h3')

    let married =  document.createElement('h3')

    let gender =  document.createElement('h3')

    let hobbies =  document.createElement('h3')

    name.textContent = devClass[i].name

    

    profession.textContent = devClass[i].profession

    age.textContent = devClass[i].age

    gender.textContent = devClass[i].gender

    married.textContent = devClass[i].married

    hobbies.textContent = devClass[i].hobbies

    tribe.textContent = devClass[i].tribe



    console.log(devClass[i])

    console.log(body);

    body.append(container)

    container.appendChild(card)

    card.append(name,profession,age,gender,married,tribe,hobbies)
    
  }

  
  
