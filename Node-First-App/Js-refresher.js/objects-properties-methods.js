const person = {
    name: 'TJ',
    age: 17,
    greet() {
        console.log('Hi!!!!!, I am ' + this.name)
    }
};
person.greet();

const printName = (personData) => {
    console.log(personData.name);
};
printName(person);

const printNameD = ({name}) => {
    console.log(name);
};
printNameD(person);


const {name} = person;
console.log(name);