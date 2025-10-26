const users = [
   {
     name:'Brook',
     scores:75,
     skills:['HTMl', 'CSS', 'JS'],
     age:16
   },
   {
     name:'Alex',
     scores:80,
     skills:['HTML', 'CSS', 'JS', 'REACT'],
     age:18
   },
   {
     name:'David',
     scores:75,
     skills:['HTML', 'CSS'],
     age:22
   },
   {
     name:'John',
     scores:85,
     skills:['HTML'],
     age:25
   },
   {
     name:'Sara',
     scores:95,
     skills:['HTML', 'CSS', 'JS'],
     age: 26
   },
   {
     name:'Martha',
     scores:80,
     skills:['HTML', 'CSS', 'JS'],
     age:18
   },
   {
     name:'Matthew',
     scores:60,
     skills:[],
     age:22
   },
   {
     name:'Thomas',
     scores:90,
     skills:['HTML', 'CSS', 'DART', 'KOTLIN'],
     age:20
   },
   {
     name:'Promise',
     scores:90,
     skills:['HTML', 'CSS', 'JS', 'FLUTTER'],
    age:20
}
]

// As an array 
const names = users.map(({name}) => name)
console.log(names);

// As a list 
const namess = users.map(({name}) => {
  console.log(name);
})
const skills = users.filter(({skills}) => skills.length < 2)
console.log(skills);


// with destructuring 
let allNames = []
let lessThan2 = []
users.map(({name,skills})=>{
  allNames.push(name)
  if(skills.length < 2){
    lessThan2.push(name)
  }
})
console.log(allNames);
console.log(lessThan2);



// without destructuring  
users.map((user) => {
  allNames.push (user.name)
  let getLength = user.skills.length
  if(getLength < 2){
    lessThan2.push(user.name)
  }
})
console.log(allNames);
console.log(lessThan2);