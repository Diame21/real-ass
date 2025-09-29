// 1st question
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

if (countries.includes('Ethiopia')) {
    console.log(countries.indexOf('Ethiopia'))
    console.log('ETHIOPIA');
}



// second question 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS processor');
}
else{
    console.log(webTechs.push('Sass'))
    console.log(webTechs);
}



// 3rd question 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart.push('Sugar'));
console.log(shoppingCart);
const honey = shoppingCart.indexOf('Honey')
console.log(shoppingCart.splice(honey, 1));
const mTea = shoppingCart.indexOf('Tea')
if (mTea !== -1) {
    shoppingCart[mTea] = 'Green Tea'
}
console.log(shoppingCart);





