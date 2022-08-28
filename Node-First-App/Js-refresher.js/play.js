let name = "Ta-Seen Junaid";
let age = 17;
let student = true;

const userDetails = (userName, userAge, isStudent) => {
    return (
        'Name is '+
        userName +
        ', age is ' +
        userAge + 
        ' and is user student: ' +
        isStudent);
};
console.log(userDetails(name, age, student));

const add = (a, b) => a+b;
console.log(add(5, 6));

const addOne = a => a+1;
console.log(addOne(3))

const addTwoThree = () => 2+3;
console.log(addTwoThree());
