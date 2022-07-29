const name = 'max'
let age = 29
const hobbies = true;

age = 30;

const summerizeuser = (a,b,c) =>{
  return "name is " + a + 'age ' + b + 'hobby ' + c
}

const add = (a,b) => a + b
const addrandom = () => 1+1
const addOne = a => a + 1

console.log(add(1,2), addrandom(), addOne(1))
console.log(summerizeuser(name,age,hobbies))


const person = {
  name: 'max',
  age: 29,
  greet() {
    console.log('hi i m ' + this.name)
  }
}

person.greet();
// arrays

const hobbieses = ['sport', 'test', 1, true, person]

for (let hobby of hobbieses) {
  console.log(hobby)
}

console.log(hobbieses.map( hobby => {
  return 'hobby: '+ hobby
}));
console.log(hobbieses)

hobbieses.push('programin')
const copy  = [...hobbieses];
console.log(copy)
console.log(hobbieses)

const toArray = (...args) => {
  return args
}

console.log(toArray(1,2,3,4))

const printName = ({name}) => {
  console.log(name)
}


printName(person)

const {nameP, ageP} = person;
console.log(nameP, ageP)

const [ hobby1,  hobby2] = hobbieses
console.log(hobby1, hobby2);

setTimeout(() => {
  console.log('is done')
  return fetchdata().then(text => {
    console.log(text)
    return fetchdata();
  }).then( text2 => {
    console.log(text2)
  })
}, 2000 )

console.log('heloo')

const fetchdata =  () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 2000)
  });
  return promise
}
